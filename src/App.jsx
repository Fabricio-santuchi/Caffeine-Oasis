import BackgroundVideo from "./components/BackgroundVideo";
import Header from "./components/Header";
import SectionCafeDelicioso from "./components/SectionCafeDelicioso";
import SectionSaibaMais from "./components/SectionSaibaMais";

function App() {
  return (
    <>
      <BackgroundVideo />
      <Header />

      <main className="mb-32">
        <SectionCafeDelicioso />
        <SectionSaibaMais />
      </main>
    </>
  );
}

export default App;
