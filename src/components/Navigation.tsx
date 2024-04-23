import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-between items-center h-20 px-4 shadow-sm bg-gray-800 text-white">
      <h3 className="font-bold text-lg">
        <Link to="/">Dewais</Link>
      </h3>
      <span>
        <Link
          to="/"
          className={cn("mr-3", pathname === "/" && "text-gray-400")}
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className={cn(pathname === "/favorites" && "text-gray-400")}
        >
          Favorites
        </Link>
      </span>
    </nav>
  );
};

export default Navigation;
