// pages/what-i-do.tsx → "/what-i-do"
import { Slide, SlideHeader, doSkillsRow1, doSkillsRow2 } from "@/components/portfolio-shared";

export default function WhatIDo() {
  return (
    <Slide>
      <SlideHeader label="Creative Presentation" />

      <h1 className="font-black leading-[0.95] tracking-tight text-neutral-900 text-5xl md:text-6xl lg:text-7xl mb-10">
        What I do?
        <br />
        (and love doing)
      </h1>

      <p className="text-sm md:text-base text-neutral-600 max-w-lg mb-16 leading-relaxed">
        I build digital products from idea to launch, combining software
        development, design, and machine learning. I enjoy creating
        experiences that are intuitive, visually thoughtful, and built to
        solve real problems.
      </p>

      <div className="flex-1" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center mb-8">
        {doSkillsRow1.map((s) => (
          <div key={s.label} className="font-bold text-neutral-900">
            {s.label}
          </div>
        ))}
        {doSkillsRow2.map((s) => (
          <div key={s.label} className="font-bold text-neutral-900">
            {s.label}
          </div>
        ))}
      </div>

      <div className="border-t border-neutral-200" />
    </Slide>
  );
}