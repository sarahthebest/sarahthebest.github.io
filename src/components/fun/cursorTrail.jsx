import { useEffect, useRef, useState, useCallback } from "react";

const COLORS = ["#f9a8d4", "#c4b5fd", "#fbcfe8", "#fde68a", "#ffffff", "#e9d5ff"];

const SHAPES = ["✦", "✧", "⋆", "·", "✦", "✦", "✧"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function spawnParticle(x, y) {
  return {
    id: Math.random(),
    x,
    y,
    vx: randomBetween(-1.4, 1.4),
    vy: randomBetween(-2.2, -0.4),
    size: randomBetween(10, 22),
    opacity: 1,
    rotation: randomBetween(0, 360),
    rotationSpeed: randomBetween(-4, 4),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    life: 1,
    decay: randomBetween(0.018, 0.038),
  };
}

const CursorTrail = () => {
  const [enabled, setEnabled] = useState(true);
  const [particles, setParticles] = useState([]);
  const frameRef = useRef(null);
  const particlesRef = useRef([]);
  const lastSpawn = useRef(0);
  const enabledRef = useRef(true);

  useEffect(() => {
    enabledRef.current = enabled;
    if (!enabled) {
      particlesRef.current = [];
      setParticles([]);
    }
  }, [enabled]);

  const onMouseMove = useCallback((e) => {
    if (!enabledRef.current) return;
    const now = Date.now();
    if (now - lastSpawn.current < 30) return;
    lastSpawn.current = now;
    const count = Math.floor(randomBetween(1, 3));
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(spawnParticle(e.clientX, e.clientY));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  useEffect(() => {
    const tick = () => {
      particlesRef.current = particlesRef.current
        .map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.06,
          life: p.life - p.decay,
          rotation: p.rotation + p.rotationSpeed,
          opacity: p.life,
        }))
        .filter(p => p.life > 0);

      setParticles([...particlesRef.current]);
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <>
      <button
        onClick={() => setEnabled(v => !v)}
        className="fixed bottom-4 right-4 z-50 flex gap-1.5 text-sm px-3 py-1.5 rounded-full customBG border opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
        title={enabled ? "Turn off sparkles" : "Turn on sparkles"}
      >
        <span className="text-white">{enabled ? "✦" : "✧"}</span>
        <p className="text-white">cursorfx {enabled ? "on" : "off"}</p>
      </button>

      {enabled && (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          {particles.map(p => (
            <span
              key={p.id}
              className="absolute leading-none select-none"
              style={{
                left: p.x,
                top: p.y,
                fontSize: p.size,
                color: p.color,
                opacity: p.opacity,
                transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
                textShadow: `0 0 6px ${p.color}`,
                willChange: "transform, opacity",
              }}
            >
              {p.shape}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default CursorTrail;