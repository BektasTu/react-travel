import React from "react";

const Contact = () => {
  return (
    <div id="kontakt" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-800">Kontaktformular</h2>
      <p className="text-center text-gray-700 py-2">
        Wir sind immer für Sie da!
      </p>
      <div className="grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <form>
          <div className=" grid grid-cols-2">
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Vorname"
              min={3}
              required
            />
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Nachname"
              min={3}
              required
            />
            <input
              className=" border m-2 p-2"
              type="text"
              placeholder="Adresse"
              required
            />
            <input
              className=" border m-2 p-2"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="border col-span-2 p-2 m-2"
              type="tel"
              placeholder="Tel"
              onkeypress="return onlyNumberKey(event)"
              minLength={6}
              required
            />
            <textarea
              className="border col-span-2 m-2 -2"
              cols="30"
              rows="10"
              minLength={5}
              maxLength={500}
              required
            ></textarea>
            <button className="col-span-2 m-2">Absenden</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
