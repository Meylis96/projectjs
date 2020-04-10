let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');


let a = prompt('Введите обязательную статью расходов в этом месяце'),
    b = prompt('Во сколько обойдется?');


let appData = {
    budget: 'money',
    timeData: 'time',
    expenses: {
        a : b
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

budget = alert(money / 30);

