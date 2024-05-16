let parolaUtente=prompt("scrivi una parola palindroma");

let parolaUtenteRigirata="";

for (i=parolaUtente.length-1; i >= 0; i--){

      parolaUtenteRigirata=parolaUtenteRigirata + parolaUtente[i]

}


console.log(parolaUtenteRigirata);



function palindroma (parola, parolaUno){

    
    if(parola === parolaUno){

        let èPalindroma="bravo la parola inserita è palindroma";

        return èPalindroma;
        

    }else if (parola !== parolaUno){
        let falso="bravo la parola inserita non è palindroma";

        return falso;
    }

}


let controllo=palindroma(parolaUtente, parolaUtenteRigirata)

console.log(controllo)