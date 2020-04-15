'use strict';

let StartBtn = document.querySelector('.start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    input = document.querySelectorAll('.expenses-item'),

    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeLabel = document.querySelector('.choose-income'),
    checkBox = document.querySelector('#savings'), //only input inside of class
    sumValue = document.querySelector('.choose-sum'), 
    percentValue = document.querySelector('.choose-percent'), 
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


    let money, time;

    expensesItemBtn.disabled = true;
    optionalExpensesBtn.disabled = true;
    countBudgetBtn.disabled = true;


    StartBtn.addEventListener('click', function(){
        time = prompt('Введите дату в формате YYYY-MM-DD');
        money = +prompt('Ваш бюджет на месяц?'); //+ before prompt to get numbers
        
        while(isNaN(money)|| money == '' || money == null) {
            money = +prompt('Ваш бюджет на месяц?');
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        year.value = new Date(Date.parse(time)).getFullYear();
        month.value = new Date(Date.parse(time)).getMonth() + 1;
        day.value = new Date(Date.parse(time)).getDate();

        expensesItemBtn.disabled = false;
        optionalExpensesBtn.disabled = false;
        countBudgetBtn.disabled = false;
    });

    expensesItemBtn.addEventListener('click', function() {
        let sum = 0;
        for(let i = 0; i < input.length; i++) {
            let a = input[i].value,
                b = input[++i].value;
    
            if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                console.log ('bad result');
                i = i - 1;
            }
        }
        expensesValue.textContent = sum;
    });
    optionalExpensesBtn.addEventListener('click', function() {
        for(let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
        }
    });
    countBudgetBtn.addEventListener('click', function() {
        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
    
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = 'Минимальный уровень достатка';
            } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = 'Средний уровень достатка';
            } else if(appData.moneyPerDay > 2000) {
                levelValue.textContent = 'Высокий уровень достатка';
            } else {
                levelValue.textContent = 'Произошла ошибка';
            } 
        } else {
            dayBudgetValue.textContent = 'Произошла ошибка';
        }
    });

    incomeLabel.addEventListener('input', function(){
        let items = incomeLabel.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    });

    checkBox.addEventListener('click', function(){
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', function() {
        if( appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    percentValue.addEventListener('input', function() {
        if( appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    let appData = {
        budget: money, // No need to write 'money'
        timeData: time, // No need to write 'time'
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

    
    
    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + '-' + appData[key])
    }
    
    // /*
    // // Using WHILE and DO
    // // let i = 0;
    // // while(i < 2) {
    // //     let a = prompt('Введите обязательную статью расходов в этом месяце', ''), //Don't forget about ..., ''
    // //         b = prompt('Во сколько обойдется?', '');
    
    // //         if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    // //             && a != '' && b != '' && a.length < 50) {
    // //             console.log('Done!')
    // //             appData.expenses[a] = b;
    // //         } else {
    // //             console.log ('bad result');
    // //             i--;
    // //         }
    // //         i++;
    // // };
    
    // // do{
    // //     let a = prompt('Введите обязательную статью расходов в этом месяце', ''), //Don't forget about ..., ''
    // //         b = prompt('Во сколько обойдется?', '');
    
    // //         if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    // //             && a != '' && b != '' && a.length < 50) {
    // //             console.log('Done!')
    // //             appData.expenses[a] = b;
    // //         } else {
    // //              console.log ('bad result');
    // //             i--;
    // //         }
    // //         i++;
    // // } 
    // // while(i < 2);
    // */ 
    
    
    // 3 4 5
    // 'string', "string", `string`;
    // true / false;
    // null;
    // undefined;
    