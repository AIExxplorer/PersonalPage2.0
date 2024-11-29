import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white flex flex-col">
      {/* Logo AIExxplorer */}
      <div className="logo-container py-6 flex justify-center">
        <Image
          src="/assets/images/LOGO_AIEXXPLORER.png"
          alt="AIExxplorer Logo"
          width={128}
          height={128}
          className="w-32"
        />
      </div>

      {/* Links de Navegação */}
      <ul className="Links flex flex-col space-y-4 px-6">
        <li className="flex items-center gap-4 hover:text-blue-500">
          <i className="fa-solid fa-house"></i>
          <Link href="/">Home</Link>
        </li>
        <li className="flex items-center gap-4 hover:text-blue-500">
          <i className="fa-solid fa-user"></i>
          <Link href="/about">About Me</Link>
        </li>
        <li className="flex items-center gap-4 hover:text-blue-500">
          <i className="fa-solid fa-list"></i>
          <Link href="/services">Services</Link>
        </li>
        <li className="flex items-center gap-4 hover:text-blue-500">
          <i className="fa-solid fa-images"></i>
          <Link href="/projects">Projects</Link>
        </li>
        <li className="flex items-center gap-4 hover:text-blue-500">
          <i className="fa-solid fa-comments"></i>
          <Link href="/contact">Contact Me</Link>
        </li>
      </ul>

      {/* Logo Artificial Universe */}
      <div className="logo-container py-6 flex justify-center">
        <Image
          src="/assets/images/LOGO_AU.png"
          alt="Artificial Universe Logo"
          width={128}
          height={128}
          className="w-32"
        />
      </div>
    </aside>
  );
}
