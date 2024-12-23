export default function Home() {
    return (
      <div className="p-8 flex flex-col items-center justify-center text-center h-screen space-y-6">
        <h1 className="text-4xl font-bold text-blue-500">
          Hi! I&apos;m <span className="text-white">Wagner Rafael</span>,
        </h1>
        <h2 className="text-2xl text-gray-300">
          A <span className="text-blue-500">Full-Stack Developer & AI Engineer</span>
        </h2>
        <p className="text-gray-400">
          Specialized in innovative and collaborative technology solutions.
          Passionate about AI, open-source, and career development.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/AIExxplorer" className="btn-primary">
            GitHub
          </a>
          <a href="https://linkedin.com/in/AIExxplorer" className="btn-primary">
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1OgVRWREYpLHASZvDdHZybzfwq3cP8ybD/view?usp=sharing"
            className="btn-primary"
          >
            Download CV
          </a>
        </div>
      </div>
    );
  }
  