import ActionButton from "../ActionButton";
import TextoDelicioso from "./TextoDelicioso";
import TituloCafeDelicioso from "./TituloCafeDelicioso";

const SectionCafeDelicioso = () => {
  return (
    <section className="section-custom min-h-screen flex items-center">
      <div className="max-w-5xl">
        <TituloCafeDelicioso />

        <TextoDelicioso>
          Descubra o sabor inigualável do nosso café, cuidadosamente selecionado
          para proporcionar a energia que você precisa para o seu dia a dia.
          Enquanto você se dedica aos seus projetos, aproveite cada gole da
          bebida que conquistou o paladar de muitos. Aqui, unimos o prazer de um
          bom café com a paixão pela produtividade. Venha trabalhar em um
          ambiente inspirador, rodeado pelo aroma do melhor café da região!
        </TextoDelicioso>

        <div className="flex xs:block justify-center sm:block">
          <ActionButton>Garanta o Seu Agora</ActionButton>
        </div>
      </div>
    </section>
  );
};
export default SectionCafeDelicioso;
