/*
jsvascript es una
las var se cambian x let  
*/
console.log (nombre);
document.write(nombre);
console.log(document.getElementById('titulo'));

let  elementoHTMLTitulo = document.getElementById('titulo');

let elementoDetypewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('!Hola!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Soy abigail puc')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Desarrolladora web JR')
    .pauseFor(2500)
    .start();
    
