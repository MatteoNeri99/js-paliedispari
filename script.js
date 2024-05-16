// let parolaUtente=prompt("scrivi una parola palindroma");

// let parolaUtenteRigirata="";







// function palindroma (parola, parolaUno){

//     for (i=parola.length-1; i >= 0; i--){

//         parolaUno=parolaUno + parola[i];
        
        
//     }
//      console.log(parolaUno)
    
//     if(parola === parolaUno){

//         let èPalindroma="bravo la parola inserita è palindroma";

//         return èPalindroma;
        

//     }else if (parola !== parolaUno){
//         let falso="la parola inserita non è palindroma";

//         return falso;
//     }

// }


// let controllo=palindroma(parolaUtente, parolaUtenteRigirata)

// console.log(controllo)





let sceltaUtente=prompt("scegli tra pari o dispari");

console.log(sceltaUtente)

if (sceltaUtente !== "pari" && sceltaUtente !== "dispari"){

    sceltaUtente="pari";

    console.log(sceltaUtente)
}
