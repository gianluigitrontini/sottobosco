"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Slider = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", watchDrag: false },
    [Autoplay({ stopOnInteraction: false, delay: 2000 })]
  );

  const products = [
    {
      id: 1,
      name: "Succo di Mela",
      produttore: "Azienda Agricola Rossi",
      image: "product-1.jpg",
      ritiro_date: "dal 5 Novembre",
    },
    {
      id: 2,
      name: "Carote",
      produttore: "Azienda Agricola Verdi",
      image: "product-2.jpg",
      ritiro_date: "Oggi",
    },
    {
      id: 3,
      name: "Cipolle",
      produttore: "Azienda Agricola Bianchi",
      image: "product-3.jpg",
      ritiro_date: "Oggi",
    },
    {
      id: 4,
      name: "Arance",
      produttore: "Azienda Agricola Bianchi",
      image: "product-4.jpg",
      ritiro_date: "Oggi",
    },
    {
      id: 5,
      name: "Pane Integrale",
      produttore: "Panificio Rosso",
      image: "product-5.jpg",
      ritiro_date: "Oggi",
    },
    {
      id: 6,
      name: "Caffè",
      produttore: "Brazilian Coffee Piceno",
      image: "product-6.jpg",
      ritiro_date: "dal 15 Novembre",
    },
    {
      id: 7,
      name: "Cavolo",
      produttore: "Azienda Agricola Verdi",
      image: "product-7.jpg",
      ritiro_date: "Oggi",
    },
    {
      id: 8,
      name: "Avocado",
      produttore: "Azienda Agricola Rossi",
      image: "product-8.jpg",
      ritiro_date: "dal 15 Novembre",
    },
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container ml-6 pl-6">
        <div className="embla__slide w-[250px] h-full bg-white p-6 border rounded-lg select-none">
          <img
            src={`/images/box-image.png`}
            className="h-44 w-full object-contain"
          />
          <h3 className="text-xl font-bold text-green-900 mt-4">
            Box mix di produttori
          </h3>
          {/* di {product.produttore} */}
          <p className="text-green-700 text-sm mt-4">Disponibile da Oggi</p>
        </div>
        {products.map((product) => (
          <div
            className="embla__slide w-[250px] h-full bg-white p-6 border rounded-lg select-none"
            key={product.id}
          >
            <img
              src={`/images/products/product-${product.id}.jpg`}
              alt={product.name}
              className="h-44 w-full object-contain"
            />
            <h3 className="text-xl font-bold text-green-900 mt-4">
              {product.name}
            </h3>
            di {product.produttore}
            <p className="text-green-700 text-sm mt-4">
              Disponibile {product.ritiro_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
