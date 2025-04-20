import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-80 py-10 text-sm text-gray-400 space-y-4">
      <ViewOnGitHub/>
      <ProjectInfo/>
    </footer>
  );
};

const ViewOnGitHub = () => {
  return (
    <a
      className="border border-gray-500/30 rounded-md inline-flex items-center gap-2 px-3 py-2 hover:border-white transition-colors"
      href="https://github.com/Haisia/project-blog-next"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative w-5 h-5">
        <Image
          src="/icons/commit.svg"
          alt="View on GitHub"
          fill
          className="object-contain"
        />
      </div>
      <span>View on GitHub</span>
    </a>
  );
};

const ProjectInfo = () => {
  return (
    <>
      <div>
        © 2025 <span className="text-white font-semibold">Haisia</span>. All rights reserved.
      </div>
      <div>
        Built with
        <span className="ml-1 text-white font-medium">
          Next.js with TS · Spring Boot · JPA · OracleDatabase · Tailwind CSS
        </span>
      </div>
      <div>
        Contact: <a href="mailto:haisiaj.dev@gmail.com"
                    className="underline hover:text-white">cwnsgur13579@gmail.com</a>
      </div>
    </>
  )
}

export default Footer;