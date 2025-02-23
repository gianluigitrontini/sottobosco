const SubscribeForm = () => {
  return (
    <form
      action="https://app.us22.list-manage.com/subscribe/post"
      method="POST"
      className="mt-2 w-full md:max-w-sm mr-auto flex flex-col gap-2 bg-white bg-opacity-80 p-4 rounded-lg"
    >
      <input type="hidden" name="u" value="f951d52d4bf202a2f940a9902"></input>
      <input type="hidden" name="id" value="aea1447783"></input>
      {/* Campi pubblici */}
      <label htmlFor="MERGE1">
        Nome&nbsp;
        <span className="text-xs text-slate-600">opzionale</span>
      </label>
      <input
        defaultValue=""
        placeholder="Inserisci il tuo nome"
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full"
        type="text"
        name="MERGE1"
        id="MERGE1"
        size={25}
      />
      <label htmlFor="MERGE4">
        Numero di Telefono&nbsp;
        <span className="text-xs text-slate-600">opzionale</span>
      </label>

      <input
        defaultValue=""
        placeholder="Inserisci il tuo numero di telefono"
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full"
        type="text"
        name="MERGE4"
        id="MERGE4"
        size={25}
      ></input>
      <label htmlFor="MERGE0">Email</label>
      <input
        defaultValue=""
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full"
        placeholder="Inserisci la tua email"
        type="email"
        autoCapitalize="off"
        autoCorrect="off"
        name="MERGE0"
        id="MERGE0"
        size={25}
      />

      <button
        type="submit"
        className="bg-green-500 mt-4 text-white p-4 rounded-lg hover:bg-green-600 transition min-w-fit"
      >
        Iscriviti
      </button>
    </form>
  );
};

export default SubscribeForm;
