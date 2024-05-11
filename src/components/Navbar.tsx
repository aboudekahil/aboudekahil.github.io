import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export function Navbar() {
  return (
    <nav className="bg-transparent backdrop-blur shadow-2xl bg-gray-800 p-5 w-full flex justify-between items-center">
      <h1 className="text-lg font-extrabold font-mono">Abd El Kader Kahil</h1>
      <div className="text-xl font-mono font-extrabold">
        <ul className="flex w-full gap-5">
          <li>
            <a href="https://github.com/aboudekahil">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="mailto:aboudehkahil@gmail.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aboude/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
