'use strict';


let btn = document.querySelector('.start'),
budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    // or 
    // values = document.querySelector('.budget-value', '.daybudget-value', '.level-value', '.expenses-value', '.optionalexpenses-value', '.income-value', '.monthsavings-value', '.yearsavings-value'),
    
    input = document.querySelectorAll('.expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByName('button')[2],
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    incomeLabel = document.querySelector('.choose-income'),
    checkBox = document.querySelector('#savings'), //only input inside of class
    sum = document.querySelector('.choose-sum'), 
    percent = document.querySelector('.choose-percent'), 
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


    let money, time;

    function start() {
        money = +prompt('Ваш бюджет на месяц?'); //+ before prompt to get numbers
        time = prompt('Введите дату в формате YYYY-MM-DD');
    
        while(isNaN(money)|| money == '' || money == null) {
            money = +prompt('Ваш бюджет на месяц?');
        }
    }
    start();
    
    
    
    let appData = {
        budget: money, // No need to write 'money'
        timeData: time, // No need to write 'time'
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseEspenses: function() {
            for(let i = 0; i < 2; i++) {
                let a = prompt('Введите обязательную статью расходов в этом месяце', ''), //Don't forget about ..., ''
                    b = prompt('Во сколько обойдется?', '');
            
                    if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                        && a != '' && b != '' && a.length < 50) {
                        console.log('Done!')
                        appData.expenses[a] = b;
                    } else {
                        console.log ('bad result');
                        i--;
                    }
                };
        },
        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget / 30).toFixed(1);
            // budget = alert(money / 30); Better to write like below
            alert('Ежедневный бюджет: ' + appData.moneyPerDay + 'usd.');
        },
        detectLevel: function() {
            if (appData.moneyPerDay < 100) {
                console.log('Минимальный уровень достатка');
            } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log('Средний уровень достатка');
            } else if(appData.moneyPerDay > 2000) {
                console.log('Высокий уровень достатка')
            } else {
                console.log('Произошла ошибка');
            };
        },
        checkSavings: function() {
            if(appData.savings == true) {
                let save = +prompt('Какова сумма накоплений?'),
                    percent = +prompt('Под какой процент?');
        
                appData.monthIncome = save/100/12*percent;
                alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
            }
        },
        chooseOptExpenses: function(){
            for(let i = 1; i <= 3; i++) {
                let questionOptExpenses = prompt('Статья необязательных расходов?', '');
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses)
            }
        },
        chooseIncome: function(){
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            
            if((typeof(items)) != 'string' || (typeof(items)) == null || items == '') {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            }
            appData.income.forEach (function(item, i){
                alert('Способы доп. заработка:' (i+1) + '-'+ item)
            })
        }
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
    