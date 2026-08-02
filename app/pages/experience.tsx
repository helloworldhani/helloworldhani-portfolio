// pages/experience.tsx → "/experience"
import { Slide, SlideHeader, jobs } from "@/components/portfolio-shared";

export default function Experience() {
  return (
    <Slide>
      <SlideHeader label="Creative Presentation" />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
        <h1 className="font-black leading-[0.95] tracking-tight text-neutral-900 text-5xl md:text-6xl lg:text-7xl">
          Where
          <br />
          I&apos;ve worked.
        </h1>

        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <div
              key={job.company + job.years}
              className="grid grid-cols-[110px_1fr] gap-4 items-start"
            >
              <span className="text-xs text-neutral-400 pt-1">
                {job.years}
              </span>
              <div>
                <div className="font-bold text-neutral-900 text-sm md:text-base">
                  {job.title}
                </div>
                <div className="text-neutral-500 text-sm">{job.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}