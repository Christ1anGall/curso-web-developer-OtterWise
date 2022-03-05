
import client from "../providers/client";

export const listAllUser = () => client.get("users");
export const newUser = (data) => client.post("/users", data);
