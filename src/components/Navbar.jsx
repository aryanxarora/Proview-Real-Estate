import { Link } from "react-router-dom";

function Navbar({ cta }) {
  return (
    <nav className="flex items-center p-5 lg:px-10 sticky top-0 bg-white z-10">
      <div className="basis-1/2">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/aryanxarora/proview/df92b7e3f2484501c153e55c10bd8e89a12ac75f/src/images/logo.svg"
            alt=""
            width="150px"
          />
        </Link>
      </div>
      <div className="basis-1/2 flex justify-end items-center">
        <Link to="/contact">
          <p className="text-sm bg-black text-white font-bold px-5 py-2 rounded-3xl">
            {cta}
          </p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
