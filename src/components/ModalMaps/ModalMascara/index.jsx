import { useModal } from "../../../hooks/useModal";

const ModalMascara = () => {
  const { isVisible, alterarModal } = useModal();

  const toggleModal = () => {
    alterarModal();
  };

  return (
    <div
      className={`fixed z-30 inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleModal}
    ></div>
  );
};

export default ModalMascara;
