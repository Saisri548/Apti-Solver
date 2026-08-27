import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  CircleAlert,
  Lightbulb,
  ListChecks,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

const API_BASE_URL = "http://localhost:5000/api/quants";

/* =========================================================
   BUBBLE CURSOR
========================================================= */

function BubbleCursor() {
  useEffect(() => {
    const bubble = document.createElement("div");

    bubble.className =
      "pointer-events-none fixed z-[9999] h-8 w-8 rounded-full border border-cyan-400/60 bg-cyan-400/10 shadow-lg shadow-cyan-400/20 backdrop-blur-sm transition-transform duration-75";

    document.body.appendChild(bubble);

    const moveCursor = (event) => {
      bubble.style.transform = `translate(${event.clientX - 16}px, ${
        event.clientY - 16
      }px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      bubble.remove();
    };
  }, []);

  return null;
}

/* =========================================================
   MARKDOWN PARSER
========================================================= */

function parseMarkdown(content) {
  if (!content) {
    return {
      topic: "",
      domain: "",
      difficulty: "",
      sections: [],
    };
  }

  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

  let metadata = {};

  if (frontmatterMatch) {
    frontmatterMatch[1].split("\n").forEach((line) => {
      const [key, ...valueParts] = line.split(":");

      if (key && valueParts.length) {
        metadata[key.trim()] = valueParts.join(":").trim();
      }
    });
  }

  const markdownWithoutFrontmatter = content.replace(
    /^---\n[\s\S]*?\n---\n/,
    ""
  );

  const lines = markdownWithoutFrontmatter.split("\n");

  const sections = [];
  let currentSection = null;

  lines.forEach((line) => {
    const headingMatch = line.match(/^##\s+(.+)/);

    if (headingMatch) {
      currentSection = {
        title: headingMatch[1].trim(),
        content: [],
      };

      sections.push(currentSection);
      return;
    }

    if (currentSection) {
      currentSection.content.push(line);
    }
  });

  return {
    topic: metadata.topic || "",
    domain: metadata.domain || "",
    difficulty: metadata.difficulty || "",
    sections,
  };
}

/* =========================================================
   INLINE MARKDOWN
========================================================= */

function renderInlineMarkdown(text) {
  if (!text) return null;

  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={index} className="text-slate-700">
          {part.slice(1, -1)}
        </em>
      );
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded-md bg-cyan-50 px-1.5 py-0.5 text-cyan-700"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

/* =========================================================
   SECTION CONTENT
========================================================= */

function SectionContent({ lines }) {
  const elements = [];

  let paragraph = [];
  let listItems = [];
  let tableRows = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      const text = paragraph.join(" ").trim();

      if (text) {
        elements.push(
          <p
            key={`paragraph-${elements.length}`}
            className="text-[15px] leading-7 text-slate-600"
          >
            {renderInlineMarkdown(text)}
          </p>
        );
      }

      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="space-y-3">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 text-[15px] leading-7 text-slate-600"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />

              <span>{renderInlineMarkdown(item)}</span>
            </li>
          ))}
        </ul>
      );

      listItems = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const rows = tableRows.filter((row) => !row.includes("---"));

      if (rows.length > 0) {
        const parsedRows = rows.map((row) =>
          row
            .split("|")
            .map((cell) => cell.trim())
            .filter(Boolean)
        );

        const headers = parsedRows[0];
        const body = parsedRows.slice(1);

        elements.push(
          <div
            key={`table-${elements.length}`}
            className="my-5 overflow-x-auto rounded-2xl border border-slate-200"
          >
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead className="bg-cyan-50">
                <tr>
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="border-b border-cyan-100 px-5 py-4 font-semibold text-cyan-800"
                    >
                      {renderInlineMarkdown(header)}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {body.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-slate-100 last:border-0"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-5 py-4 text-slate-600"
                      >
                        {renderInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      tableRows = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();

      if (tableRows.length > 0) {
        flushTable();
      }

      return;
    }

    if (trimmed.startsWith("|")) {
      flushParagraph();
      flushList();

      tableRows.push(trimmed);
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();

      if (tableRows.length > 0) {
        flushTable();
      }

      listItems.push(trimmed.slice(2));
      return;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();

      if (tableRows.length > 0) {
        flushTable();
      }

      elements.push(
        <h3
          key={`heading-${elements.length}`}
          className="pt-4 text-lg font-semibold text-slate-900"
        >
          {trimmed.slice(4)}
        </h3>
      );

      return;
    }

    if (tableRows.length > 0) {
      flushTable();
    }

    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();
  flushTable();

  return <div className="space-y-5">{elements}</div>;
}

/* =========================================================
   SECTION ICON
========================================================= */

function getSectionIcon(title) {
  const lower = title.toLowerCase();

  if (lower.includes("concept")) return <BookOpen size={20} />;
  if (lower.includes("formula")) return <Calculator size={20} />;
  if (lower.includes("trick")) return <Zap size={20} />;
  if (lower.includes("example")) return <Lightbulb size={20} />;
  if (lower.includes("practice")) return <Target size={20} />;
  if (lower.includes("answer")) return <CheckCircle2 size={20} />;
  if (lower.includes("mistake")) return <CircleAlert size={20} />;

  return <BookOpen size={20} />;
}

/* =========================================================
   SECTION STYLE
========================================================= */

function getSectionStyle(title) {
  const lower = title.toLowerCase();

  if (lower.includes("formula")) {
    return {
      icon: "text-blue-600",
      iconBg: "bg-blue-50",
      border: "border-blue-100",
    };
  }

  if (lower.includes("trick")) {
    return {
      icon: "text-cyan-600",
      iconBg: "bg-cyan-50",
      border: "border-cyan-100",
    };
  }

  if (lower.includes("practice")) {
    return {
      icon: "text-blue-600",
      iconBg: "bg-blue-50",
      border: "border-blue-100",
    };
  }

  if (lower.includes("mistake")) {
    return {
      icon: "text-cyan-600",
      iconBg: "bg-cyan-50",
      border: "border-cyan-100",
    };
  }

  return {
    icon: "text-cyan-600",
    iconBg: "bg-cyan-50",
    border: "border-slate-200",
  };
}

/* =========================================================
   SOLVED EXAMPLES
========================================================= */

function SolvedExamples({ content }) {
  const examples = [];

  const blocks = content.split(/###\s+Example\s+\d+/);

  blocks.forEach((block) => {
    if (!block.trim()) return;

    const problem = block.match(
      /\*\*Problem:\*\*\s*([\s\S]*?)(?=\*\*Approach:\*\*)/
    )?.[1];

    const approach = block.match(
      /\*\*Approach:\*\*\s*([\s\S]*?)(?=\*\*Solution:\*\*)/
    )?.[1];

    const solution = block.match(
      /\*\*Solution:\*\*\s*([\s\S]*?)(?=\*\*Answer:\*\*)/
    )?.[1];

    const answer = block.match(
      /\*\*Answer:\*\*\s*([\s\S]*?)(?=\*\*Key Insight:\*\*)/
    )?.[1];

    const insight = block.match(
      /\*\*Key Insight:\*\*\s*([\s\S]*)/
    )?.[1];

    examples.push({
      problem,
      approach,
      solution,
      answer,
      insight,
    });
  });

  return (
    <div className="space-y-5">
      {examples.map((example, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-white">
                {index + 1}
              </div>

              <span className="font-semibold text-slate-800">
                Solved Example
              </span>
            </div>

            <Lightbulb size={18} className="text-cyan-600" />
          </div>

          <div className="space-y-5 p-5">
            {example.problem && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-600">
                  Problem
                </p>

                <p className="leading-7 text-slate-700">
                  {renderInlineMarkdown(example.problem.trim())}
                </p>
              </div>
            )}

            {example.approach && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Approach
                </p>

                <p className="leading-7 text-slate-600">
                  {renderInlineMarkdown(example.approach.trim())}
                </p>
              </div>
            )}

            {example.solution && (
              <div className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Solution
                </p>

                <p className="whitespace-pre-line leading-7 text-slate-700">
                  {renderInlineMarkdown(example.solution.trim())}
                </p>
              </div>
            )}

            {example.answer && (
              <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Answer
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    {renderInlineMarkdown(example.answer.trim())}
                  </p>
                </div>
              </div>
            )}

            {example.insight && (
              <div className="flex gap-3">
                <Sparkles
                  size={18}
                  className="mt-1 shrink-0 text-cyan-600"
                />

                <p className="text-sm leading-6 text-slate-500">
                  {renderInlineMarkdown(example.insight.trim())}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   PRACTICE PROBLEMS
========================================================= */

function PracticeProblems({ content }) {
  const problems = [];

  const matches = content.matchAll(
    /###\s+Problem\s+(\d+)\s+\((.*?)\)\s*([\s\S]*?)(?=###\s+Problem\s+\d+|$)/g
  );

  for (const match of matches) {
    problems.push({
      number: match[1],
      difficulty: match[2],
      question: match[3].trim(),
    });
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {problems.map((problem) => (
        <div
          key={problem.number}
          className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/10"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700">
                {problem.number}
              </div>

              <span className="text-sm font-medium text-slate-600">
                Practice Problem
              </span>
            </div>

            <span className="rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-[11px] font-medium text-cyan-700">
              {problem.difficulty}
            </span>
          </div>

          <p className="mt-5 leading-7 text-slate-700">
            {renderInlineMarkdown(problem.question)}
          </p>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function Solver() {
  const [searchParams] = useSearchParams();

  const topicSlug = searchParams.get("topic");

  const [topicData, setTopicData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopic = async () => {
      if (!topicSlug) {
        setError("No topic was selected.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_BASE_URL}/${topicSlug}`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch topic: ${response.status}`
          );
        }

        const data = await response.json();

        if (!data.success || !data.topic) {
          throw new Error("Invalid API response");
        }

        setTopicData(data.topic);
      } catch (err) {
        console.error("Topic loading error:", err);
        setError("Unable to load this topic.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [topicSlug]);

  const parsedContent = useMemo(() => {
    return parseMarkdown(topicData?.content || "");
  }, [topicData]);

  const sections = parsedContent.sections;

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <div className="flex min-h-screen cursor-none items-center justify-center bg-slate-50 text-slate-900">
        <BubbleCursor />

        <div className="flex flex-col items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
            <Calculator size={25} />
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
            Loading your topic...
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     ERROR
  ======================================================= */

  if (error) {
    return (
      <div className="flex min-h-screen cursor-none items-center justify-center bg-slate-50 px-6 text-slate-900">
        <BubbleCursor />

        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/50">
          <CircleAlert
            size={40}
            className="mx-auto text-cyan-600"
          />

          <h1 className="mt-5 text-xl font-semibold">
            Topic unavailable
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            {error}
          </p>

          <Link
            to="/quantative"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
          >
            <ArrowLeft size={16} />
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }

  /* =======================================================
     MAIN UI
  ======================================================= */

  return (
    <div className="min-h-screen cursor-none bg-slate-50 text-slate-900">
      <BubbleCursor />

      {/* BACKGROUND */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-[120px]" />

        <div className="absolute right-[-150px] top-[20%] h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[130px]" />

        <div className="absolute bottom-[-200px] left-[40%] h-[400px] w-[500px] rounded-full bg-cyan-200/20 blur-[120px]" />
      </div>

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            to="/quantative"
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20 transition group-hover:scale-105">
              <Calculator size={19} />
            </div>

            <span className="text-lg font-semibold tracking-tight">
              Apti
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Solve
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-medium text-cyan-700 sm:flex">
            <Sparkles size={14} />
            AI Powered Learning
          </div>
        </div>
      </header>

      {/* MAIN */}

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-10">
        {/* BACK */}

        <Link
  to="/quantitative"
  className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-600"
>
  <ArrowLeft size={16} />
  All Topics
</Link>

        {/* HERO */}

        <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full bg-cyan-200/40 blur-[90px]" />

          <div className="absolute bottom-[-100px] left-[35%] h-52 w-52 rounded-full bg-blue-200/30 blur-[90px]" />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-medium text-cyan-700">
                <BookOpen size={13} />
                Quantitative Aptitude
              </span>

              {parsedContent.difficulty && (
                <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                  {parsedContent.difficulty.replaceAll("_", " ")}
                </span>
              )}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {parsedContent.topic ||
                topicData?.slug ||
                "Quantitative Topic"}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Master the concepts, formulas, shortcuts and
              problem-solving techniques for this topic.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <ListChecks
                  size={16}
                  className="text-cyan-600"
                />
                {sections.length} Learning Sections
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Sparkles
                  size={16}
                  className="text-blue-600"
                />
                AI Powered
              </div>
            </div>
          </div>
        </section>

        {/* SECTION NAVIGATION */}

        <section className="mt-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {sections.map((section, index) => (
              <button
                key={section.title}
                onClick={() => {
                  document
                    .getElementById(`section-${index}`)
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="shrink-0 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-600 shadow-sm transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
              >
                {section.title}
              </button>
            ))}
          </div>
        </section>

        {/* CONTENT */}

        <div className="mt-10 space-y-7">
          {sections.map((section, index) => {
            const style = getSectionStyle(section.title);

            const isExamples = section.title
              .toLowerCase()
              .includes("solved examples");

            const isPractice = section.title
              .toLowerCase()
              .includes("practice problems");

            const isAnswers = section.title
              .toLowerCase()
              .includes("answers");

            const isMistakes = section.title
              .toLowerCase()
              .includes("mistakes");

            return (
              <section
                key={section.title}
                id={`section-${index}`}
                className={`scroll-mt-24 overflow-hidden rounded-[1.75rem] border ${style.border} bg-white shadow-sm`}
              >
                {/* SECTION HEADER */}

                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 sm:px-7">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${style.iconBg} ${style.icon}`}
                    >
                      {getSectionIcon(section.title)}
                    </div>

                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                        Section {String(index + 1).padStart(2, "0")}
                      </p>

                      <h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <span className="hidden h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg shadow-cyan-400/30 sm:block" />
                </div>

                {/* SECTION BODY */}

                <div className="p-6 sm:p-7">
                  {isExamples ? (
                    <SolvedExamples
                      content={section.content.join("\n")}
                    />
                  ) : isPractice ? (
                    <PracticeProblems
                      content={section.content.join("\n")}
                    />
                  ) : (
                    <SectionContent lines={section.content} />
                  )}

                  {isAnswers && (
                    <div className="mt-6 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                      <Trophy
                        size={20}
                        className="text-blue-600"
                      />

                      <p className="text-sm text-slate-600">
                        Review the explanations carefully and
                        understand why each answer works.
                      </p>
                    </div>
                  )}

                  {isMistakes && (
                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
                      <CircleAlert
                        size={20}
                        className="mt-0.5 text-cyan-600"
                      />

                      <p className="text-sm leading-6 text-slate-600">
                        Keep these common mistakes in mind while
                        solving aptitude questions.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        {/* PRACTICE CTA */}

        <section className="relative mt-12 overflow-hidden rounded-[2rem] border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-7 shadow-sm sm:p-9">
          <div className="absolute left-1/2 top-[-100px] h-60 w-80 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[90px]" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-cyan-600">
                <Sparkles size={16} />

                <span className="text-sm font-medium">
                  Ready to test yourself?
                </span>
              </div>

              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Put your knowledge into practice.
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Solve aptitude problems and get AI-powered
                step-by-step solutions.
              </p>
            </div>

            <Link
              to={`/solver/practice?topic=${topicSlug}`}
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Start Practice

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Solver;