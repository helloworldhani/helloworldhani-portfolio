import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-10">
      <div className="max-w-5xl w-full bg-white rounded-[40px] shadow-lg p-10 grid md:grid-cols-2 gap-10">
        
        {/* Left Side */}
        <div className="flex justify-center">
          <div className="relative w-72 h-96 rounded-[30px] overflow-hidden shadow-md">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">
          <p className="text-pink-500 uppercase tracking-widest text-sm">
            Welcome
          </p>

          <h1 className="text-6xl font-extrabold text-pink-700 mt-2">
            Hanwi
          </h1>

          <p className="text-gray-600 mt-5 leading-7">
            Project Manager, UI/UX Designer, and Full-Stack Developer.
            I create beautiful websites, mobile applications, and digital
            experiences.
          </p>

          <button className="mt-8 w-fit bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
            View Portfolio
          </button>
        </div>

      </div>
    </main>
  );
}