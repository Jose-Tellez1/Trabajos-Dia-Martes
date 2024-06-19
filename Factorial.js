function factorial (val){
    var resp=1; 
    for(let a=1; a<=val; a++){
        resp *=a
    }
    return resp;
    }
    var n=6;//aqui cambie el numero
    console.log(factorial(n))