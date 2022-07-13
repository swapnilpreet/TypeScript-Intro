var info = {
    title: "swapnil",
    status: true,
    id: 4
};
var funUser = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name;
    if (first_name !== undefined && last_name !== undefined) {
        console.log(first_name + " " + last_name);
    }
    else {
        console.log(first_name);
    }
};
var student = {
    first_name: "swapnil",
    last_name: "ramteke"
};
funUser(student);
var arrofPerson = [];
var Person = {
    phone: 1245632,
    addresses: "noida",
    email: "adss58@gmail.com",
    firstname: "swapnil",
    lastname: "ramteke"
};
arrofPerson.push(Person);
console.log(arrofPerson);
