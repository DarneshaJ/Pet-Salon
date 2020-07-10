// object literal for the pet salon(one)
//name, phone number, address(street,numbeer)

const salon= {
    name:"Betty", 
    phone:"500-987-4561", 
    address:{
        street: "Avenue Ave.",
        number:"123"
    },
    counter:function(){
        alert("A pet was registered!");
        
    },
    pets:[]
}

//object destructoring
let{name,phone,address:{street,number},counter,pets}=salon;
document.getElementById("footer-info").innerHTML=`
  <p class="text-center">${name} ${phone} <br> ${street}, ${number} </p>`;

console.log[pets];


//object constructor for the pets (multiple)
//name,age,breed,gender,service,ownerName,contactPhone
class PetN{
    constructor(name,age,breed,gender,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
    }

}


//create two pets
const scooby= new PetN("Scooby",60,"Dane","Full Service","Shaggy","555-555-5555");
register(scooby);

const betty= new PetN("Betty",7,"Calico","Full Service","Jessie","562-951-7542");
register(betty);

const angel=new PetN("Angel",17,"Tabby","Wash and Dry","Adam","357-456-3542");
register(angel);


//register function
function register(aPet){
    //push pet to the array
    pets.push(aPet);

    //call the counter fuction
    counter();
    //display on the console the pets array
    console.log(aPet);
}

function status(){
    alert("Registered pets:" + pets.length);
    console.log("Registered pets:" + pets.length);


    for(i=0;i<3;i++){
        console.log(pets[i].name);
    }
}

status();
