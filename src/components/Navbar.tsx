import { Container } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center sticky top-0  z-50 p-4 bg-base-100 shadow-lg">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2" />
        MARC
        <span className="text-accent">DEV</span>
      </a>

      <ul className="hidden  md:flex space-x-6 font-semibold text-lg">
        <a href="#Accueil" className="btn btn-sm btn-ghost">
          Accueil
        </a>

        <a href="#Apropos" className="btn btn-sm btn-ghost">
          A propos
        </a>

        <a href="#Experience" className="btn btn-sm btn-ghost">
          Mes compétences
        </a>

        <a href="#Projects" className="btn btn-sm btn-ghost">
          Mes projets
        </a>

        <a href="#Contact" className="btn btn-sm btn-ghost">
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
