import { useState } from "react";
import links from "../../data/links.json";
import { useModal } from "../../hooks/useModal.js";
import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const NavLinks = () => {
  const { alterarModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event, label) => {
    event.preventDefault();
    if (label === "Endereço") {
      alterarModal();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-5xl md:hidden transition-all ease-linear"
      >
        {isOpen ? <VscChromeClose /> : <FaBars />}
      </button>
      <nav
        className={`flex flex-col gap-4 p-6 absolute top-32 right-1 border-b-b1px border-l-b1px border-grayClaro bg-black md:border-none md:static md:block w-64 ${
          isOpen ? "block" : "hidden"
        }`}
        role="navigation"
        aria-label="Primary"
      >
        {links.map((link) => (
          <a
            key={link.href}
            className="custom-link"
            href={link.href}
            onClick={(event) => handleClick(event, link.label)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default NavLinks;
