import React from "react";

function Booking() {
  return (
    <div id="angebote">
      <form>
        <div>
          <label>Reiseziel</label>
          <select name="" id="">
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
        <div>
          <div>
            <label>Anreisedatum</label>
            <input type="date" />
          </div>
          <div>
            <label>Abreisedatum</label>
            <input type="date" />
          </div>
        </div>
        <div>
          <label>Suche</label>
          <button>Preise & Verfügbarkeit</button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
