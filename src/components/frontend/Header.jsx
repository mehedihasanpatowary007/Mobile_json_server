import { Link } from "react-router-dom";
import Search from "../../pages/frontend/Search";

const Header = () => {
  return (
    <div className="w-full bg-slate-400 flex justify-between items-center sticky top-0 px-3 py-5 z-50">
      <div>
        <h1 className="uppercase text-3xl font-bold italic text-gray-700">
          Mobile House
        </h1>
      </div>
      <div>
        <ul className=" h-full flex items-center gap-8 ms-5">
          <li>
            <Link
              to="/"
              className="text-[20px] font-semibold hover:bg-black py-2 px-4 rounded uppercase text-white duration-1000"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="text-[20px] font-semibold hover:bg-black text-white py-2 uppercase px-4 rounded duration-1000"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Header;
