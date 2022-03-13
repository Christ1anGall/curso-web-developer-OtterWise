import React, { useEffect, useState } from "react";

import { makePets } from "../services/pets";
import "./registerPet.css"

export default function RegisterPets() {
  const handleSubmit2 = (event) => {
    let id = JSON.parse(localStorage.user).id;

    event.preventDefault();
    const formData2 = new FormData(event.currentTarget);
    const data = {
      name: formData2.get("name"),
      breed: formData2.get("breed"),
      age: formData2.get("age"),
      species: formData2.get("species"),
      gender: formData2.get("gender"),
      url: formData2.get("url"),
    };

    const request = async () => {
     
      const response = await makePets( id , data );
        console.log(response.data);
      } 
    
    request();
  };

  return (
    <div >
      
      <form className="formCreatePet" onSubmit={handleSubmit2}>
      Cadastre o seu Pet
        <label>
          <input type="text" name="name" placeholder="Nome:" />
        </label>
        <label>
          <input type="text" name="breed" placeholder="Raça:" />
        </label>
        <label>
          <input type="number" name="age" placeholder="Idade:" />
        </label>
        <label>
          <input type="text" name="species" placeholder="Espécie:" />
        </label>
        <label>
          <input type="text" name="gender" placeholder="Gênero:" />
        </label>
        <label>
          <input type="url" name="url" placeholder="Foto:" />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
