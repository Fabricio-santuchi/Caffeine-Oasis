import ActionButton from "../../ActionButton";
import TextoInformativo from "../TextoInformativo";

const SobreTexto = () => {
  return (
    <div className="custom-flex p-8">
      <h3 className="text-5xl text-white font-semibold">
        O que torna o nosso café único
      </h3>
      <TextoInformativo>
        O que torna o nosso café único é a seleção cuidadosa de grãos
        provenientes de plantações de alta qualidade. Cada variedade é escolhida
        para oferecer um sabor distinto e marcante, refletindo as
        características únicas de sua origem. Nossa paixão pelo café se traduz
        em cada xícara servida.
      </TextoInformativo>

      <TextoInformativo>
        Além disso, utilizamos técnicas de torrefação artesanal que realçam os
        sabores naturais dos grãos. Isso garante uma experiência sensorial rica
        e surpreendente a cada gole. Ao escolher nosso café, você desfruta de
        uma tradição que valoriza a qualidade e o cuidado em cada etapa do
        processo.
      </TextoInformativo>

      <ActionButton>Saiba mais</ActionButton>
    </div>
  );
};

export default SobreTexto;
