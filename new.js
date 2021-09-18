console.log ("Hello World") 

//declaring a variable,name and the value is Ridzwan
var name = "Ridzwan";

//show variable name in the console
console.log(name);

//show hello + (variable) inside the console --> + here means combining two words -> concatenation
console.log("Hello " + name );

var city = 'Johor Bahru'
console.log("hello " + city);

var a = 10;
var b = 3;
var sum = a+b;
console.log(sum);
//minus - 
var minus = a-b;
console.log(minus);
//product *
var product = a*b;
console.log(product);
//division /
var division = b/a;
console.log(division);
//modulo %
var modulo = b % a ;
console.log(modulo);

//conditional
var hungry = true;
var sleep = false;

if (hungry == true) {
  console.log ("lets have dinner");
}
else {
  console.log (" wait until class finish")
}
 //conditional age
var age = 19;

if (age < 18) {
  console.log ("cannot enter");
}
else {
  console.log (" can enter");
}

if (age < 15) {
  console.log ("cannot enter");
}
else if (age <18) {
  console.log (" can enter with parent");
}
else {
  console.log("can enter");
}

//use modulo
var number= 18;
if (number % 2 == 0) {
  console.log (" this is even number");
}
else {
  console.log ("this is odd number");
}

//tiicket price

var price = 120;
var passengerAge = 43;

if (passengerAge < 19) {
  var discount = price * 0.5;
  console.log (" price is " + discount);
}
else if (passengerAge <41)  {
  console.log (" price is " + discount);
}
else if (passengerAge < 66) {
  var discount = price * 0.75; 
  console.log ("price is " + discount);
}
else {
  var discount = price * 0.5;
  console.log (" price is " + discount)
}

//iteration
//dari (from) ; until ; every iteration add by 1
for (var i = 0; i < 10; i++) {
  console.log(i);
}
//dari ; from 10 ; until or sehingga 0 , iteration remove by 1
for (var i = 10; i > 0; i--) {
  console.log(i);
}

// dari from 1 until 10, everi iteration i will add by 2
for (var i = 1; i< 10; i+=2) {
  console.log (i);
}

//siti sifir 
var multiplier = 7;
var lines = 12;

//dari 1, sehingga 13(lines + 1) , tambah 1
for ( var i = 1; i < lines+1 ; i++ ) {
  console.log (i + " x " + multiplier + " = " + multiplier * i) ;
}


//selasa , 14 ogos
//soalan no 2
for ( var i = 1; i < 101; i++) {
  if (i % 15 == 0) {
  console.log ("FizzBuzz");
  }
  else if (i%5==0) {
    console.log("Buzz");
  }
  else if (i%3==0){
    console.log("Fizz")
  }
 else {
  console.log (i);   
 }
}

//next question
var lines = 5;
for (var i = 0; i < lines; i++) {
  for (var j = 0; j < i+1; j++) {
  document.write("#");
  }
  document.write("<br/>")
}
for (var i = 0; i < lines; i++)
  {
    for (var j = 0; j < lines - i - 1; j++) {
    document.write("#");
    }
    document.write("<br/>");
  }

//fences question
var columns = 13;
for ( var i = 0; i < columns; i++){
  for (var j = 0; j < columns; j++) {
    if (i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1) {
      document.write("#")
    }
    else {
      document.write("0")
    }
  }
  document.write("<br/>")
}
