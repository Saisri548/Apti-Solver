import { useEffect } from "react";

function CursorBubble() {
  useEffect(() => {
    // =========================
    // OUTER GOLD RING
    // =========================
    const outer = document.createElement("div");

    outer.style.position = "fixed";
    outer.style.width = "42px";
    outer.style.height = "42px";
    outer.style.borderRadius = "50%";
    outer.style.border = "1px solid rgba(250, 204, 21, 0.55)";
    outer.style.background = "rgba(250, 204, 21, 0.04)";
    outer.style.boxShadow =
      "0 0 20px rgba(250, 204, 21, 0.25), inset 0 0 15px rgba(250, 204, 21, 0.08)";
    outer.style.pointerEvents = "none";
    outer.style.zIndex = "99998";
    outer.style.transition =
      "transform 0.12s ease-out, width 0.2s ease, height 0.2s ease";

    // =========================
    // INNER GOLD RING
    // =========================
    const inner = document.createElement("div");

    inner.style.position = "fixed";
    inner.style.width = "18px";
    inner.style.height = "18px";
    inner.style.borderRadius = "50%";
    inner.style.border = "2px solid rgba(250, 204, 21, 0.95)";
    inner.style.background = "rgba(250, 204, 21, 0.12)";
    inner.style.boxShadow =
      "0 0 8px rgba(250, 204, 21, 0.9), 0 0 18px rgba(250, 204, 21, 0.5)";
    inner.style.pointerEvents = "none";
    inner.style.zIndex = "99999";

    // =========================
    // SOFT GLOW
    // =========================
    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "90px";
    glow.style.height = "90px";
    glow.style.borderRadius = "50%";
    glow.style.background = "rgba(250, 204, 21, 0.08)";
    glow.style.filter = "blur(25px)";
    glow.style.pointerEvents = "none";
    glow.style.zIndex = "99997";

    // =========================
    // ADD TO PAGE
    // =========================
    document.body.appendChild(glow);
    document.body.appendChild(outer);
    document.body.appendChild(inner);

    // Hide normal cursor
    document.body.style.cursor = "none";

    // =========================
    // MOUSE MOVE
    // =========================
    const moveCursor = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      outer.style.left = `${x - 21}px`;
      outer.style.top = `${y - 21}px`;

      inner.style.left = `${x - 9}px`;
      inner.style.top = `${y - 9}px`;

      glow.style.left = `${x - 45}px`;
      glow.style.top = `${y - 45}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    // =========================
    // CLEANUP
    // =========================
    return () => {
      window.removeEventListener("mousemove", moveCursor);

      outer.remove();
      inner.remove();
      glow.remove();

      document.body.style.cursor = "";
    };
  }, []);

  return null;
}

export default CursorBubble;