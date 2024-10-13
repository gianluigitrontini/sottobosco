import Header from "./components/Header";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Sezione HERO */}
        <section
          className="bg-green-100 bg-cover bg-center pt-20"
          style={{
            backgroundImage: "url(/hero-bg.jpg)",
          }}
        >
          <div className="bg-gradient flex flex-col text-left w-full py-40">
            <section className="container">
              <h1 className="text-4xl font-bold text-green-700 mb-4 font-recoleta">
                Coltiviamo Consapevolezza e Sostenibilità
              </h1>

              <div className="max-w-2xl">
                <p className="text-xl text-green-800">
                  Sottobosco ti connette direttamente con piccoli produttori
                  locali, promuovendo un futuro più verde e sano.
                </p>
                <p className="text-xl text-green-800 mt-4">
                  Riscopri il gusto autentico dei prodotti locali e apprendi a
                  nutrire il pianeta.
                </p>

                <p className=" text-green-800 mt-8">
                  Iscriviti per essere il primo a sapere quando la piattaforma
                  sarà disponibile
                </p>

                <form action="#" className="mt-2 flex w-full max-w-xl mr-auto">
                  <input
                    type="email"
                    placeholder="Inserisci la tua email"
                    className="px-4 py-2 rounded-l-lg border-t border-l border-b border-gray-300 focus:outline-none w-full max-w-[300px]"
                  />
                  <button
                    type="submit"
                    className="bg-green-500 text-white p-4 rounded-r-lg hover:bg-green-600 transition min-w-fit"
                  >
                    Iscriviti
                  </button>
                </form>

                {/* <div className="flex items-center mt-4">
                  <a href="#marketplace" className="btn-primary">
                    Scopri i Prodotti Locali
                  </a>
                  <a href="#produttori" className="ml-4 btn-outline">
                    Unisciti alla Comunità di Produttori
                  </a>
                </div> */}
              </div>
            </section>
          </div>
        </section>

        <section className="bg-green-50 py-32" id="chi-siamo">
          <div className="container px-6 max-w-4xl">
            <p className="text-green-800 text-center uppercase">
              Più di un semplice marketplace
            </p>
            <h2 className="text-green-700 text-center mt-4 font-recoleta text-4xl font-semibold">
              Siamo una cooperativa che supporta i piccoli produttori locali e
              promuove un&apos;agricoltura sostenibile.
            </h2>
            <p className="text-lg text-green-800 text-center mt-4">
              Crediamo che ogni acquisto possa fare la differenza, scegliendo
              prodotti freschi, locali e biologici, coltivati con rispetto per
              l&apos;ambiente e la comunità.
            </p>
            {/* <div className="mt-10"> */}
            {/* <img src="path_to_your_image" alt="Ciclo della terra" className="mx-auto"> */}
            {/* </div> */}
          </div>
        </section>

        <section id="marketplace" className="py-32">
          <div className="container px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-green-700">
              Il Marketplace dei Prodotti Locali
            </h2>
            <div className="text-lg text-green-800">
              <p>
                Scopri una selezione di prodotti freschi e biologici coltivati
                dagli agricoltori locali.
              </p>
              <p className="mt-4">
                Ogni prodotto su Sottobosco racconta una storia: quella del
                nostro territorio, delle persone che lo lavorano e della
                passione per la qualità autentica.
              </p>
            </div>
          </div>

          {/* Slider */}
          <section className="mt-20">
            <Slider></Slider>
          </section>

          {/* <div className="flex">
            <a
              href="#marketplace"
              className="mx-auto mt-8 inline-block bg-green-500 text-white p-4 hover:bg-green-600 transition text-center"
            >
              Esplora il Marketplace
            </a>
          </div> */}
        </section>

        <section
          id="produttori"
          className="bg-cover lg:bg-[length:125%] bg-no-repeat bg-center lg:bg-left-top !bg-none md:!bg-[url(/images/produttore-bg.jpg)]"
        >
          <div className="md:hidden bg-[url(/images/produttore-bg.jpg)] bg-cover bg-right w-full h-64"></div>
          <div className="bg-gradient-to-r from-white from-35% to-transparent px-6 text-left pt-4 pb-32 md:pt-32">
            <div className="container">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-green-700 mb-2">
                  Sei un produttore locale?
                </h2>
                <p className="text-lg text-green-800">
                  Unisciti alla nostra comunità e vendi i tuoi prodotti
                  direttamente ai consumatori.
                </p>
                <p className="mt-8 text-green-800">
                  Sottobosco ti offre una piattaforma per valorizzare le tue
                  colture e promuovere la tua azienda, con una gestione semplice
                  e trasparente delle vendite
                </p>
                <p className="text-green-800">
                  Ogni vendita supporta l&apos;agricoltura sostenibile e il
                  futuro del nostro territorio.
                </p>
                <a
                  href="#join"
                  className="mt-6 inline-block bg-green-500 text-white p-4 hover:bg-green-600 transition"
                >
                  Iscriviti come Produttore
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className=" py-32" id="corsi-e-laboratori">
          <div className="container px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-green-700">
              Corsi di Sostenibilità e Laboratori Educativi
            </h2>
            <p className="text-lg text-green-800">
              Corsi e laboratori pratici per diffondere la cultura della
              sostenibilità, dalle scuole alle aziende agricole.
            </p>
            <p className="mt-4 text-green-800">
              Scopri come creare un orto didattico, apprendi nuove tecniche
              agricole sostenibili o partecipa ai nostri laboratori sulla
              nutrizione consapevole.
            </p>
            <a
              href="#corsi"
              className="mt-6 inline-block bg-green-500 text-white p-4 hover:bg-green-600 transition"
            >
              Scopri i nostri Corsi
            </a>
            {/* <div className="mt-10"> */}
            {/* <img src="path_to_your_image" alt="Laboratori educativi" className="mx-auto"> */}
            {/* </div> */}
          </div>
        </section>

        <section
          className="relative py-20 bg-opacity-25 flex flex-col md:flex-row justify-center items-center bg-green-100 overflow-hidden"
          id="comunita"
        >
          <img
            src="images/iscriviti-overlay.png"
            className="absolute right-0 top-0 -z-10 opacity-50"
            alt=""
          />
          <div className="flex flex-col gap-2 px-6 text-left w-2/3 max-w-xl z-[1]">
            <h2 className="text-3xl font-bold text-green-700">
              Unisciti alla Nostra Comunità
            </h2>
            <p className="text-lg text-green-800">
              Unisciti alla comunità di Sottobosco per ricevere offerte
              esclusive e informazioni sulla sostenibilità.
            </p>
            <p className="text-lg text-green-800">
              Verrai informato quando lanceremo la piattaforma e riceverai
              sconti riservati ai primi iscritti.
            </p>
          </div>

          <form
            action="#"
            className="mt-6 flex flex-col gap-4 p-8 rounded-lg w-1/3 bg-white bg-opacity-75"
          >
            <input
              type="text"
              placeholder="Inserisci il nome"
              className="px-4 py-2 border focus:outline-none w-full"
            />

            <input
              required
              type="email"
              placeholder="Inserisci la tua email (richiesto)"
              className="px-4 py-2 border focus:outline-none w-full"
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition"
            >
              Iscriviti
            </button>
          </form>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
