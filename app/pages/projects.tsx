// pages/projects.tsx → "/projects"
import { Slide, SlideHeader, insideItems } from "@/components/portfolio-shared";

export default function Projects() {
  return (
    <Slide>
      <SlideHeader label="Creative Presentation" />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <h1 className="font-black leading-[0.95] tracking-tight text-neutral-900 text-5xl md:text-6xl lg:text-7xl">
          What you will find
          <br />
          inside?
        </h1>

        <div className="flex flex-col">
          {insideItems.map((item) => (
            <div
              key={item.n}
              className="flex items-baseline justify-between border-t border-neutral-900 py-4"
            >
              <span className="font-bold text-neutral-900">{item.n}</span>
              <span className="font-bold text-neutral-900 text-lg">
                {item.label}
              </span>
            </div>
          ))}
          <div className="border-t border-neutral-900" />
        </div>
      </div>
    </Slide>
  );
}