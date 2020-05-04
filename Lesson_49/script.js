let a = 0;
console.log(a);

let obj = {
    number: 5,
    sayNumber: function() {
         say = () => { // use () => inside function
            console.log(this)
        }
        say();
    }
}
obj.sayNumber();


let names = ['Ivan', 'Anna', 'Ksenia', 'Voldermart'];

let shortNames = names.filter((name) => {
    return name.length < 5
});

console.log(shortNames);

let answers = ['IvaN', 'AnnA', 'HeLlo'];

answers = answers.map((item) => item.toLowerCase())
console.log(answers);

console.log(`User ${name}, ${age} years old`);

function fetchData(data, count = 0) {
    console.log(`Data: ${data} in amount of ${count}`)
}
fetchData('Something');

// rest parameters ...
function max(a, b, ...numbers){
    console.log(numbers);
}
max(3, 4, 67, 97);


const arr1 = [1, 2, 5],
	  arr2 = [43, 2, 6];
	  
const res = Math.max(...arr1, ...arr2);
console.log(res);

const user = {
	name: 'default',
	pass: 'qwerty',
	right: 'user'
};

const admin = {
	name: 'admin',
	pass: 'root'
};
// const res = Object.assign({}, user, admin);
const res = {...user, ...admin};
console.log(res);

const x = 25, y = 10;
const coords = {
	x,
	y,
	calcSq(){
		console.log(this.x*this.y);
	}
};
coords.calcSq();
console.log(coords);


const user = {
	name: {
		first: 'Sam',
		second: 'Smith'
	},
	pass: 'qwerty',
	right: 'user'
};

const {name:{first, second}, pass, right} = user;

console.log(first, second);


function connect({
	host = 'localhost',
	port = 3000,
user = 'default'} = {/*deffault*/}) {
		console.log(`host: ${host}, port: ${port}, user: ${user}`)
}
connect({
	// port: 232,
	// host: 'ssd'
});

const numbers = [[3, 4], [6, 6]];

const [[a, b], [c, d]] = numbers;
console.log(a,b,c,d);

const country = {
	name: 'England',
	population: 2000000,
	gender: {
		male: ['15%', '40%'],
		female: ['16%', '29%']
	}
}

// country.gender.male[0] old method

const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;

console.log(maleUnder18, femaleAdult);