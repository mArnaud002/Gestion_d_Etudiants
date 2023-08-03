var parent = document.getElementById("data");
var studentValues = ["id","name","username","email"];
var i = 0;
var buttonCharge = document.getElementById("charger");
var buttonCher = document.getElementById("chercher");
var buttonAjout = document.getElementById("ajouter")
var buttonEdit = document.getElementById("editer");
var buttonSupp = document.getElementById("supprimer");
var suppVector = [];


function tableLineCreator(student){
    let tr = document.createElement("tr");
    let button = document.createElement("button");
    button.textContent = "Supprimer"
    parent.appendChild(tr);
    for(let i=0; i<studentValues.length; i++){
        let td = document.createElement("td");
        td.textContent = student[studentValues[i]];
        tr.appendChild(td);   
    }
    console.log(document.getElementById(10));
    tr.appendChild(button);
}



function getSupButton(){
    let data = document.getElementById("data");
    let tr = data.getElementsByTagName("tr");
    let td = tr[2].getElementsByTagName("td");
    console.log(td);
}

function charger(students){
    for( let i=0; i<students.length; i++){
        let student = students[i];
        tableLineCreator(student)
    }
}

function chercher(id){
    let data = document.getElementById("data");
    let tr = data.getElementsByTagName("tr");
    for(let i=0; i<tr.length; i++){
        td = tr[i].getElementsByTagName("td");
        if(td[0].textContent == id){
            return td;
        }
    }
}
function chercherEtudiant(){
    let id = prompt("Entrer l'ID de la personne à chercher", "");
    let td = chercher(id);
    alert("L'étudiant recherché est : " + td[1].textContent +" "+ td[2].textContent );
}

function ajouterEtudiant(){
    let data = document.getElementById("data");
    let t = data.getElementsByTagName("tr");
    let columns = t[t.length-1].getElementsByTagName("td");
    let id = parseInt(columns[0].textContent) + 1; 
    let nom = prompt("Entrer le nom de l'étudiant à ajouter", "");
    let prenom = prompt("Son prenom :", "");
    let email = prompt("Son email :", "");
    let tr = document.createElement("tr");
    let button = document.createElement("button");
    student = [id,nom,prenom,email];
    button.textContent = "Supprimer"
    parent.appendChild(tr);
    for(let i=0; i<student.length; i++){
        let td = document.createElement("td");
        td.textContent = student[i];
        tr.appendChild(td);
    }
    tr.appendChild(button);

}
function editer(){
    let id = prompt("Entrer l'ID de la personne à éditer", "");
    let td = chercher(id);
    let nom = prompt("Entrer le nouveau nom: ", "");
    let prenom = prompt("Le prenom : ", "");
    let email = prompt("Le email : ", "exemple@someting.com");
    student = [nom,prenom,email];
    for(let i=1; i<td.length; i++){
        td[i].textContent = student[i-1];
    }
}
function supprimerEtudiant(){
    let id = prompt("Entrer l'ID", "");
    if (id == null || id == "") {
        alert("Aucun nom entré");
    }else {
        let table = document.getElementById("myTable");
        let tr = data.getElementsByTagName("tr");
        for(let i=0; i<tr.length; i++){
            td = tr[i].getElementsByTagName("td");
            if(td[0].textContent == id){
                table.deleteRow(i+1);
                break;
            }
    }
    }
}

function supprimerLigne(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
fetch("students.json")
.then(function(response){
    return response.json();
})
.then(function(students){
    for(let student of students ){
        tableLineCreator(student);
    }
})

buttonCharge.addEventListener("click",charger);
buttonEdit.addEventListener("click",editer);
buttonCher.addEventListener("click", chercherEtudiant);
buttonSupp.addEventListener("click", supprimerEtudiant);
buttonAjout.addEventListener("click", ajouterEtudiant);

