let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');


let appData = {
    budget: money, // No need to write 'money'
    timeData: time, // No need to write 'time'
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''), //Don't forget about ..., ''
    b2 = prompt('Во сколько обойдется?', ''),
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = prompt('Во сколько обойдется?', '');
    
appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

// budget = alert(money / 30); Better to write like below
alert(appData.budget / 30);

