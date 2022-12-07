import React from "react";

function Booking() {
  return (
    <div id="angebote" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Reiseziel</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option>Curaçao</option>
            <option>Seychellen</option>
            <option>Turks- und Caicosinseln</option>
            <option>Türkei</option>
            <option>Australien</option>
            <option>Japan</option>
            <option>Barbados</option>
            <option>Malediven</option>
            <option>Katar</option>
            <option>Mexiko</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Anreisedatum</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Abreisedatum</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>
        <div className="flex flex-col my-2 py-2 w-full">
          <label>Suche</label>
          <button className="w-full">Preise & Verfügbarkeit</button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
