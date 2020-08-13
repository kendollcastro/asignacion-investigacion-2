
    // Creamos el nuevo párrafo
    let nuevo_parrafo = document.createElement('p').appendChild(document.createTextNode('Nuevo párrafo.'));
    
    // Recojemos en una variable el segundo párrafo
    let segundo_p = document.getElementById('padre').getElementsByTagName('p')[1];
    
    // Y ahora lo insertamos
    document.getElementById('padre').insertBefore(nuevo_parrafo,segundo_p);
 