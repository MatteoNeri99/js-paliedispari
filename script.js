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


if (sceltaUtente !== "pari" && sceltaUtente !== "dispari"){

    sceltaUtente="pari";
}

let schieramentoPc;

if (sceltaUtente === "pari"){

    schieramentoPc="dispari";
}else 

    schieramentoPc="pari";


let numeroUtente =prompt("scrivi un numero da 1 a 5");

if (numeroUtente > 1 || numeroUtente < 5){

    numeroUtente=3;

}

