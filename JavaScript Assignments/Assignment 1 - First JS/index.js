
/* 1- Write a program that allow to user enter number then print it */
var userNumb = Number(window.prompt("Enter a number(input)"));
console.log(userNumb);

/* 2- Write a program that take number from user then print yes if that number can divide by 
3 and 4 otherwise print no */
var userNumb2 = Number(window.prompt("Enter a number(divisible by 3 and 4)"));
if(userNumb2%3==0 && userNumb2%4==0){
    console.log("Yes");
}
else{
    console.log("No");
}

/* 3- Write a program that allows the user to insert 2 integers then print the max */
var num1 = Number(window.prompt("Enter first integer(max)"));
var num2 = Number(window.prompt("Enter second integer(max)"));
var maxNumb = 0;
if(num1 > num2){
    maxNumb = num1;
}
else if(num1 < num2){
    maxNumb = num2;
}
else{
    console.log("They are equal");
}
console.log("Max number is " + maxNumb);

/* 4- Write a program that allows the user to insert an integer then print negative if it is 
negative number otherwise print positive. */
var num3 = Number(window.prompt("Enter integer(positive or negative)"));
if(num3<0){
    console.log(num3 + " Negative");
}
else if(num3>0){
    console.log(num3 + " Positive");
}

/* 5- Write a program that take 3 integers from user then print the max element 
and the min element. */
var n1 = Number(window.prompt("Enter first integer(min & max)"));
var n2 = Number(window.prompt("Enter second integer(min & max)"));
var n3 = Number(window.prompt("Enter third integer(min & max)"));
// Initialize max and min to the first number
var maxNumber = n1;
var minNumber = n1;
// Compare with the second number
if(n2>maxNumber){
    maxNumber = n2 ;
}
else if(n2<minNumber){
    minNumber = n2;
}
// Compare with the third number
if(n3>maxNumber){
    maxNumber = n3;
}
else if(n3<minNumber){
    minNumber = n3;
}
console.log("Max number is " + maxNumber);
console.log("Min number is " + minNumber);

/* 6- Write a program that allows the user to insert integer number then 
check If a number is oven or odd  */
var evenOrOdd = Number(window.prompt("Enter integer(even or odd)"));
if(evenOrOdd%2==0){
    console.log(evenOrOdd + " even")
}
else{
    console.log(evenOrOdd + " odd")
}

/* 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant */
var char = window.prompt("Enter integer(vowel or consonant)");
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

/* 9- Write a program that allows user to insert integer then print all numbers between 1 to 
that’s number  */
var integer1 = Number(window.prompt("Enter an integer(print all numbers)"));
var allResult="";
for(var i=2; i<integer1; i++){
    allResult+=i + " ";
}
console.log(`All numbers between 1 & ${integer1} are ${allResult}`);

/* 10- Write a program that allows user to insert integer then print a multiplication table up to 12. */
var integer2 = Number(window.prompt("Enter an integer(multiplication table up to 12)"));
for(var i=1; i<=12; i++){
    var multiplicationResult = integer2*i;
    console.log(integer2 + "*" + i + " = " + multiplicationResult);
}

/* 11- Write a program that allows to user to insert number then print all even numbers 
between 1 to this number */
// var insertedNumber = Number(window.prompt("Enter an integer(print all even numbers)"));
// var evenNumbers =""
// for(var i=2; i<insertedNumber; i+=2){
//     if(i%2==0){
//         console.log("All even numbers between 1 and " + insertedNumber + " are " + i);
//     }
// }
/* BETTER WAY */
var insertedNumber = Number(window.prompt("Enter an integer(print all even numbers)"));
var evenNumbers =""
for(var i=2; i<insertedNumber; i+=2){
    if(i%2==0){
        evenNumbers += i + " ";
    }
}
console.log("All even numbers between 1 and " + insertedNumber + " are " + evenNumbers);

/* 12- Write a program that take two integers then print the power  */
var intPow1 = Number(window.prompt("Enter an integer(power)"));
var intPow2 = Number(window.prompt("Enter an integer(power)"));
var powerResult = intPow1**intPow2;
console.log("Power " + intPow1 + " of " + intPow2 + " is " + powerResult );

/* 12- Write a program to enter marks of five subjects and calculate total, average and 
percentage.  */
var numberOfSubjects = 5;
var total=0;
for( var i=1; i<=numberOfSubjects; i++){
    var marks = parseInt(prompt(`Enter marks for Subject ${i}:`));
    total+=marks;
}
var average = total/numberOfSubjects;
var percentage = (total/(numberOfSubjects*100))*100;
const result = `Total marks of subjects ${total}, average is ${average} & percentage is ${percentage}%`; 
console.log(result)

