import { useModal } from "../../hooks/useModal";
import TituloDB from "../SectionSaibaMais/TituloDB";
import ModalMascara from "./ModalMascara";

const ModalMaps = () => {
  const { isVisible, alterarModal } = useModal();

  const toggleModal = () => {
    alterarModal();
  };

  return (
    <>
      <ModalMascara />

      <div
        className={`fixed top-[50%] left-0 -translate-y-1/2 transition-all duration-500 ${
          isVisible ? "left-[50%] translate-x-[-50%]" : "-translate-x-full"
        } z-40 shadow-lg max-w-[600px] w-full`}
        onClick={toggleModal}
      >
        <TituloDB subtitle="Endereço">Nosso</TituloDB>
        <iframe
          className="w-full h-[350px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14508.215674082008!2d-53.32905318403895!3d-24.62182646941181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f24a34b2929109%3A0x1d3a1a0839e38167!2sCafel%C3%A2ndia%2C%20PR%2C%2085415-000!5e0!3m2!1spt-BR!2sbr!4v1730685562265!5m2!1spt-BR!2sbr"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Café"
        ></iframe>
      </div>
    </>
  );
};

export default ModalMaps;

// ajeitar essa porra!

/*

<div
      style={{
        display: isVisible ? "flex" : "none",
      }}
    >
      <div
        className="fixed inset-0 flex justify-center items-center z-40 bg-transparent gap-5"
        style={{
          left: isVisible ? "0" : "-200%",
        }}
      >
        <div onClick={alterarModal} className="flex flex-col">
          <TituloDB subtitle="Endereço">Nosso</TituloDB>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14508.215674082008!2d-53.32905318403895!3d-24.62182646941181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f24a34b2929109%3A0x1d3a1a0839e38167!2sCafel%C3%A2ndia%2C%20PR%2C%2085415-000!5e0!3m2!1spt-BR!2sbr!4v1730685562265!5m2!1spt-BR!2sbr"
            width="500"
            height="350"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Café"
          ></iframe>
        </div>
      </div>

      {isVisible ? <ModalMascara /> : ""}
    </div>
*/
