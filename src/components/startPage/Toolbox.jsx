import { useEffect, useRef, useState, useCallback } from "react";
import FadeIn from "../common/FadeIn";

const ALL_TOOLS = [
    { text: "Adobe Illustrator", type: "tag" },
    { text: "UX Analysis", type: "tag" },
    { text: "Prototyping", type: "tag" },
    { text: "User interviews", type: "tag" },
    { text: "A/B-testing", type: "tag" },
    { text: "User testing", type: "tag" },
    { text: "Wireframing", type: "tag" },
    { text: "UX Methods", type: "tag" },
    { text: "HTML5", img: "/img/icons/html.webp", type: "icon" },
    { text: "CSS3", img: "/img/icons/css.webp", type: "icon" },
    { text: "JavaScript", img: "/img/icons/js.png", type: "icon" },
    { text: "TypeScript", img: "/img/icons/ts.webp", type: "icon" },
    { text: "React", img: "/img/icons/react.webp", type: "icon" },
    { text: "Node.js", img: "/img/icons/node.webp", type: "icon" },
    { text: "GitHub", img: "/img/icons/gh.webp", type: "icon" },
    { text: "Bootstrap", img: "/img/icons/bs.webp", type: "icon" },
    { text: "Tailwind", img: "/img/icons/tailwind.svg", type: "icon" },
    { text: "Docker", img: "/img/icons/docker.webp", type: "icon" },
];

const FIELD_H = 460;

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function chipSize(tool) {
    if (tool.type === "icon") return { w: 52, h: 52 };
    return { w: Math.min(tool.text.length * 7.8 + 28, 180), h: 34 };
}

function generatePositions(tools, fw) {
    const placed = [];
    return tools.map((tool) => {
        const { w, h } = chipSize(tool);
        let pos = null;
        for (let attempt = 0; attempt < 80; attempt++) {
            const x = rand(10, Math.max(12, fw - w - 10));
            const y = rand(10, Math.max(12, FIELD_H - h - 10));
            const overlaps = placed.some(
                (p) =>
                    !(
                        x + w < p.x + 10 ||
                        x > p.x + p.w - 10 ||
                        y + h < p.y + 10 ||
                        y > p.y + p.h - 10
                    ),
            );
            if (!overlaps || attempt > 65) {
                pos = {
                    x,
                    y,
                    rot: rand(-12, 12),
                    z: Math.floor(rand(1, 18)),
                    w,
                    h,
                };
                break;
            }
        }
        if (!pos) {
            const { w: pw, h: ph } = chipSize(tool);
            pos = {
                x: rand(10, fw - pw - 10),
                y: rand(10, FIELD_H - ph - 10),
                rot: rand(-12, 12),
                z: Math.floor(rand(1, 18)),
                w: pw,
                h: ph,
            };
        }
        placed.push(pos);
        return pos;
    });
}

