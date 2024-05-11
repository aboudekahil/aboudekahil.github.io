import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

function App() {
  return (
    <main className="p-4">
      <section>
        <h1>- Who am i</h1>
        <h1 className="text-2xl shadow-2xl font-extrabold font-mono p-4">
          Abd El Kader Kahil
        </h1>
        <h1 className="text-2xl shadow-2xl font-extrabold font-mono p-4">
          Software developer
        </h1>
        <h2 className="text-2xl shadow-2xl font-extrabold font-mono p-4">
          Bs. Computer science
        </h2>
      </section>

      <section>
        <h1>- My languages</h1>
        <ul className="flex flex-wrap w-full gap-5 font-mono font-extrabold p-4">
          <li>c++</li>
          <li>java</li>
          <li>c</li>
          <li>python</li>
          <li>javascript</li>
          <li>typescript</li>
          <li>golang</li>
        </ul>
      </section>
      <section>
        <h1>- links</h1>
        <ul className="font-mono font-extrabold p-4 flex flex-col gap-5">
          <a href="https://github.com/aboudekahil">
            <li className="hover:cursor-[url(''), auto]">
              github <FaGithub className="inline" />
            </li>
          </a>
          <a href="https://linkedin.com/in/aboude">
            <li className="hover:cursor-[url(''), auto]">
              linkedin <FaLinkedin className="inline" />
            </li>
          </a>
          <a href="mailto:aboudekahil@gmail.com">
            <li className="hover:cursor-[url(''), auto]">
              email <FaEnvelope className="inline" />
            </li>
          </a>
        </ul>
      </section>
    </main>
  );
}

export default App;
