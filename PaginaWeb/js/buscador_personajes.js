let personajesValidos = ["Mario", "Sonic", "Luigi", "Tails", "Bowser", "Eggman", "Yoshi", "Peach", "Knuckles", "Shadow"];

function buscarPersonaje() {

    let entradaPersonaje = document.getElementById("personaje").value;
    

    if (entradaPersonaje == "") {
        alert("Por favor, escribe el nombre de un personaje antes de buscar.");
    } else {
        
 
        let indicePosicion = personajesValidos.indexOf(entradaPersonaje);
        
 
        if (indicePosicion != -1) {
            alert("¡Genial! El personaje '" + entradaPersonaje + "' SÍ existe en nuestra base de datos.");
        } else {
            alert("Lo sentimos. El personaje '" + entradaPersonaje + "' NO está registrado en la base de datos o a puesto un espacio de mas.");
        }
    }
}