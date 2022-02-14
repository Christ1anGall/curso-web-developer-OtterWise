window.onload = () => {
    
    const values = document.querySelectorAll("input")

    console.log(values);


    const form = values;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const formData = new FormData(form);
  
       console.log(formData);




    });
}
