import client from "../providers/client";




export const listPets = (id) => client.get(`/pets/${id}`);

export const makePets = (id, data) => client.post(`/pets/${id}`, data);
