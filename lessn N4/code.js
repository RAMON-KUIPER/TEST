'use strict';

let money,time;
function start(){
money = prompt("Ваш бюджет на месяц?", " ");
time = prompt("Введите дату в формате YYYY-MM-DD.", " ");
while(isNaN(money),money==" ",money==null){
    money = prompt("Ваш бюджет на месяц?", " ");
}
};
start();

let appData = {
    budget:money,
    timeData: time,
    expenses: {},
    optionalExpensese: {} ,
    incame: [],
    saving: true
};
function chooseExpenses(){
    for(let i=0; i<2;i++){//for
        let a =prompt("Введіте cтаттю обизатильного росхода"+' '+"N/"+i,''),
            b =prompt("сколько?"+' '+"N/"+i, '');    
        if((typeof(a))==='string'&&(typeof(a))!=null&&(typeof(b))!=null&&a!=''
            &&b!=''&&a.length < 50){
            console.log('done');
            appData.expenses[a]=b;
         }else{
         i--;
       }    
    }   
}

chooseExpenses();

function detectDayBudget(){

    appData.moneyPerDay=(appData.budget/30).toFixed();


    alert("Ежедневний бюджет:"+appData.moneyPerDay);
};
   detectDayBudget();

   function detectLevel(){
        
if(appData.moneyPerDay<=100){
    console.log("Минммальний уровень достатка");
}else if (appData.moneyPerDay>100&&appData.moneyPerDay<=2000){
    console.log("Средний  уровень достатка");
}else if (appData.moneyPerDay>2000) {
    console.log("Високий  уровень достатка");
}else {
    console.log("Произошла ошибка")
};
   };


function checkSaving(){
if(appData.saving==true){
    let save = +prompt("Какаова сума накоплни?"," "),
        procent = +prompt("какой одсотак?"," ");

    appData.monthIncame = ((save/12)*(100/procent)).toFixed();

    alert("Доход з депозита :"+  appData.monthIncame );

}
};
checkSaving();
function chooseOptExpenses(){
    for (let i=1; i<4;i++){
        let a= prompt("Стаття неабизательних росходов?"+"  "+i," ");
        if(a!=""&&a!=null&&a.length<50){
           // let b=a;
            appData.optionalExpensese[i]=a; 
            console.log("Done optionalEzpenses")      
        }  else {
            console.log("Прозойшла ошибка!")
            i--;  
    };
    };
};
chooseOptExpenses();