//chiedere all'utente la mail
//creare la lista di mail
//controllare se la mail inserita è presente nella lista che può accedere
//stampa il messaggio se può o non può


var mail = prompt('Inserisci la mail:');
console.log(mail);
var iscrittiMail = ['Mario@tiscali.it' , 'Dario@gmail.com' , 'Mirko@me.com' , 'Debora@icloud.it'];
console.log(iscrittiMail);

//Creare variabile di verifica a false
var mailNonTrovata = 0;
console.log(mailNonTrovata 'Non ho trovato questa mail');

//lista tutte le mail dell'array
for(var i = 0; i < iscrittiMail.length; i++) {
    console.log(iscrittiMail[i]);
    //se la mail è quella giusta metto la variabile di verifica a true
    if (mail == iscrittiMail[i]) {

    }
}

//se l'abbiamo trovata bene, altrimenti male
