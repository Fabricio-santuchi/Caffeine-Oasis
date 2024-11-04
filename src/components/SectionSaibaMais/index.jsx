import ContainerSobre from "./ContainerSobre";
import TituloDB from "./TituloDB";

const SectionSaibaMais = () => {
  return (
    <>
      <section className="section-custom">
        <TituloDB subtitle="Nós">Sobre</TituloDB>
        <ContainerSobre />
      </section>
    </>
  );
};
export default SectionSaibaMais;
