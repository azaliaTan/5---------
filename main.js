'use strict';


//1 задание
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
 alert(sum); 

 

//2 задание

  function multiplyNumeric(obj){
    for (let key in obj){
          
         if(typeof obj[key]==='number'){
            obj[key]*=2;
         }

    }
  };
  
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  console.log(menu);


//3 задание
let a;
let b;
let calculator = {
  
    read(){

        this.a = Number(prompt("Введите первое число:"));
        this.b = Number(prompt("Введите первое число:"));
    },
    
    sum() {
        return this.a + this.b;
      },
    
      mul() {
        return this.a * this.b;
      }


  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  

//4 задание
  function extractCurrencyValue(str) {
    let value = str.slice(1);
    return Number(value);
  }
  
  let price = "$120";
  let num = extractCurrencyValue(price);
alert(num);


//5 задание

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

alert( names ); 




function getAverageAge(users1) {
    let vozr = users1.reduce((sum, user) => sum + user.age, 0);
    return vozr / users.length;
}


let name1 = { name: "Вася", age: 25 };
let name2 = { name: "Петя", age: 30 };
let name3= { name: "Маша", age: 28 };

let users1 = [name1, name2, name3];

let Age = getAverageAge(users1);
alert(Age); 