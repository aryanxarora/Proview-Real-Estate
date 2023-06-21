function Navbar({ cta }) {
  return (
    <nav className="flex items-center p-5 lg:px-10 sticky top-0 bg-white">
      <div className="basis-1/2">
        <img
          src="https://raw.githubusercontent.com/aryanxarora/proview/df92b7e3f2484501c153e55c10bd8e89a12ac75f/src/images/logo.svg"
          alt=""
          width="150px"
        />
      </div>
      <div className="basis-1/2 flex justify-end">
        <a
          href=""
          className="text-sm bg-black text-white font-bold px-5 py-2 rounded-3xl"
        >
          {cta}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
