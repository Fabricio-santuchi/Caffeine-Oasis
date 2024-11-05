import cafeSobre from "/src/assets/img/about-img.jpg";

const SobreImagem = () => {
  return (
    <div className="custom-flex">
      <img
        className="w-full xs:w-full sm:w-[80%] md:w-[80%] wCoffee:w-full lg:w-full mx-auto my-0 transition-all ease-linear"
        src={cafeSobre}
        alt="imagem café sobre nós"
      />
    </div>
  );
};

export default SobreImagem;
