//const { rejects } = require("assert");


const container = document.querySelector(".container");


fetch('https://backstoreyourmusic.onrender.com/usuarios')
.then((response) => response.json())
.then((users)=>{
    let ptl = users.map(user => `<li>${user.email} ✉️ ${user.name}</li>`);
    ptl = ptl.join('');
    container.innerHTML = `<ul>${ptl}</ul>`;
    
})
.catch((error)=>{
console.log(error)
})


console.log('FIN')
