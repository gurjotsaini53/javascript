// create a const object in js , Can you change it to hold a number later

const a = {
    name:"gurjot",
    "age":"20"
}

// a=4;

// no error will be thrown
console.log(a)
a["name"] = "Gurjot Singh"
a["friends"] = "Sahil,Netan,Ansh"
console.log(a)