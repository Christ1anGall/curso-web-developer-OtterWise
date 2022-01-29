/*
Crie um projeto novo e instale a biblioteca axios. 
- Consuma a lista de posts através do endpoint https://jsonplaceholder.typicode.com/posts.
- Agora que você tem a lista de posts, consulte o primeiro post da lista.
- Cadastre um novo post enviando um objeto com os atributos title e body para o endpoint https://jsonplaceholder.typicode.com/posts.
- Faça a edição de um post enviando novos atributos title e body para o post com id 1.
- Faça a exclusão do primeiro post vindo da listagem de posts.
*/

import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/"

const get = async () => {
    try {
        const reponse = await axios.get(URL + "posts/1");
        console.log(reponse.data);
    } catch (error) {
        console.log(error.message)
    }
}

get()

