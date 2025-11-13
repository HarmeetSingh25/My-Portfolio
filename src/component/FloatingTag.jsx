import React, { useRef, useEffect } from "react";

const FloatingTag = ({ text, startX = 50, startY = 50 }) => {
  const ref = useRef(null);
  const parentRef = useRef(null);

  const pos = useRef({ x: startX, y: startY });
  const velocity = useRef({
    x: (Math.random() - 0.5) * 0.4,
    y: (Math.random() - 0.5) * 0.4,
  });

  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    parentRef.current = ref.current.parentElement;

    let frame;
    const animate = () => {
      if (!ref.current || !parentRef.current) return;

      const tag = ref.current;
      const parentRect = parentRef.current.getBoundingClientRect();

      if (!dragging.current) {
        // natural float
        velocity.current.x *= 0.99;
        velocity.current.y *= 0.99;

        pos.current.x += velocity.current.x + Math.sin(Date.now() / 900) * 0.15;
        pos.current.y += velocity.current.y + Math.cos(Date.now() / 1100) * 0.15;
      }

      // boundaries
      const tagRect = tag.getBoundingClientRect();

      if (pos.current.x < 0) {
        pos.current.x = 0;
        velocity.current.x *= -1;
      }
      if (pos.current.y < 0) {
        pos.current.y = 0;
        velocity.current.y *= -1;
      }
      if (pos.current.x > parentRect.width - tagRect.width) {
        pos.current.x = parentRect.width - tagRect.width;
        velocity.current.x *= -1;
      }
      if (pos.current.y > parentRect.height - tagRect.height) {
        pos.current.y = parentRect.height - tagRect.height;
        velocity.current.y *= -1;
      }

      // apply transform
      tag.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Start dragging
  const onMouseDown = (e) => {
    dragging.current = true;

    const rect = ref.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const onMouseUp = () => {
    dragging.current = false;
    // add small release force
    velocity.current.x = (Math.random() - 0.5) * 1.2;
    velocity.current.y = (Math.random() - 0.5) * 1.2;
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;

    const parentRect = parentRef.current.getBoundingClientRect();

    pos.current.x = e.clientX - parentRect.left - offset.current.x;
    pos.current.y = e.clientY - parentRect.top - offset.current.y;
  };

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className="absolute bg-[#222] px-4 py-2 rounded-xl shadow-lg text-white cursor-pointer select-none"
      style={{
        transform: `translate(${startX}px, ${startY}px)`,
      }}
    >
      {text}
    </div>
  );
};

export default FloatingTag;
