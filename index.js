function nose(){
    console.log("vnsrviawbvoarwovbsvbks");
    const boton = document.getElementById("prueba");
    const color = boton.style.backgroundColor;
    boton.style.backgroundColor = "black";
    console.log(color);
    if (color == "black"){
        boton.style.backgroundColor = "brown";}
        else{
            boton.style.backgroundColor = "black";
            const titulo = creartitulo();
            boton.appendChild(titulo);
        }
}
    function creartitulo(){
    const titulo = document.createElement("p");
    titulo.innerHTML = "Probando";
    return titulo;
}
//console.log ("AaaaaaaAaaaaaAAAAAAAAAAAAaaaaaaaaaaaaAAaaaaaaaaAAAaAaaaaAAAAaa");
//for (let a = 0; a < 3000; a++) {
//    console.log ("NomNom12345wiiiii" + a)
//}
const nosee = document.createElement("div")
nosee.classList.add("nose")

const body = document.querySelector("body")
body.appendChild(nosee);
for (let x = 0; x < 24500; x++) {
    const wawa = document.createElement("div")
    wawa.classList.add("wawa")
    body.appendChild(wawa)
}
function addMessage(event) {
    event.preventDefault()
    console.log(event.code)

}

document.getElementById("chat").addEventListener("keydown",addMessage)