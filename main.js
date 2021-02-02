let date = new Date();

let hour = date.getHours();

let minute = date.getMinutes();

let dateNow = `${hour}:${minute}`;

let phoneTimeElement = document.querySelector('.phone-time')
let phoneTimeEl = document.querySelector(".phone-time-two")

phoneTimeEl.textContent = dateNow;
phoneTimeElement.textContent = dateNow;


let formEl = document.querySelector(".form");
let textareaEl = document.querySelector(".texarea");
let listElement = document.querySelector(".list-two")

let formElement = document.querySelector(".form-two");
let textareaElement = document.querySelector(".texarea-two");
let listEl = document.querySelector(".list")

formElement.onsubmit = event => {
    event.preventDefault();

    let newliEl = document.createElement("li");
    newliEl.classList.add("item", "send");
    
    
    let newliElement = document.createElement("li");
    newliElement.classList.add("item", "read");

    newliElement.textContent = textareaElement.value;
    // newliElement.textContent = textareaEl.value;

    newliEl.textContent = textareaElement.value;
    // newliEl.textContent = textareaEl.value;
    
    
    
    listEl.appendChild(newliEl);
    // listElement.appendChild(newliEl);
    
    // listEl.appendChild(newliElement);
    listElement.appendChild(newliElement);
    
    // formEl.reset();
    formElement.reset();
}


formEl.onsubmit = event => {
    event.preventDefault();

    
    let newliEl = document.createElement("li");
    newliEl.classList.add("item", "send");

    let newliElement = document.createElement("li");
    newliElement.classList.add("item", "read");

    newliElement.textContent = textareaElement.value;
    newliElement.textContent = textareaEl.value;

    newliEl.textContent = textareaElement.value;
    newliEl.textContent = textareaEl.value;

    listElement.appendChild(newliElement);
    listEl.appendChild(newliElement);

    listEl.appendChild(newliEl);
    listElement.appendChild(newliEl);

    formElement.reset();
    formEl.reset();

};