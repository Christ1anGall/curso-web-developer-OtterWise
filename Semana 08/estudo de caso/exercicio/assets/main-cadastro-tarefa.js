
const envioTarefa = async (tarefa) => {

    try {
        const post = await axios.post(
            'https://jsonplaceholder.typicode.com/todos', tarefa);
        return post;
    }
    catch (error) {
        alert(error);
    }


};



window.onload = () => {
    const tarefaInput = document.getElementsByName('tarefa')[0]
    const form = document.querySelector('form')

    tarefaInput.addEventListener('input', (event) => {

        const tarefa = event.target.value


        const tarefaEnviar = {
            title: "tarefas",
            body: tarefa,
            userId: 1,

        }




        form.addEventListener("submit", async (event) => {
            try {
                event.preventDefault();
                const resposta = await envioTarefa(tarefaEnviar)

                console.log(resposta);

            } catch (error) {
                alert(error)
            }


        })
    })
}
