
let date = new Date();

let hour = date.getHours();

let minute = date.getMinutes();

let dateNow = `${hour}:${minute}`;

let phoneTimeElement = document.querySelector('.phone-time')
let phoneTimeEl = document.querySelector(".phone-time-two")

phoneTimeEl.textContent = dateNow;
phoneTimeElement.textContent = dateNow;



let formElement = document.querySelector(".form-two");
let textareaElement = document.querySelector(".texarea-two");
let listEl = document.querySelector(".list")

formElement.onsubmit = event => {
    event.preventDefault();
    let newliEl = document.createElement("li")
    newliEl.classList.add("item", "send")


    newliEl.textContent = textareaElement.value;
    
    listEl.appendChild(newliEl);
    listEl.appendChild(newliElement);
    listEl.appendChild(newliEl);
    listElement.appendChild(newliElement);

    formElement.reset()
}

let formEl = document.querySelector(".form");
let textareaEl = document.querySelector(".texarea");
let listElement = document.querySelector(".list-two")

formEl.onsubmit = event => {
    event.preventDefault();

    let newliElement = document.createElement("li");
    newliElement.classList.add("item", "send");

    newliElement.textContent = textareaElement.value;

    listElement.appendChild(newliElement);

    formEl.reset()

}