const Toolbox = () => {
    const fieldRef = useRef(null);
    const [positions, setPositions] = useState([]);
    const [dragging, setDragging] = useState(null);
    const [hovered, setHovered] = useState(null);
    const dragState = useRef(null);

    const scatter = useCallback(() => {
        const fw = fieldRef.current?.offsetWidth || 680;
        setPositions(generatePositions(ALL_TOOLS, fw));
    }, []);

    useEffect(() => {
        scatter();
        const ro = new ResizeObserver(scatter);
        if (fieldRef.current) ro.observe(fieldRef.current);
        return () => ro.disconnect();
    }, [scatter]);

    const onPointerDown = useCallback(
        (e, i) => {
            e.preventDefault();
            e.currentTarget.setPointerCapture(e.pointerId);
            dragState.current = {
                startX: e.clientX,
                startY: e.clientY,
                ox: positions[i]?.x ?? 0,
                oy: positions[i]?.y ?? 0,
                index: i,
            };
            setDragging(i);
            setPositions((prev) =>
                prev.map((p, idx) => (idx === i ? { ...p, z: 99 } : p)),
            );
        },
        [positions],
    );

    const onPointerMove = useCallback(
        (e, i) => {
            if (dragging !== i || !dragState.current) return;
            const { startX, startY, ox, oy, index } = dragState.current;
            const fw = fieldRef.current?.offsetWidth || 680;
            const { w, h } = chipSize(ALL_TOOLS[index]);
            const nx = Math.max(0, Math.min(fw - w, ox + e.clientX - startX));
            const ny = Math.max(
                0,
                Math.min(FIELD_H - h, oy + e.clientY - startY),
            );
            setPositions((prev) =>
                prev.map((p, idx) =>
                    idx === i ? { ...p, x: nx, y: ny, rot: 0 } : p,
                ),
            );
        },
        [dragging],
    );

    const onPointerUp = useCallback((i) => {
        dragState.current = null;
        setDragging(null);
        setPositions((prev) =>
            prev.map((p, idx) =>
                idx === i
                    ? { ...p, rot: rand(-9, 9), z: Math.floor(rand(1, 18)) }
                    : p,
            ),
        );
    }, []);

    return (
        <FadeIn selector="fade-in-section">
            <article className="container-lg mx-auto max-w-3xl font-mono cursor-default customBorder border rounded">
                <div className="flex items-center justify-between px-4 py-2 rounded-t bg-customBGDark dark:bg-customBG">
                    <p className="text-sm tracking-widest uppercase opacity-30">
                        toolbox
                    </p>
                    <h3 className="opacity-80 cursive">My Toolbox</h3>
                    <button
                        onClick={scatter}
                        className="text-sm tracking-widest uppercase opacity-30 hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"
                    >
                        <p> ↻ scatter</p>
                    </button>
                </div>

                {/* Box */}
                <div
                    ref={fieldRef}
                    className="relative rounded-b customBorder border-t bg-customBGDark dark:bg-customBG overflow-hidden"
                    style={{ height: FIELD_H }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none opacity-20 " 
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, currentColor 0.8px, transparent 1px)",
                            backgroundSize: "24px 24px",
                        }}
                    />

                    {ALL_TOOLS.map((tool, i) => {
                        const pos = positions[i];
                        if (!pos) return null;
                        const isDragging = dragging === i;
                        const isHov = hovered === i && !isDragging;

                        return (
                            <div
                                key={i}
                                onPointerDown={(e) => onPointerDown(e, i)}
                                onPointerMove={(e) => onPointerMove(e, i)}
                                onPointerUp={() => onPointerUp(i)}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                className="absolute select-none touch-none transition-transform"
                                style={{
                                    left: pos.x,
                                    top: pos.y,
                                    zIndex: isDragging
                                        ? 99
                                        : isHov
                                          ? 50
                                          : pos.z,
                                    transform: `rotate(${isDragging ? 0 : pos.rot}deg) scale(${isDragging ? 1.08 : isHov ? 1.04 : 1})`,
                                    cursor: isDragging ? "grabbing" : "grab",
                                    transitionDuration: isDragging
                                        ? "80ms"
                                        : "200ms",
                                }}
                            >
                                {tool.type === "tag" ? (
                                    <p className="inline-block text-sm tracking-wide  px-3 py-1.5 rounded-sm border whitespace-nowrap bg-customBGDark dark:bg-customBG opacity-85 hover:opacity-100 transition-opacity">
                                        {tool.text}
                                    </p>
                                ) : (
                                    <span
                                        title={tool.text}
                                        className="inline-flex items-center justify-center w-12 h-12 rounded border bg-customBGDark dark:bg-customBG opacity-85 hover:opacity-100 transition-opacity"
                                    >
                                        <img
                                            src={tool.img}
                                            alt={tool.text}
                                            draggable={false}
                                            className="w-7 h-7 object-contain pointer-events-none"
                                        />
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </article>
        </FadeIn>
    );
};

export default Toolbox;
