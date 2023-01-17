//Задание №1.

const user = {
        name: "Valeriy",
        surname: "Pavlov"
};

function printKeys (user) {
        for (let key in user) {
                if (user.hasOwnProperty(key)) {
                        console.log(key, user[key]);
                }
        }
}

printKeys(user);

