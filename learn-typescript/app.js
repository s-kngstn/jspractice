// const person: { <-- bad practice
//   name: string,
//   age: number,
// } = {
// const person:{ <--- used if changing typescripts inference (e.g. adding tuple to object)
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {  // <-- good practice
//   name: 'Sam',
//   age: 35,
//   hobbies: ['Cooking', 'Eating'],
//   role: [2, 'author'],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;  
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; //<-- behind the scenes these will be assigned numbers 0, 1, 2, ... ,
var person = {
    name: 'Sam',
    age: 35,
    hobbies: ['Cooking', 'Eating'],
    role: Role.ADMIN
};
// person.role.push('admin');
var favoriteActivites;
favoriteActivites = ['Ball'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // <-- TS inference really shines here
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role === Role.ADMIN) {
    console.log('Is read only');
}
