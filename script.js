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
}else {

    schieramentoPc="pari";
}

let numeroUtente =prompt("scrivi un numero da 1 a 5");

if (numeroUtente > 1 || numeroUtente < 5){

    numeroUtente=3;

}else if(numeroUtente !== Number){

    numeroUtente=3;
}

let numeroPc =Math.floor(Math.random() * 5 + 1);

console.log(sceltaUtente, numeroUtente)

console.log(schieramentoPc, numeroPc)



function pariDispari (numero, numeroUno){

    let somma= numero + numeroUno;

    let risultato;

    if(somma %2==0  || somma %2==1 ){

        risultato="pari"

    }else {

        risultato="dispari"
        
    }

    console.log(risultato)

    return risultato;

}


let esito = pariDispari(numeroUtente, numeroPc)

if (sceltaUtente === esito){

    console.log("ha vinto l'utente");
}else{

    console.log("ha vinto il pc");
}






