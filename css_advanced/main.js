let person = {
    name: "Obex",
    age: 25,
    profession: "Software Engineer"
};
let {name, age, profession} = person;
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Profession: ${profession}`)

let nums = [1,2,3,4,5];
nums.push(6);
nums.shift();
console.log(nums);