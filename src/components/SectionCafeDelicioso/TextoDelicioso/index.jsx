/* eslint-disable react/prop-types */
const TextoDelicioso = ({ children }) => {
  return (
    <p className="text-white text-xl font-extralight py-4 leading-relaxed xs:text-2xl sm:text-3xl md:text-4xl transition-all ease-linear">
      {children}
    </p>
  );
};

export default TextoDelicioso;
