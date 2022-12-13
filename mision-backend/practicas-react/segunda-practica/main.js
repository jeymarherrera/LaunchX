//objeto
let names = {
    name: "Jesus",
    lastname: "Guzman"
};

console.log(nombres.nombre);
//valida si tiene un atributo con ese nombre
console.log(nombres.hasOwnProperty("telefono"));

function dog(name, age){
    let dog = Object.create(ConstructObject);
    dog.name = name;
    dog.age = age;
    return dog;
}

let ConstructObject = {
    speak: function() {
        return "wof wof Im a dog";
    }
}

let firulais = dog("Firulais", 9);
console.log(firulais);
