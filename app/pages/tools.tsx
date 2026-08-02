// pages/tools.tsx → "/tools"
import { Slide, SlideHeader } from "@/components/portfolio-shared";

export default function Tools() {
  return (
    <Slide>
      <SlideHeader label="Creative Presentation" />

      <h1 className="font-black leading-[0.95] tracking-tight text-neutral-900 text-5xl md:text-6xl lg:text-7xl mb-10">
        Tools
        <br />
        I&apos;m fluent in.
      </h1>

      <p className="text-sm md:text-base text-neutral-500 max-w-md leading-relaxed">
        <span className="font-bold text-neutral-800">
          Adobe Creative suite, Figma, Canva, Procreate
        </span>{" "}
        and Explore AI tools and try to integrate it across design,
        direction, concept development, and creative exploration.
      </p>

      <div className="flex-1" />
    </Slide>
  );
}