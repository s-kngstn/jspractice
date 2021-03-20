// const fileSystem = require('fs');
// fileSystem.copyFileSync("file1.txt", "file2.txt");
var superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperheroName = superheroes.random();
var mySupervillianName = supervillains.random();

console.log(`${mySuperheroName} vs ${mySupervillianName}`);