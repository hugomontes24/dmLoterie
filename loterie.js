let boule = Math.floor((Math.random()*49)+1);
let tirage=[boule];

for (let index=0; index<5; index++){
    boule = Math.floor((Math.random()*49)+1);
        
    for(let i=0; i<tirage[length]; i++){
        if(boule == tirage[i]){
            boule = Math.floor((Math.random()*49)+1);
        }
    }

tirage.push(boule);
}
tirage = tirage.sort(function(a,b){return a-b});
console.log(tirage);
var dateActuelle = new Date();
let tab_jour= new Array("Dimanche","Lundi","mardi","mercredi","jeudi","vendredi","samedi");
let tab_mois= new Array("Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre");
// console.log(dateActuelle.getMonth());
document.write("<p>Les numeros gagnants du "+ tab_jour[dateActuelle.getDay()]+" "+ dateActuelle.getDate() +" "+tab_mois[dateActuelle.getMonth()]+ " "+dateActuelle.getFullYear() +" sont :</p>");


// document.write("Les numeros gagnants sont : <br><br>")
for(index=0; index<6; index++){
    document.write("          - le <font color=#be361>" + tirage[index]+ "</font><br>");
}





console.log(tirage.length);