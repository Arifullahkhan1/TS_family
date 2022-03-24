import { Family } from "./modules/family";

let father:Family= new Family("Arifullah", "Male",40);
let mother:Family= new Family("Noreen", "Female",36);
let son:Family= new Family("Irfanullah", "Male",11);
let doughter:Family= new Family("Afia", "female",8);

let famnilyTree:Family[]=[father,mother,son,doughter];

let myfamilylist=document.getElementById("F_list");

for (let i = 0; i < famnilyTree.length; i++) {
    const familyT = famnilyTree[i];
    let name=document.createElement("li");
    let gander=document.createElement("li");
    let age=document.createElement("li");
    name.innerHTML="Name: " + familyT.name;
    gander.innerHTML="Gender: "+ familyT.gender;
    age.innerHTML="Age: "+ familyT.age +"<br><br>";
    myfamilylist.appendChild(name);
    myfamilylist.appendChild(gander);
     myfamilylist.appendChild(age);

}

