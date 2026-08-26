import { useState } from "react";
import axios from "axios";

function Solver() {

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    "",
    "",
    "",
    ""
  ]);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateOption = (index, value) => {

    const updated = [...options];

    updated[index] = value;

    setOptions(updated);
  };

  const solveQuestion = async () => {

    setLoading(true);
    setResult(null);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/solve",
        {
          question,
          options: options.filter(Boolean)
        }
      );

      setResult(response.data);

    } catch (error) {

      console.error(error);

      setResult({
        error: "Unable to solve the question."
      });

    } finally {

      setLoading(false);

    }
  };

  return (
    <div>

      <h1>Aptitude Solver</h1>

      <textarea
        placeholder="Enter your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <h3>Options</h3>

      {options.map((option, index) => (

        <input
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) =>
            updateOption(index, e.target.value)
          }
        />

      ))}

      <button
        onClick={solveQuestion}
        disabled={loading}
      >
        {loading ? "Solving..." : "Solve"}
      </button>

      {result && (

        <section>

          <h2>Answer</h2>

          {result.error ? (

            <p>{result.error}</p>

          ) : (

            <>
              <h3>{result.answer}</h3>

              <p>
                {result.explanation}
              </p>

              <p>
                Rule: {result.rule}
              </p>

              <p>
                Confidence: {result.confidence}
              </p>
            </>

          )}

        </section>

      )}

    </div>
  );
}

export default Solver;