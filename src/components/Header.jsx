import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-center items-center mb-10">
      <Link>
        <img className="max-w-[250px]" src="./hun.png" alt="hunflix" />
      </Link>
    </header>
  );
};

export default Header;
