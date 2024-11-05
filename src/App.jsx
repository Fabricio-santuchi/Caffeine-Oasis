import { useEffect } from "react";
import BackgroundVideo from "./components/BackgroundVideo";
import Header from "./components/Header";
import ModalMaps from "./components/ModalMaps";
import SectionCafeDelicioso from "./components/SectionCafeDelicioso";
import SectionSaibaMais from "./components/SectionSaibaMais";
import { useModal } from "./hooks/useModal";

function App() {
  const { isVisible } = useModal();

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVisible]);

  return (
    <>
      <BackgroundVideo />
      <Header />

      <main className="mb-52 ">
        <SectionCafeDelicioso />
        <SectionSaibaMais />
        <ModalMaps />
      </main>
    </>
  );
}

export default App;
