import { twMerge } from "tailwind-merge";
import { Marquee } from "../component/Marquee"; // ⬅ Use your updated Marquee path

const reviews = [
  {
    name: "Arjun Malhotra",
    username: "Client – Rental Car Project",
    body: "Harmeet delivered a clean, responsive UI with perfect attention to detail. The animations and layout were beyond expectations. Highly recommended!",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sneha Kapoor",
    username: "Frontend Mentor",
    body: "His structure, code quality, and UI precision are impressive. The way Harmeet handles responsive design is top-tier.",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Vivek Sharma",
    username: "Developer – GitHub",
    body: "Harmeet’s React skills are solid. The Movie Explorer app shows great understanding of component structure & clean UI.",
    img: "https://i.pravatar.cc/150?img=56",
  },
  {
    name: "Priya Verma",
    username: "Client – Akadia Website",
    body: "Super smooth animations and excellent color sense. The landing page feels modern and premium. Amazing work!",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Rahul Singh",
    username: "Team Member",
    body: "Easy to collaborate with. Writes optimized code and focuses a lot on user experience. Great teammate!",
    img: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Aman Tiwari",
    username: "React UI Designer",
    body: "One of the cleanest Tailwind + React UIs I’ve seen. Love the consistency and design polish in his projects.",
    img: "https://i.pravatar.cc/150?img=21",
  },
];


const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3, 6);

// ⭐ Testimonial Card
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 backdrop-blur-md",
        // light
        "border-white/20 bg-white/5 hover:bg-white/10",
        // dark
        "dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
      )}
    > 
      <div className="flex items-center gap-3">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div>
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-xs text-gray-300">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-gray-200">{body}</blockquote>
    </figure>
  );
};

// ⭐ Main Component
export default function Testimonial() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16">
      {/* ROW 1 */}
      <Marquee pauseOnHover className="[--duration:18s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Spacing */}
      <div className="h-6"></div>

      {/* ROW 2 */}
      <Marquee reverse pauseOnHover className="[--duration:18s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0b16]"></div>

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0b16]"></div>
    </div>
  );
}
