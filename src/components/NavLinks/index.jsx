import links from "../../data/links.json";
import { useModal } from "../../hooks/useModal.js";

const NavLinks = () => {
  const { alterarModal } = useModal();

  const handleClick = (event, label) => {
    event.preventDefault();
    if (label === "Endereço") {
      alterarModal();
    }
  };

  return (
    <nav role="navigation" aria-label="Primary">
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
  );
};

export default NavLinks;
