import SobreImagem from "../SobreImagem";
import SobreTexto from "../SobreTexto";

const ContainerSobre = () => {
  return (
    <div className="flex items-center bg-blackdf gap-6 flex-wrap">
      <SobreImagem />
      <SobreTexto />
    </div>
  );
};
export default ContainerSobre;
