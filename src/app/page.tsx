import SubscribeForm from "@/components/SubscribeForm";
import { Toaster } from "sonner";
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
          <div className="bg-gradient-to-b from-transparent via-30% to-green-50 flex flex-col text-left w-full py-40">
            <section className="container">
              <div className="flex flex-col md:flex-row items-center justify-between gap-20">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold text-green-700 mb-4 font-recoleta">
                    Coltiviamo Consapevolezza e Sostenibilità
                  </h1>

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
                </div>

                <SubscribeForm />
              </div>
            </section>
          </div>
        </section>

        <section
          className="relative bg-gradient-to-b from-green-50 to-white py-32 overflow-hidden"
          id="chi-siamo"
        >
          <img
            src="images/agricultural-overlay.png"
            className="absolute bottom-0 right-0 md:-bottom-24 opacity-25 min-w-[175%] lg:min-w-full z-0"
            alt=""
          />
          <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-white z-[1] w-full h-[150px]" />

          <div className="container max-w-4xl relative z-[2]">
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
          </div>
        </section>

        <section id="marketplace" className="py-32">
          <div className="container text-center max-w-4xl">
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
          <div className="bg-gradient-to-r from-white from-35% to-transparent pt-4 pb-32 md:pt-32">
            <div className="container">
              <div className="text-left max-w-xl">
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

        <section
          id="corsi-e-laboratori"
          className="bg-cover lg:bg-[length:125%] bg-no-repeat bg-center lg:bg-right !bg-none md:!bg-[url(/images/corsi-bg.jpg)]"
        >
          <div className="md:hidden bg-[url(/images/corsi-bg.jpg)] bg-cover bg-right w-full h-64"></div>

          <div className="bg-gradient-to-l from-white from-40% to-transparent pt-4 pb-32 md:pt-32">
            <div className="container">
              <div className="text-left max-w-xl ml-auto">
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
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-32  overflow-hidden" id="comunita">
          {/* <img
            src="images/iscriviti-overlay.png"
            className="absolute right-0 top-0 opacity-25"
            alt=""
          /> */}

          <div className="container flex flex-col md:flex-row justify-center items-center relative z-[1]">
            <div className="flex flex-col gap-4 text-left w-full z-[1]">
              <h2 className="text-3xl font-bold text-green-700">
                Unisciti alla Nostra Comunità
              </h2>

              <p className="text-lg text-green-800 max-w-xl">
                Unisciti alla comunità di Sottobosco per ricevere offerte
                esclusive e informazioni sulla sostenibilità.
              </p>
              <p className="text-lg text-green-800 max-w-xl">
                Verrai informato quando lanceremo la piattaforma e riceverai
                sconti riservati ai primi iscritti.
              </p>
            </div>

            <SubscribeForm />
          </div>
        </section>
      </main>
      <Toaster />
    </>
  );
}
