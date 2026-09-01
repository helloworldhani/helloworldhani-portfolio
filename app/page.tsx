import React from "react";

/**
 * Creative Presentation — single-file, scrollable React/TypeScript component.
 * Recreates a 6-slide portfolio deck as a vertically scrolling page with
 * scroll-snap between "slides".
 *
 * Usage: <Portfolio /> — no required props. Drop into any React + Tailwind
 * project (Tailwind core utility classes only, no config needed).
 */

// ---------- Shared bits ----------

const DATE = "09 Jan, 2026";

function SlideHeader({ label }: { label: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-neutral-500 tracking-wide mb-8 md:mb-10 gap-2 sm:gap-0">
      <span>{label}</span>
      <span>{DATE}</span>
    </div>
  );
}

function SlideFooter({ email = true }: { email?: boolean }) {
  if (!email) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-neutral-500 mt-auto pt-6 md:pt-10 gap-2 sm:gap-4">
      <span>helloworldhani@gmail.com</span>
      <span>+0111 11 111 111</span>
      <span>Somewhere, Philippines</span>
    </div>
  );
}

function Slide({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={
        "min-h-screen w-full snap-start flex flex-col px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 bg-white " +
        className
      }
    >
      {children}
    </section>
  );
}

// ---------- Eye / brand mark ----------

