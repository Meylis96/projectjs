let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => {
    return name.length > 0 && employers.length != ''
});

employersNames = employersNames.map((item) => item.toLowerCase().trim());

// or just const employersNames = employers.filter(employer => employer).map((item) => item.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
}

const {cash, eu, rus} = sponsors;

const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

const calcCash = (cash = 0) => cash.reduce((a, b) => a + b);

const money = calcCash(cash);


const makeBusiness = ({owner = 'Sam', director = 'Victor', cash, emp}) => {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our empoyers: ${emp}
We have sponsors: ${sumSponsors}
Note. Be carefull with ${eu[0]}. It's a huge risk`);
};
makeBusiness({cash:money, emp:employersNames});