import React, { useState } from "react";
import { useEffect } from "react";
import { listPets } from "../services/pets";
import "./List.css"

export default function ProtectedPage() {
  const [pet, setPet] = useState(null);

  const id = JSON.parse(localStorage.user).id;

  useEffect(() => {
    const request = async () => {
      try {
        const response = await listPets(id);
        setPet(response.data.pets);
        
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, []);

  if (id && !pet) return <p>Cadastre um Pet</p>;

  console.log(pet);

  if (pet)
    return (
      <div className="petList">
        <p  >você tem {pet.length} pets cadastrados </p>

        {pet.map((pets) =>
          <div className="boxPet">   
          
            <img className="imgPet" src={pets.url} alt="" id={pets.id} />
            <div className="attributesPet">   
          <p id={pets.id }>Nome: {pets.name} </p>
          <p id={pets.id }>Raça: {pets.breed}  </p>
          <p id={pets.id }>Idade: {pets.age} </p>
              <p id={pets.id}>Especie: {pets.species}  </p>
              </div>
          
        </div>)}
        
      </div>
    );
}