function EyeMark() {
  return (
    <svg
      width="34"
      height="20"
      viewBox="0 0 34 20"
      fill="none"
      className="text-neutral-900"
    >
      <ellipse
        cx="17"
        cy="10"
        rx="16"
        ry="9"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="17" cy="10" r="4.5" fill="currentColor" />
      <path
        d="M9 10 L14 10 M20 10 L25 10"
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
}

// ---------- Abstract face illustration (Slide 2) ----------

function FaceIllustration() {
  return (
    <svg viewBox="0 0 340 340" className="w-full h-full">
      <rect x="0" y="0" width="340" height="340" rx="18" fill="#3B0F30" />
      <path
        d="M120 40 C90 40 70 70 68 110 C66 150 90 170 95 200 C100 230 80 250 90 280 C100 300 140 300 160 280 C180 260 190 220 210 200 C230 180 250 170 250 140 C250 100 220 60 180 50 C160 45 140 42 120 40 Z"
        fill="#E88FB5"
      />
      <ellipse
        cx="130"
        cy="140"
        rx="55"
        ry="70"
        fill="#C77FA8"
        opacity="0.85"
      />
      <ellipse cx="118" cy="150" rx="14" ry="22" fill="#F4C453" />
      <path
        d="M132 145 C170 110 220 100 250 108"
        stroke="#F4C453"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

// ---------- Slide data ----------

interface Skill {
  label: string;
}

const doSkillsRow1: Skill[] = [
  { label: "Web Development" },
  { label: "Mobile Development" },
  { label: "Project Manager" },
  { label: "Machine Learning" },
];

const doSkillsRow2: Skill[] = [
  { label: "UI/UX Design" },
  { label: "Brand Identity" },
  { label: "Graphic Design" },
  { label: "Full-Stack Development" },
];

interface Job {
  years: string;
  title: string;
  company: string;
}

const jobs: Job[] = [
  { years: "2024 / 2026", title: "Web Developer", company: "Roboost" },
  {
    years: "2020 / 2023",
    title: "Brand Designer & Illustrator",
    company: "Emkan Finance",
  },
  { years: "2020 / 2020", title: "Senior Illustrator", company: "Andalusia Group" },
  {
    years: "2019 / 2020",
    title: "Senior Graphic Designer & Illustrator",
    company: "Viola Communication",
  },
  { years: "2017 / 2019", title: "Senior Illustrator", company: "Akwan" },
  { years: "2015 / 2017", title: "Illustrator", company: "Qabila" },
  {
    years: "2014 / 2015",
    title: "Graphic Designer & Illustrator",
    company: "Dawayer Studio",
  },
  {
    years: "2013 / 2014",
    title: "Graphic Designer & Illustrator",
    company: "Mezaj Productions",
  },
];

interface Inside {
  n: number;
  label: string;
}

const insideItems: Inside[] = [
  { n: 1, label: "Branding." },
  { n: 2, label: "Logo design." },
  { n: 3, label: "Vector art." },
  { n: 4, label: "illustration&Poster" },
];

// ---------- Roles rendered as unstyled buttons on the cover slide ----------

const roles: string[] = ["Web Developer", "Brand Identity", "Graphic Design"];

// ---------- Individual slides ----------

function CoverSlide() {
  return (
    <Slide>
      <div className="mb-1 text-xs sm:text-sm text-neutral-500">{DATE}</div>
      <h1 className="text-lg sm:text-2xl font-bold text-neutral-900">
        Creative Presentation
      </h1>
      <p className="text-xs sm:text-sm text-neutral-500 mt-1">Presented By: Hani</p>

      <div className="flex-1" />

      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-700">
          {roles.map((role, i) => (
            <React.Fragment key={role}>
              <button
                type="button"
                className="bg-transparent border-0 p-0 m-0 font-sans text-xs sm:text-sm text-neutral-700 cursor-pointer hover:text-neutral-900"
              >
                {role}
              </button>
              {i < roles.length - 1 && (
                <span className="text-neutral-300">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm text-neutral-500">
          <span>helloworldhani@gmail.com</span>
          <span>+0111 11 11 1111</span>
          <span>Somewhere, Philippines</span>
        </div>
      </div>

      <h2
        className="font-black tracking-tight text-neutral-900 -mb-2 select-none"
        style={{
          fontSize: "clamp(2rem, 12vw, 10.5rem)",
          lineHeight: 0.82,
        }}
      >
        Portfolio
      </h2>
    </Slide>
  );
}

function IntroSlide() {
  return (
    <Slide>
      <SlideHeader label="Creative Presentation" />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <div className="aspect-square w-full max-w-sm mx-auto md:mx-0">
          <FaceIllustration />
        </div>

        <div>
          <h1 className="font-black leading-[0.95] tracking-tight text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
            Hello!
            <br />
            I&apos;m Hani
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-neutral-800 font-medium mb-3 md:mb-4 max-w-md">
            A multidisciplinary product builder passionate about creating
            digital experiences that are both functional and enjoyable to
            use.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-neutral-500 max-w-md leading-relaxed">
            My work spans web development, mobile development, UI/UX design,
            brand identity, graphic design, and applied machine learning. I
            enjoy being involved throughout the entire product journey from
            understanding a problem and designing the experience to
            developing, testing, and launching the final product.
          </p>
        </div>
      </div>

      <SlideFooter />
    </Slide>
  );
}

function WhatIDoSlide() {
  return (
    <Slide>
      <SlideHeader label="Creative Presentation" />

      <h1 className="font-black leading-[0.95] tracking-tight text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-10">
        What I do?
        <br />
        (and love doing)
      </h1>

      <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-lg mb-12 md:mb-16 leading-relaxed">
        I build digital products from idea to launch, combining software
        development, design, and machine learning. I enjoy creating
        experiences that are intuitive, visually thoughtful, and built to
        solve real problems.
      </p>

      <div className="flex-1" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 md:gap-x-4 text-center mb-8">
        {doSkillsRow1.map((s) => (
          <div key={s.label} className="font-bold text-xs sm:text-sm md:text-base text-neutral-900">
            {s.label}
          </div>
        ))}
        {doSkillsRow2.map((s) => (
          <div key={s.label} className="font-bold text-xs sm:text-sm md:text-base text-neutral-900">
            {s.label}
          </div>
        ))}
      </div>

      <div className="border-t border-neutral-200" />
    </Slide>
  );
}

function ToolsSlide() {
  return (
    <Slide>
      <SlideHeader label="Creative Presentation" />

      <h1 className="font-black leading-[0.95] tracking-tight text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-10">
        Tools
        <br />
        I&apos;m fluent in.
      </h1>

      <p className="text-xs sm:text-sm md:text-base text-neutral-500 max-w-md leading-relaxed">
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

function WhereIveWorkedSlide() {
  return (
    <Slide>
      <SlideHeader label="Creative Presentation" />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <h1 className="font-black leading-[0.95] tracking-tight text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Where
          <br />
          I&apos;ve worked.
        </h1>

        <div className="flex flex-col gap-4 md:gap-6">
          {jobs.map((job) => (
            <div
              key={job.company + job.years}
              className="grid grid-cols-[70px_1fr] sm:grid-cols-[110px_1fr] gap-3 md:gap-4 items-start"
            >
              <span className="text-xs text-neutral-400 pt-1">
                {job.years}
              </span>
              <div>
                <div className="font-bold text-neutral-900 text-xs sm:text-sm md:text-base">
                  {job.title}
                </div>
                <div className="text-neutral-500 text-xs sm:text-sm">{job.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WhatYouWillFindSlide() {
  return (
    <Slide>
      <SlideHeader label="Creative Presentation" />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        <h1 className="font-black leading-[0.95] tracking-tight text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          What you will find
          <br />
          inside?
        </h1>

        <div className="flex flex-col">
          {insideItems.map((item) => (
            <div
              key={item.n}
              className="flex items-baseline justify-between border-t border-neutral-900 py-3 md:py-4 gap-4"
            >
              <span className="font-bold text-neutral-900 text-sm md:text-base">{item.n}</span>
              <span className="font-bold text-neutral-900 text-sm md:text-lg">
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

// ---------- Progress rail ----------

const SLIDE_COUNT = 6;

function ProgressDots() {
  return (
    <div className="hidden md:flex flex-col gap-3 fixed right-6 top-1/2 -translate-y-1/2 z-10">
      {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
        <a
          key={i}
          href={`#slide-${i + 1}`}
          className="w-1.5 h-1.5 rounded-full bg-neutral-300 hover:bg-neutral-900 transition-colors"
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

// ---------- Root component ----------

export default function Portfolio() {
  return (
    <div className="relative font-sans w-full">
      <div className="w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <div id="slide-1">
          <CoverSlide />
        </div>
        <div id="slide-2">
          <IntroSlide />
        </div>
        <div id="slide-3">
          <WhatIDoSlide />
        </div>
        <div id="slide-4">
          <ToolsSlide />
        </div>
        <div id="slide-5">
          <WhereIveWorkedSlide />
        </div>
        <div id="slide-6">
          <WhatYouWillFindSlide />
        </div>
      </div>
      <ProgressDots />
    </div>
  );
}