/* 13-Write a program to input month number and print number of days in that 
month. */
var month = Number(window.prompt("Enter month number: "));
var days = 0;
if (month === 2) {
    days = 28; // ignoring leap years
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30; 
} else {
    days = 31; 
}
console.log(`Number of days in ${month} are ${days}`);

/* 14- Write a program to input marks of five subjects 
Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade   */
var numOfSubjects = 5;
var totalMarks = 0; // if not initialized to 0, it will result in NaN
var maxMarks = 500
for( var i=1; i<=numOfSubjects; i++){
    var marksInput = parseInt(prompt(`Enter marks for Subject ${i}:`));
    totalMarks+=marksInput;
}
var percent = (totalMarks/maxMarks)*100;
var grade;
switch(true){
    case(percent>=90):
        grade = 'A';
        break;
    case(percent>=80):
        grade = 'B';
        break;
    case(percent>=70):
        grade = 'C';
        break;
    case(percent>=60):
        grade = 'D';
        break;
    case(percent>=40):
        grade = 'E';
        break;
    default:
        grade = 'F'
        break;
}
console.log(`Percentage is ${percent.toFixed(2)}% & grade is ${grade}`);

/* =================== USING SWITCH CASE =================== */

/* 15- Write a program to print total number of days in month */
var monthNumb = Number(window.prompt("Enter a month:"));
var totalDays;
switch (monthNumb) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        totalDays = 31;
        break;
    case 4: case 6: case 9: case 11:
        totalDays = 30;
        break;
    case 2:
        totalDays = 28; 
        break;
    default:
        console.log("Invalid month"); 
        break;
}
console.log(`Month ${monthNumb} has ${totalDays} days`);

/* 16- Write a program to check whether an alphabet is vowel or consonant */
var letter = window.prompt("Enter a letter(vowel or consonant)");
switch(letter){
    case 'a': case 'e': case 'i': case 'o': case 'u':
        console.log(`${letter} is vowel`);
        break;
    default:
        console.log(`${letter} is consonant`);
        break;
}

/* 17- Write a program to find maximum between two numbers */
var numbb1 = Number(window.prompt("Enter a number(max):"));
var numbb2 = Number(window.prompt("Enter a number(max):"));
var maxxNumber = numbb1;
switch (true) {
    case (numbb2>maxxNumber):
        maxxNumber=numbb2;
        break;
}
console.log(`Max number between ${numbb1} & ${numbb2} is ${maxxNumber}`);

/* 18- Write a program to check whether a number is even or odd */
var evenOrOddSwitch = Number(window.prompt("Enter a number(even or odd):"));
switch (true) {
    case (evenOrOddSwitch%2==0):
        console.log(`${evenOrOddSwitch} is even`)
        break;
    default:
        console.log(`${evenOrOddSwitch} is odd`)
        break;
}

/* 19- Write a program to check whether a number is positive or negative or zero */
var posOrNeg = Number(window.prompt("Enter a number(positive or negative or zero):"));
var posOrNegResult='';
switch(true){
    case(posOrNeg>0):
        posOrNegResult='positive';
        break;
    case(posOrNeg<0):
        posOrNegResult='negative';
        break;
    default:
        posOrNegResult='zero';
        break;
}
console.log(`${posOrNeg} is ${posOrNegResult}`);

/* 20- Write a program to create Simple Calculator  */
var calc1=Number(window.prompt("Enter first number(Calculator)"));
var calc2=Number(window.prompt("Enter second number(Calculator)"));
var operation=window.prompt("Enter operation(+,-,*,/,%,**)");
var resultCalc=0;
switch (operation) {
    case '+':
        resultCalc = calc1+calc2;
        break;
    case '-':
        if(calc1>calc2){
            resultCalc = calc1-calc2;
        }
        else{
            resultCalc = calc2-calc1;
        }
        break;
    case '*':
        resultCalc = calc1*calc2;
        break;
    case '/':
        resultCalc = calc1/calc2;
        break;
    case '%':
        resultCalc = calc1%calc2;
        break;
    case '**':
        resultCalc = calc**calc2;
        break;
    default:
        console.log("Invalid operation");
        break;
}
console.log(`${calc1} ${operation} ${calc2} = ${resultCalc}`);