'use strict';
let money = prompt('Ваш бюджет на месяц?','');
let time = prompt('Введите дату в формате YYYY-MM-DD','YYYY-MM-DD');
//console.log(time);
let appData = {
    budget: money,
    timeData: time,
    optionalExpensese:'' ,
    incame:'',
    saving: false
};
let firstQuestion= prompt('Введите обизатмльною строку росходов в етом месяце.','');
let secondQuestion = prompt('Во сколько обойдьотся?','');
appData.expenses= {
    firstAnswer: firstQuestion,
    secondAnswer: secondQuestion    
};
let dayInMunth = 30;
let budgetOnADay = (+money -+secondQuestion)/+dayInMunth;
alert(budgetOnADay);
//console.log(person.Name);