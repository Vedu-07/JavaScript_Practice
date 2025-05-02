const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}

let ans = persons.map(getFullName);  // correctly maps each person to their full name
console.log(ans);  // logs: ["Malcom Reynolds", "Kaylee Frye", "Jayne Cobb"]
