/*//function nose(){
//    console.log("vnsrviawbvoarwovbsvbks");
//    const boton = document.getElementById("prueba");
//    const color = boton.style.backgroundColor;
//    boton.style.backgroundColor = "black";
//    console.log(color);
//    if (color == "black"){
//        boton.style.backgroundColor = "brown";}
//        else{
//            boton.style.backgroundColor = "black";
//            const titulo = creartitulo();
//            boton.appendChild(titulo);}}
//    function creartitulo(){
//    const titulo = document.createElement("p");
//    titulo.innerHTML = "Probando";
//    return titulo;}
//console.log ("AaaaaaaAaaaaaAAAAAAAAAAAAaaaaaaaaaaaaAAaaaaaaaaAAAaAaaaaAAAAaa");
//for (let a = 0; a < 3000; a++) {
//    console.log ("NomNom12345wiiiii" + a)
//}
//const nosee = document.createElement("div")
//nosee.classList.add("nose")

//const body = document.querySelector("body")
//body.appendChild(nosee);

for (let x = 0; x < 24500; x++) {
    const wawa = document.createElement("div")
    wawa.classList.add("wawa")
    body.appendChild(wawa)}
function addMessage(event) {
    event.preventDefault()
    console.log(event.code)}

document.getElementById("chat").addEventListener("keydown",addMessage)
*/
 const input = document.querySelector('#message');
 const form = document.querySelector('form');
 const historial = document.querySelector('#historial');


 function addMessage(content,isResponse) {
    const messageContainer = document.createElement('div');
    if (isResponse) {
        messageContainer.classList.add('historial__message_response')
    } else {
        messageContainer.classList.add('historial__message')
    }

    const messageContent = document.createElement('p');
    messageContent.innerText = content;

    messageContainer.appendChild(messageContent);
    historial.appendChild(messageContainer);
 }

 async function sendMessage(){
    const url = 'http://localhost:3000/historial-chat';
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ message: 'aaa' }),
        headers: {
            "Content-Type": "application/json",
            token: "example",
        }
    });    
    const message = await resp.json();
    addMessage(message.data, true)
 }

 form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.log("submit");
    const formData = new FormData(ev.target);
    const messageContent = formData.get("chat")
    if(messageContent === "") return;
    addMessage(messageContent, false);
    sendMessage();
    ev.target.chat.value = "";

 });