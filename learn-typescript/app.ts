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

enum Role { ADMIN, READ_ONLY, AUTHOR }; //<-- behind the scenes these will be assigned numbers 0, 1, 2, ... ,
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // <-- would start at 5... 5, 6, 7, .. , ..
// enum Role { ADMIN = 50, READ_ONLY = 100, AUTHOR = 33 }; // <-- custom assignment

const person = {  // <-- good practice
  name: 'Sam',
  age: 35,
  hobbies: ['Cooking', 'Eating'],
  role: Role.ADMIN,
};

// person.role.push('admin');

let favoriteActivites: string[];
favoriteActivites = ['Ball'];

console.log(person.name);

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase()); // <-- TS inference really shines here
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.ADMIN){
  console.log('Is read only');
}