export default function Home() {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold text-blue-500">
          Hi! I&apos;m <span className="text-white">Wagner Rafael</span>,
        </h1>
        <h2 className="text-2xl text-gray-300 mt-4">
          A <span className="text-blue-500">Full-Stack Developer & AI Engineer</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Specialized in innovative and collaborative technology solutions.
          Passionate about AI, open-source, and career development.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="https://github.com/AIExxplorer" className="btn btn-primary">
            GitHub
          </a>
          <a href="https://linkedin.com/in/AIExxplorer" className="btn btn-primary">
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1OgVRWREYpLHASZvDdHZybzfwq3cP8ybD/view?usp=sharing"
            className="btn btn-primary"
          >
            Download CV
          </a>
        </div>
      </div>
    );
  }
  