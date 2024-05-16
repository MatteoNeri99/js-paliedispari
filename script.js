let parolaUtente=prompt("scrivi una parola palindroma");

let parolaUtenteRigirata="";

for (i=parolaUtente.length-1; i >= 0; i--){

      parolaUtenteRigirata=parolaUtenteRigirata + parolaUtente[i]

}


console.log(parolaUtenteRigirata);


