import links from "../../data/links.json";

const NavLinks = () => {
  return (
    <nav role="navigation" aria-label="Primary">
      {links.map((link) => (
        <a key={link.href} className="custom-link" href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
