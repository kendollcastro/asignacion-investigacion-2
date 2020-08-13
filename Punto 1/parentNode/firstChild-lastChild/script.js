//Parece, al menos intuitivamente, que document.getElementById('contenido').firstChild debería seleccionarse el primer párrafo. Sin embargo, sólo ocurre así en Internet Explorer.
document.getElementById('contenido').firstChild 

//La propiedad lastChild funciona exactamente como firstChild, pero se refiere el último de los hijos de un elemento. Se aplican, por tanto, las mismas indicaciones anteriores.
document.getElementById('contenido').lastChild 
