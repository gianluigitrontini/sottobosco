import Header from "./components/Header";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Sezione HERO */}
        <section
          className="bg-green-100 bg-cover bg-left pt-16"
          style={{
            backgroundImage: "url(/hero-bg.jpg)",
            backgroundSize: "125%",
          }}
        >
          <div className="bg-gradient flex flex-col text-left px-6 py-24 pb-32 w-full">
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
                    Voglio essere aggiornato
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

        <section className="bg-green-50 py-16" id="chi-siamo">
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

        <section id="marketplace" className="py-16">
          <div className="container px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-green-700">
              Il Marketplace dei Prodotti Locali
            </h2>
            <p className="text-lg text-green-800">
              Scopri una selezione di prodotti freschi e biologici coltivati
              dagli agricoltori locali.
            </p>
            <p className="mt-4 text-green-800">
              Ogni prodotto su Sottobosco racconta una storia: quella del nostro
              territorio, delle persone che lo lavorano e della passione per la
              qualità autentica.
            </p>
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

        <section id="produttori" className="bg-white py-16">
          <div className="container px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-green-700">
              Sei un produttore locale?
            </h2>
            <p className="text-lg text-green-800">
              Unisciti alla nostra comunità e vendi i tuoi prodotti direttamente
              ai consumatori.
            </p>
            <p className="mt-8 text-green-800">
              Sottobosco ti offre una piattaforma per valorizzare le tue colture
              e promuovere la tua azienda, con una gestione semplice e
              trasparente delle vendite
            </p>
            <p className="text-green-800">
              Ogni vendita supporta l&apos;agricoltura sostenibile e il futuro
              del nostro territorio.
            </p>
            <a
              href="#join"
              className="mt-6 inline-block bg-green-500 text-white p-4 hover:bg-green-600 transition"
            >
              Iscriviti come Produttore
            </a>
            {/* <div className="mt-10"> */}
            {/* <img src="path_to_your_image" alt="Agricoltori felici" className="mx-auto"> */}
            {/* </div> */}
          </div>
        </section>

        <section className="bg-green-50 py-16" id="corsi-e-laboratori">
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

        <section className=" py-16" id="comunita">
          <div className="container px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-green-700">
              Unisciti alla Nostra Comunità
            </h2>
            <p className="text-lg text-green-800">
              Iscriviti alla nostra newsletter e unisciti alla comunità di
              Sottobosco per ricevere offerte esclusive e informazioni sulla
              sostenibilità.
            </p>
            <form action="#" className="mt-6 flex justify-center">
              <input
                type="email"
                placeholder="Inserisci la tua email"
                className="px-4 py-2 rounded-l-lg border-t border-l border-b border-gray-300 focus:outline-none w-full max-w-[300px]"
              />
              <button
                type="submit"
                className="bg-green-500 text-white p-4 rounded-r-lg hover:bg-green-600 transition"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
