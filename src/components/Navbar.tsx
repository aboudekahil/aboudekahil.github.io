export function Navbar() {
  return (
    <nav className="text-white bg-gray-800 p-5 w-full flex justify-between items-center">
      <h1 className="text-lg font-extrabold font-mono">Abd El Kader Kahil</h1>
      <div className="hidden sm:block font-mono font-extrabold">
        <ul className="flex w-full gap-5">
          <li>
            <a href="https://github.com/aboudekahil">github</a>
          </li>
          <li>
            <a href="mailto:aboudehkahil@gmail.com">email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aboude/">linked in</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
