//Задание №2.

function findName (object, keyname) {
        return (keyname in object);
}

const user = {
        name: "Valeriy"
}

console.log(findName(user, "name"));  // true
console.log(findName(user, "surname")); // false

