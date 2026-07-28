export default function Home() {
  return (
    <main className="min-h-screen bg-[#AAB8D7] py-10">
      <div className="mx-auto max-w-7xl px-6 space-y-12">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden rounded-xl bg-[#555] shadow-2xl h-[500px]">

          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900" />

          {/* Envelope Flap */}
          <div className="absolute top-0 left-0 w-full h-48 bg-zinc-600 clip-path-triangle opacity-80" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">

            <p className="uppercase tracking-[8px] text-sm">
              Design Portfolio
            </p>

            <h1 className="mt-8 text-[130px] italic font-serif leading-none">
              Portfolio
            </h1>

            <div className="mt-8 flex gap-12 text-lg">
              <span>(Hanwi)</span>
              <span>(2026)</span>
            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="relative rounded-xl bg-white p-12 shadow-xl">

          <div className="grid md:grid-cols-[2fr_1fr] gap-10">

            <div>

              <h2 className="text-6xl italic text-sky-500 font-serif">
                About Me
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Hello! I'm <strong>Hanwi</strong>, an Information Technology
                graduate passionate about Full-Stack Development,
                UI/UX Design, and Artificial Intelligence.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                I enjoy creating modern web and mobile applications,
                designing intuitive interfaces, and exploring AI-powered
                solutions that solve real-world problems.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                My current stack includes React, Next.js,
                React Native, TypeScript, Python, PHP,
                Tailwind CSS, MySQL, and Machine Learning.
              </p>

            </div>

            <div className="flex justify-center">

              <div className="rotate-3 rounded-lg border-8 border-white bg-gray-100 shadow-xl p-2">

                <img
                  src="/me.jpg"
                  alt="Profile"
                  className="w-64 rounded"
                />

              </div>

            </div>

          </div>

        </section>

        {/* ================= RESUME ================= */}
        <section className="rounded-xl bg-white shadow-xl p-10">

          <div className="grid md:grid-cols-2 gap-10">

            <div>

              <h3 className="text-4xl font-serif mb-6">
                Profile
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li><strong>Name:</strong> Hanwi</li>
                <li><strong>Role:</strong> Full-Stack Developer</li>
                <li><strong>Email:</strong> hello@email.com</li>
                <li><strong>Location:</strong> Philippines</li>
              </ul>

              <div className="mt-10">

                <h3 className="text-3xl font-serif mb-4">
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-3">

                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Python",
                    "PHP",
                    "Tailwind",
                    "MySQL",
                    "React Native",
                    "n8n",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-100 px-4 py-2"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            <div>

              <h3 className="text-4xl font-serif mb-6">
                Skills
              </h3>

              <div className="space-y-5">

                <div>
                  <h4 className="font-semibold">
                    Full-Stack Development
                  </h4>
                  <p className="text-gray-600">
                    Building responsive web and mobile applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    UI / UX Design
                  </h4>
                  <p className="text-gray-600">
                    Designing clean and user-friendly experiences.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Machine Learning
                  </h4>
                  <p className="text-gray-600">
                    Data analysis, NLP, predictive models.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Automation
                  </h4>
                  <p className="text-gray-600">
                    n8n workflows and AI integrations.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}