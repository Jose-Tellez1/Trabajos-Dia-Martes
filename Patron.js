function piramide(filas){
    let numasteriscos=1;
    for(let a=1; a<=2; a++){
        let=fila='';
for(let w=0; w<numasteriscos; w++){
    fila +='*';
}
console.log(fila);
numasteriscos++;
    }
    for(let a=3; a<= filas; a++){
        let fila='';   
        for(let w=0; w<numasteriscos; w++){
            fila +='*';
        }
        console.log(fila);
        numasteriscos +=2;
     }
}
piramide(6);