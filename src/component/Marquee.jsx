import { twMerge } from "tailwind-merge";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  const directionClass = reverse ? "[animation-direction:reverse]" : "";
  const pauseClass = pauseOnHover ? "group-hover:[animation-play-state:paused]" : "";
  const orientation = vertical ? "flex-col animate-marquee-vertical" : "flex-row animate-marquee";

  return (
    <div
      {...props}
      className={twMerge(
        `group flex [gap:var(--gap)] overflow-hidden p-2 
        [--duration:40s] [--gap:1rem] 
        ${vertical ? "flex-col" : "flex-row"}`,
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={twMerge(
              `flex shrink-0 justify-around [gap:var(--gap)] 
               ${orientation} 
               ${directionClass} 
               ${pauseClass}`
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
    