import logoCoffee from "../../assets/img/logo-coffee.png";
import NavLinks from "../NavLinks";

const Header = () => {
  return (
    <header className="w-screen fixed top-0 left-0 z-10 bg-black border-b-b1px border-solid border-grayClaro">
      <section className=" section-custom flex gap-20 items-center justify-start w-full">
        <a href="#">
          <img className="h-24" src={logoCoffee} alt="Logo-Cafeteria" />
        </a>
        <NavLinks />
      </section>
    </header>
  );
};

export default Header;
