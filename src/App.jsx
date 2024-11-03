import videoCoffee from "./assets/videos/Coffe-eu.mp4";

function App() {
  return (
    <>
      <div className="fixed z-baixo w-full h-full">
        <video
          className="min-w-full min-h-full fixed top-0"
          src={videoCoffee}
          loop
          muted
          autoPlay
        ></video>
        <div className="h-full w-full fixed top-0 bg-custom-gradient"></div>
      </div>

      <header className="w-screen fixed top-0 left-0 z-10 bg-black border-b-b1px border-solid border-grayClaro">
        <section className=" section-custom flex gap-20 items-center justify-start w-full">
          <a href="#">
            <img
              className="h-24"
              src="/src/assets/img/logo3.png"
              alt="Logo-Cafeteria"
            />
          </a>
          <nav>
            <a className="custom-link" href="#">
              Home
            </a>
            <a className="custom-link" href="#">
              Sobre
            </a>
            <a className="custom-link" href="#">
              Endereço
            </a>
          </nav>
        </section>
      </header>

      <main>
        <section className="section-custom min-h-screen flex items-center">
          <div className="max-w-5xl">
            <h3 className="text-white font-bold text-8xl uppercase leading-tight">
              Trabalhe com o café mais delicioso da região
            </h3>
            <p className="text-white text-4xl font-extralight py-4 leading-normal">
              Descubra o sabor inigualável do nosso café, cuidadosamente
              selecionado para proporcionar a energia que você precisa para o
              seu dia a dia. Enquanto você se dedica aos seus projetos,
              aproveite cada gole da bebida que conquistou o paladar de muitos.
              Aqui, unimos o prazer de um bom café com a paixão pela
              produtividade. Venha trabalhar em um ambiente inspirador, rodeado
              pelo aroma do melhor café da região!
            </p>
            <a className="btn-saiba-mais" href="#">
              Garanta o Seu Agora
            </a>
          </div>
        </section>

        <section className="section-custom">
          <h2>
            <span>Sobre Nós</span>
          </h2>
          <div>
            <div>
              <img src="/src/assets/img/about-img.jpeg" alt="" />
            </div>
            <div>
              <h3>O que faz nosso café especial</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur iste unde aspernatur odio fuga architecto, neque
                error qui numquam, velit atque? Quasi praesentium sit
                necessitatibus in recusandae vero ad iste?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
                architecto nihil quis laudantium quia laborum quibusdam quidem
                nesciunt eaque quasi, corporis nam eum quos, voluptas natus
                tempora hic ipsum laboriosam.
              </p>
              <a href="#">Saiba mais</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
