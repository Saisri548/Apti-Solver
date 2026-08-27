
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EnglishTopic.css";

function EnglishTopic() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================================
  // FETCH TOPIC
  // ==========================================

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:5000/api/english/${slug}`
        );

        if (!response.ok) {
          throw new Error("English topic not found");
        }

        const data = await response.json();

        if (!data.success || !data.topic) {
          throw new Error("Invalid API response");
        }

        setTopic(data.topic);
      } catch (err) {
        console.error("Error loading English topic:", err);
        setError("Unable to load this English topic.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchTopic();
    }
  }, [slug]);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="english-topic-page">
        <div className="topic-loading">
          <div className="loading-spinner"></div>
          <p>Loading topic...</p>
        </div>
      </div>
    );
  }

  // ==========================================
  // ERROR
  // ==========================================

  if (error || !topic) {
    return (
      <div className="english-topic-page">
        <div className="topic-error">
          <h2>Topic not found</h2>

          <p>{error}</p>

          <button onClick={() => navigate("/english")}>
            ← Back to English
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // CONTENT
  // ==========================================

  const lines = topic.content
    ? topic.content.split("\n")
    : [];

  // ==========================================
  // INLINE TEXT
  // Handles **bold text**
  // ==========================================

  const renderText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (
        part.startsWith("**") &&
        part.endsWith("**")
      ) {
        return (
          <strong key={index}>
            {part.slice(2, -2)}
          </strong>
        );
      }

      return (
        <span key={index}>
          {part}
        </span>
      );
    });
  };

  // ==========================================
  // RENDER CONTENT
  // ==========================================

  const renderContent = () => {
    const elements = [];

    let i = 0;
    let sectionNumber = 0;

    while (i < lines.length) {
      const line = lines[i].trim();

      // ======================================
      // SKIP YAML FRONT MATTER
      //
      // ---
      // topic: Reading Comprehension
      // domain: english
      // difficulty: beginner_to_advanced
      // ---
      // ======================================

      if (line === "---") {
        i++;

        while (
          i < lines.length &&
          lines[i].trim() !== "---"
        ) {
          i++;
        }

        // Skip closing ---
        if (i < lines.length) {
          i++;
        }

        continue;
      }

      // ======================================
      // MAIN TITLE
      // # Reading Comprehension
      // ======================================

      if (line.startsWith("# ")) {
        elements.push(
          <div
            className="content-main-title"
            key={i}
          >
            <h2>
              {renderText(
                line.substring(2)
              )}
            </h2>
          </div>
        );

        i++;
        continue;
      }

      // ======================================
      // SECTION
      // ## 1. Concept
      // ======================================

      if (line.startsWith("## ")) {
        sectionNumber++;

        elements.push(
          <section
            className="content-section"
            key={i}
          >
            <div className="section-number">
              {String(sectionNumber).padStart(2, "0")}
            </div>

            <div className="section-main">
              <h2>
                {renderText(
                  line.substring(3)
                )}
              </h2>
            </div>
          </section>
        );

        i++;
        continue;
      }

      // ======================================
      // SUBSECTION
      // ### Example 1
      // ======================================

      if (line.startsWith("### ")) {
        elements.push(
          <h3
            className="content-subheading"
            key={i}
          >
            {renderText(
              line.substring(4)
            )}
          </h3>
        );

        i++;
        continue;
      }

      // ======================================
      // HORIZONTAL LINE
      // ======================================

      if (line === "---") {
        elements.push(
          <hr
            className="content-divider"
            key={i}
          />
        );

        i++;
        continue;
      }

      // ======================================
      // BULLET LIST
      // ======================================

      if (line.startsWith("- ")) {
        const bullets = [];

        while (
          i < lines.length &&
          lines[i].trim().startsWith("- ")
        ) {
          bullets.push(
            lines[i]
              .trim()
              .substring(2)
          );

          i++;
        }

        elements.push(
          <ul
            className="content-list"
            key={`list-${i}`}
          >
            {bullets.map(
              (bullet, index) => (
                <li key={index}>
                  {renderText(bullet)}
                </li>
              )
            )}
          </ul>
        );

        continue;
      }

      // ======================================
      // NUMBERED LIST
      // ======================================

      if (/^\d+\.\s/.test(line)) {
        const items = [];

        while (
          i < lines.length &&
          /^\d+\.\s/.test(
            lines[i].trim()
          )
        ) {
          items.push(
            lines[i]
              .trim()
              .replace(/^\d+\.\s/, "")
          );

          i++;
        }

        elements.push(
          <ol
            className="content-numbered-list"
            key={`numbered-${i}`}
          >
            {items.map(
              (item, index) => (
                <li key={index}>
                  {renderText(item)}
                </li>
              )
            )}
          </ol>
        );

        continue;
      }

      // ======================================
      // TABLE
      // ======================================

      if (
        line.startsWith("|") &&
        lines[i + 1]?.includes("---")
      ) {
        const headers = line
          .split("|")
          .map((item) => item.trim())
          .filter(Boolean);

        i += 2;

        const rows = [];

        while (
          i < lines.length &&
          lines[i].trim().startsWith("|")
        ) {
          const cells = lines[i]
            .split("|")
            .map((item) => item.trim())
            .filter(Boolean);

          rows.push(cells);

          i++;
        }

        elements.push(
          <div
            className="content-table-wrapper"
            key={`table-${i}`}
          >
            <table className="content-table">

              <thead>
                <tr>
                  {headers.map(
                    (header, index) => (
                      <th key={index}>
                        {renderText(header)}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {rows.map(
                  (row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map(
                        (cell, cellIndex) => (
                          <td key={cellIndex}>
                            {renderText(cell)}
                          </td>
                        )
                      )}
                    </tr>
                  )
                )}
              </tbody>

            </table>
          </div>
        );

        continue;
      }

      // ======================================
      // EMPTY LINE
      // ======================================

      if (!line) {
        i++;
        continue;
      }

      // ======================================
      // NORMAL PARAGRAPH
      // ======================================

      elements.push(
        <p
          className="content-paragraph"
          key={i}
        >
          {renderText(line)}
        </p>
      );

      i++;
    }

    return elements;
  };

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <div className="english-topic-page">

      {/* BACK BUTTON */}

      <button
        className="back-button"
        onClick={() => navigate("/english")}
      >
        ← Back to English
      </button>


      {/* HEADER */}

      <header className="topic-header">

        <div className="topic-header-content">

          <span className="topic-domain">
            ENGLISH ENGINE
          </span>

          <h1>{topic.name}</h1>

          <p>
            Master {topic.name.toLowerCase()} with
            concepts, rules, examples and
            exam-focused practice.
          </p>

          <div className="topic-meta">

            <span>
              📚 English
            </span>

            <span>
              🎯{" "}
              {topic.difficulty
                ?.replaceAll("_", " ")
                .replaceAll("-", " ")}
            </span>

          </div>

        </div>

      </header>


      {/* CONTENT */}

      <main className="topic-content">

        <article className="topic-lesson">

          {renderContent()}

        </article>

      </main>

    </div>
  );
}

export default EnglishTopic;
