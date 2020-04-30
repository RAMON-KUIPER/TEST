'use strict';
let money = +prompt('Ваш бюджет на месяц?','');
let time = prompt('Введите дату в формате YYYY-MM-DD','YYYY-MM-DD');

let appData = {
    budget:money,
    timeData: time,
    expenses: {},
    optionalExpensese: {} ,
    incame: [],
    saving: false
};

let i=0;//while| do...while
do{//do....while
//while(i<2){//while

//for(let i=1; i<3;i++){//for
    
    let a =prompt("введіте cтаттю росхода"+' '+"N/"+i,'');
        if (a===null){
        console.log('cancel')
        break;}    
    let  b =prompt("сколько?"+' '+"N/"+i, '');    
        if (b===null||a===null){
        console.log('cancel')
        break;
        
   } else if((typeof(a))==='string'&&(typeof(a))!=null&&(typeof(b))!=null&&a!=''
   &&b!=''&&a.length < 50){
    console.log('done');
    i++;//while| do.....while
   
   }else{
     if (a===''||b===''){
     alert(i+"empty string,write something");     
      
    }else if (a.length > 50){
     alert(i+"too long string,\'стаття росходів\'");}
   }
   /*}else{
     if (a===''||b===''){
     alert(i+"empty string,write something");
     i++;    
      
    }else if (a.length > 50){
     alert(i+"too long string,\'стаття росходів\'");i++;
    }
   } *///to est dla for

    appData.expenses[a]=b;
} while( i<2);
appData.moneyPerDay=appData.budget/30;
alert("Ежедневний бюджет:"+appData.moneyPerDay);   