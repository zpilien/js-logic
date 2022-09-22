
/*Conditional statements gives us the ability to check conditions and change the behavior of the program accordingly:
if 
else if
else 
*/

//Invoke your functions and console.log your results

/*1. Create a function named isRainy which takes a boolean parameter boo. 
This function will return the statement 'Bring an umbrella' if the boolean value is true.
*/

function isRainy(bool){
    if(bool === true){
        return 'Bring an umbrella';
    }
}
console.log(isRainy(true));

/*2. Create a function named vaccinated which takes a boolean parameter boo. 
If the value is true, it'll return the statement: 'Please come in.' 
If the value is false, it'll return the statement: 'Please show me your Covid test.'
*/

function vaccinated(boo){
    if(boo === true){
        return "Please come in";
    }else {
        return "Please show me your Covid test";
    }
}
console.log(vaccinated(true));
console.log(vaccinated(false));

/*3. Create a function named scrabble which takes two string parameters word1, word2. 
If word1 is longer than word2, it will return the statement: 'premium score'. 
If not, it will return 'normal score'.
*/

function scrabble(word1, word2){
    if(word1.length > word2.length){
        return "premium score";
    } else return "normal score";
}
console.log(scrabble('cheese', 'toad'));
console.log(scrabble('frog', 'excellence'));


/*4. Create a function named shopping which takes one number parameter budget. 
If the budget is over 100, return 'Banana Republic';
If the budget is over 50, return 'Gap';
If the budget is 50 or less, return 'Old Navy';
*/

function shopping(budget){
    if(budget > 100){
        return "Banana Republic";
    } 
    else if(budget > 50){
        return "Gap";
    }
    else return 'Old Navy';
}

console.log(shopping(23));
console.log(shopping(2400));
console.log(shopping(62));

/*5. Create a function named bouncer which takes two number parameters, age, cover.
If the age is greater than or equal to 21 AND if the cover is greater than or equal to 10, return 'Please enter'
If not, return 'Sorry buddy'
*/

function bouncer(age, cover){
    if(age >= 21, cover >= 10){
        return 'Please enter';
    }
    else return 'Sorry buddy';
}

console.log(bouncer(23, 30));
console.log(bouncer(44, 3));

/*6. Create a function named even which takes a number parameter num.
If the number is even, it'll return true. 
If not, it'll return false.
*/

function even(num){
    if(num % 2 ===0){
        return true;
    }
    else return false;
}
console.log(even(5));
console.log(even(88));

//Loops allow you to do the same action(s) on every item in a list

//1. Create a for loop that will print number 0 - 10

for(let i = 0; i < 11; i++){
    console.log(i);
}


//2. Create a for loop that will iterate and print each element in the array below.

let cookies = ['peanut butter', 'chocolate chip', 'almond', 'oreos', 'lemon'];

for(let i = 0; i < cookies.length; i++){
    console.log(cookies[i]);
}

/*3. Create a for loop that will iterate each element in the array and print the following:
Player 0 is Tatum.
Player 1 is Hardaway.
Player 2 is Leonard.
Player 3 is Paul.
Player 4 is Webber.
Player 5 is Kidd.
*/

let players = ['Tatum', 'Hardaway', 'Leonard', 'Paul', 'Webber', 'Kidd'];

for(let i=0; i < players.length; i++){
    console.log('Player ' + i + ' is ' + players[i]);
}

//4. Create a for loop that will push 20 odd numbers to the oddNum array. Start from 1. 

let oddNum = [];

for(let i = 1; i < 41; i++){
    if(even(i) === false){
        oddNum.push(i)
    }
}
console.log(oddNum);

//5. Create a for loop that will push all even indexed rappers to the eastSide array and odd indexed rappers to the westSide array.

let rappers = ['DMX', 'Snoop', 'Jay-Z', 'Dre', 'Nas', 'Tupac', 'Biggie', 'Ice Cube', 'Ghostface Killah', 'Nipsey Hussle'];
let eastSide = [];
let westSide = [];

for(let i = 0; i < rappers.length; i++){
    if(even(i) === true){
        eastSide.push(rappers[i]);
    }
    else westSide.push(rappers[i]);
}
console.log(eastSide);
console.log(westSide);

//6. Create a for loop that will sum up numbers from 1 to 100 and store the value in the sum variable.

let sum = 0;

for(i = 1; i < 101; i++){
    sum = sum + i;
}
console.log(sum);

/*7. Create a for loop that will print numbers from 0 to 60, but will print:
'Purple' if the number is divisible by 3
'Maia' if the number is divisible by 5
'Purple Maia' if the number is divisible by both 3 and 5
*/

for(i = 0; i < 61; i++){
    if(i % 15 === 0){
        console.log(i + ' Purple Maia');
    }
    else if(i % 3 === 0){
        console.log(i + ' Purple');
    }
    else if(i % 5 === 0){
        console.log(i + ' Maia');
    }
    else console.log(i);
}
