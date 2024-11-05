/* eslint-disable react/prop-types */
const TextoInformativo = ({ children }) => {
  return (
    <p className="text-lg xs:text-xl sm:text-2xl md:text-2xl font-extralight text-white leading-relaxed py-4 px-0 transition-all ease-linear">
      {children}
    </p>
  );
};

export default TextoInformativo;
