
let date = new Date();

let hour = date.getHours();

let minute = date.getMinutes();

let dateNow = `${hour}:${minute}`;

let phoneTimeElement = document.querySelector('.phone-time')

phoneTimeElement.textContent = dateNow;



let formEl = document.querySelector(".form");
let textareaEl = document.querySelector(".texarea");
let listEl = document.querySelector(".list")

formEl.onsubmit = event => {
    event.preventDefault();
    let newliEl = document.createElement("li")
    newliEl.classList.add("item", "read")


    newliEl.textContent = textareaEl.value;
    
    listEl.appendChild(newliEl);

    formEl.reset()
}

let formElement = document.querySelector(".form-two");
let textareaElement = document.querySelector(".texarea-two");

formElement.onsubmit = event => {
    event.preventDefault();

    let newliElement = document.createElement("li");
    newliElement.classList.add("item", "send");

    newliElement.textContent = textareaElement.value;

    listEl.appendChild(newliElement);

    formElement.reset()

}