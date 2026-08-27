import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./English.css";

function English() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/english")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch English topics");
        }

        return response.json();
      })
      .then((data) => {
        setTopics(data.topics || []);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load English topics.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getIcon = (name) => {
    const icons = {
      Antonyms: "↔",
      Articles: "Aa",
      Prepositions: "⌖",
      "Reading Comprehension": "▤",
      "Sentence Correction": "✎",
      "Subject-Verb Agreement": "✓",
      Synonyms: "≈",
      Tenses: "◷",
    };

    return icons[name] || "A";
  };

  if (loading) {
    return (
      <div className="english-container">
        <div className="english-loading">
          <div className="loading-spinner"></div>
          <p>Loading English topics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="english-container">
        <div className="english-error">
          <span>⚠</span>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="english-container">

      {/* Hero Section */}
      <section className="english-hero">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-dot"></span>
            ENGLISH ENGINE
          </div>

          <h1>
            Master <span>English</span>
            <br />
            for Aptitude Exams
          </h1>

          <p>
            Build strong vocabulary, grammar and verbal ability
            with structured lessons and exam-focused practice.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <strong>{topics.length}</strong>
              <span>Topics</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <strong>100+</strong>
              <span>Concepts</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <strong>∞</strong>
              <span>Practice</span>
            </div>
          </div>

        </div>

        <div className="hero-decoration">
          <div className="letter-circle">
            <span>A</span>
          </div>

          <div className="floating-word word-one">
            Grammar
          </div>

          <div className="floating-word word-two">
            Vocabulary
          </div>

          <div className="floating-word word-three">
            Verbal
          </div>
        </div>

      </section>

      {/* Topics Section */}
      <section className="english-topics">

        <div className="topics-heading">
          <div>
            <span className="section-label">LEARNING PATH</span>

            <h2>English Topics</h2>

            <p>
              Choose a topic and start strengthening your skills.
            </p>
          </div>

          <span className="topic-count">
            {topics.length} Topics
          </span>
        </div>

        <div className="topic-grid">

          {topics.map((topic, index) => (

            <div
              className="english-topic-card"
              key={topic.id}
              onClick={() => navigate(`/english/${topic.slug}`)}
            >

              <div className="card-top">

                <div className="topic-icon">
                  {getIcon(topic.name)}
                </div>

                <span className="topic-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <div className="card-body">

                <h3>{topic.name}</h3>

                <p>
                  Learn concepts, rules and exam-focused
                  questions.
                </p>

              </div>

              <div className="card-footer">

                <span>
                  {topic.difficulty
                    ?.replaceAll("_", " ")
                    .replace(/\b\w/g, (letter) =>
                      letter.toUpperCase()
                    )}
                </span>

                <span className="arrow">→</span>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default English;