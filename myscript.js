/*console.log("Log message");
console.error("Error message");
console.warn("Warning message");
console.info("Information message");

var x;//undefined
document.write(x);
document.write("<br>");
var myname;//declaration
myname = "PREETish";//initialization
document.write(myname);
var x = 100,y =200;
var z = x+y;
document.write("Addition : "+z);
var p = x-y;
document.write("<br>")
document.write("Substraction :"+p);
document.write("<br>");
document.write("Multiplication :"+(x*y));
document.write("<br>");
document.write("Division :"+(x/y));
document.write("<br>");
++x;
document.write("Prefix Increment :"+x);
x++;
document.write("Postfix increment :"+x);
document.write("<br>");
--x;
document.write(x);
var firstName = "Preetish";
var lastName = "Ranjan";
var fullName = firstName+" "+lastName;
document.write(fullName);
var x = 100;
var z = x+fullName;
document.write("<br>"+z);
var x = Number("5");
var y =5;
document.write(x+y);
var temp="10";
if (temp == 100) {
    console.log(temp);
    document.writeln("Value = "+temp);
}
else
{
    document.writeln("False statement");
}
var istrue = (temp==10)?temp-20:temp;
document.writeln(istrue); 
if (temp ===10) {
    document.writeln("Equal to valueand type");
}
//Logical operators
var age =18
var gen = "M";
if ((age==18 )&&(gen=="M")) {
    document.write("Success");
}
//switch statement
var grade = "B";
switch (grade) {
    case "A":
        document.write("A grade");
        break;
    case "B":
        document.write("B grade");
        break;
    case "C":
        document.write("C grade");
        break;
    default:
        document.write("Default");
        break;
}
//loops
var x = 5;
while (x >=0) {
    //document.write(x+"<br>");
    var y = x;
    while (y>=1) {
        document.write(y+" ");
        y--;
    }
    document.write("<br>");
    x--;
}
var x = 10
do {
    document.write((10-x)+"<br>")
    do {
        document.write("<h4>"+x+"</h4>");
    } while (x>5);
    x--;
} while (x>0);
for (let i = 0; i < 15; i++) {
    
    if(i==10)
    {
        //break;
        continue;
    }
    document.write(i+"<br>");
    
}
function myfunction() {
    document.write("My function is called");
}
myfunction();
function Add(p1,p2) {
    var z = p1*p2;
    document.write(z+"<br>");
}
Add(2,2);
function second(func) {
    func();
}
second(hello);
function hello()
{
    document.write("Hello dr");
    //alert("Hello");
}
function returnSum(a,b) {
    var z = a+b;
    return z;
}
var x = returnSum(22,34);
document.write(x);*
function add(x,y) {
    return (x+y);
}
var s = add;
var sum = s(12,23);
document.write(sum+"<br>");
var isAdult = function(age){
    if (age>=18) {
        return "YES";
    } else {
        return "No";
    }
};
var stat = isAdult(23);
document.write("Is adult : "+stat);
(function MyAlert() {
    document.write("HELLO"+"<br>");
    //alert("Hello");
})();
(function AddIt(x,y) {
  document.write("Sum is " + (x+y)+"<br>");  
})(12,23);

var sum = (function Add(x,y) {
    return (x+y);
    
})(12,34);
document.write(sum);

var x = 12;
function my() {
    document.write("Global "+x+"<br>");
}
my();
document.write("Global " + x+"<br>")

function Outerfunction(x,y) {
    var d = 100;
    function Innerfunction() {
        g = 900;
        document.write("g is " + g+"<br>");
        document.write("d is " + d+"<br>");
        document.write("x is " + x+"<br>");
        document.write("y is " + y+"<br>");
    }
    Innerfunction();
}
Outerfunction(10,20);
//alert function
var stat = confirm("Are you share??");
if (stat) {
    document.write("You agreed");
} else {
    document.write("You not agreed");
}
var age = prompt("Enter your age : ");
if (age>18) {
    document.write("You are eligible.")
} else {
    document.write("You are not eligible.")
}*/

/*
primitive datatypes:
number,string,boolean,undefined,null

var x  =10;
var y = "Preetish";
var is = true;
var ss = null;
var sy = undefined;
document.write(typeof(a));

Non-primitive datatype
var emp = new Object();//object
var books = new Array();//array
var reg = new RegExp();//regular expression
var myfu = new function(){};//function type
var date = new Date();//date

var s = new String("Hello");
//creating object
var person = new Object();
person.firstName = "Preet";
person.lastName = "Ranjan";
person.age = 23;
person.fullName = function() {
    return (person.firstName + " "+ person.lastName);
}
alert(person.firstName);
alert(person["age"]);
alert(person.fullName());

function Person(fname,lname,age,height)
{
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.height = height;
    this.fullname = function(){
        return (this.firstname + " "+this.lastname);
    }
}
var yrbrother = new Person("Pradosh","Ranjan",20,5.7);
var elbrother = new Person("Tapas","Ranjan",20,5.7);
document.write(yrbrother.firstname);
document.write(elbrother.firstname);

var person = {
    firstName:"Preetish",
    lastName:"Ranjan",
    age : 23,
    height:5.7,
    fullname: function(){
        return (this.firstName + " "+this.lastName);
    }
};

document.write(person.firstName+"<br>");
document.write(person.lastName+"<br>");
document.write(person.age+"<br>");
document.write(person.height+"<br>");
document.write(person.fullname()+"<br>");

delete person.age;
document.write(person.age+"<br>");

var mycar = {
    name:"bmw",
    color:"Yellow",
    year:2018
};
var v  = "";
for(var k in mycar)
{
    v += mycar[k]+" ";
}
alert(v);
//nested objects

var person = {
    name:"Preet",
    skills:{
        skill1:"ASP.NET MVC",
        skill2:"JQUERY",
        skill3:"C#.NET",
    }
};
document.write(person.skills.skill1);
document.write(person.skills.skill2);
document.write(person.skills.skill3);

var rightnow = new Date();
document.write(rightnow+"<br>");
var dt = new Date("Sept 5 2020");
document.write(dt+"<br>");
var dtm = new Date();
document.write(dtm.getDate()+"<br>");
var day = dtm.getDay();
switch (day) {
    case 4:
        document.write("Thursday"+"<br>");
        break;
    case 5:
        document.write("Friday"+"<br>");
        break;
    case 6:
        document.write("Saturday"+"<br>");
        break;
    case 7:
        document.write("Sunday"+"<br>");
        break;
    default:
        document.write("Monday"+"<br>");
        break;
}
document.write(dtm.getDay()+"<br>");
document.write(dtm.getMonth()+"<br>");
document.write(dtm.getFullYear()+"<br>");


//Math Object
var srt = Math.sqrt(20);
document.write("Square root "+ srt+"<br>");
var min = Math.min(1,3,4,6,7,7,8,8);
document.write("Minimum value "+min+"<br>");

var max = Math.max(1,3,4,6,7,7,8,8);
document.write("Maximum value "+max+"<br>");

var random = Math.random();
document.write("Random value "+random+"<br>");

var rnd = Math.round(99.5);
document.write("Rounding Off 99.5 "+rnd+"<br>");
//pi property
var pi = Math.PI;
document.write("PI value "+pi+"<br>");

var mycolors = new Array("red","blue","violet","pink","aquamerine");

document.write(mycolors[3]+"<br>");

var mycolors = ["Blue","Pink","Cyan","Teal"];
document.write(mycolors[0]+"<br>");
mycolors[0] = "Yellow";
document.write(mycolors[0]+"<br>");

document.write(mycolors +"<br>");
document.write("Array length is "+mycolors.length+"<br>");

mycolors.sort();
document.write("sorted length is "+mycolors+"<br>");
mycolors.reverse();
document.write("reverse is "+mycolors+"<br>");
mycolors.push("RED");
document.write("New array " + mycolors+"<br>");
mycolors.pop("Pink");
document.write("Removing pink from array " + mycolors+"<br>");

var it1 = [1,2,3];
var it2 = [4,5,6];
var all = it1.concat(it2);
document.write(all+"<br>");

//loop through array

for (let i = 0; i < all.length; i++) {
    document.write("Number "+ all[i]+"<br>");
    
}

var mycars = [
    {model:"BMW",year:2020},
    {model:"Honda",year:2019},
    {model:"Volkswagan",year:2018},
    {model:"Volvo",year:2017},
    {model:"Maruti-Suzuki",year:2016},
];
for(var k=0;k<mycars.length;k++){
    var newcar = "";
    for(var m in mycars[k]){
        newcar += " " + mycars[k][m];
        
        };
        document.write(newcar+"<br>");
}
mycars.forEach()

var reg = new RegExp("preet");

var reg = /preet/;

var fullName = "preetish ranjan barik";
var stat  = reg.test(fullName);

document.write("is right " + stat+"<br>")
//function as object

var ff = new Function("a","b","return (a+b)");
var x  = ff(12,23);
alert(x);

var y = function(a,b){return (a+b)};
var x  = y(12,33);
alert(x);
//Yf1P2kUbF

var str = new String("INDIA");
document.write(str+"<br>");
var s = "ODISHA";

var myString = "This is \"vanilla\" javascript";
document.write(myString+"<br>");
document.write(myString.length+"<br>");
document.write(myString.indexOf("i")+"<br>");
document.write(myString.replace("is","are")+"<br>");
document.write(myString.toUpperCase()+"<br>");
document.write(myString.toLowerCase()+"<br>");
document.write(myString.charAt(2)+"<br>");

var n = new Number(15);
document.write("Primitive value of n "+n.valueOf()+"<br>");

var n = 56;
document.write(n+"<br>");

var num = 20+'t';
document.write(isNaN(num)+"<br>");

var m = 555;
document.write(m.toString()+"<br>")

var bol = new Boolean(true);
document.write(bol+"<br>");
document.write(bol.valueOf()+"<br>");
if (1) {//1 is true
    document.write("1 is true"+"<br>");
}
//undefined and null datatype
var x ;
document.write(x+"<br>");
var x = null;
document.write(typeof(x)+"<br>");
//windows object

var x = 100;
//alert(window.x);
function y()
{
    document.write("YYY"+"<br>");
}
window.y();
document.write("Innerwidth " +window.innerWidth+"<br>");
document.write("Innerheight " +window.innerHeight+"<br>");
document.write("Outerwidth " +window.outerWidth+"<br>");
document.write("OuterHeight " +window.outerHeight+"<br>");
//window.close();
var win = window.open("https://www.google.com","Google windows","height=800,width=600");
win.resizeBy(120,120);
win.moveTo(350,200);
function sayhello() {
    alert("Hello");
}
//var x = setTimeout(sayhello,3000);
//clearTimeout(x);

var y  = window.setInterval(sayhello,2000);
clearInterval(y);

//screen object
//history object
//document.write(history.length+"<br>");
//history.back();
//history.go(1);
//navigator object
//document.write(navigator.cookieEnabled+"<br>");
document.write(navigator.appName+"<br>"+
                navigator.appVersion+"<br>"+
                navigator.appCodeName+"<br>"+
                navigator.platform+"<br>"+
                navigator.language+"<br>"+
                navigator.javaEnabled()+"<br>");




//window.location = "http://www.google.com";
document.write(location.href+"<br>");
document.write(location.hostname+"<br>")

//document.cookie = "name=preet;expires=Thu 22 feb 2020 12:00:00 UTC";

var heading  = document.getElementById("my-heading");
document.write(heading.innerHTML+"<br>");
document.write(heading.getAttribute("id")+"<br>");
document.write(heading.tagName+"<br>");
var para = document.getElementsByClassName("my-para");//node list
document.write(para[0].innerHTML);
for(var i = 0;i<para.length;i++)
{
    document.write(para[i].innerHTML+"<br>");
}
var ulelements = document.getElementsByTagName("ul");
for(var i =0;i<ulelements.length;i++)
{
    document.write(ulelements[i].innerHTML+"<br>");
}
var elli = ulelements[1].getElementsByTagName("li");
for(var i=0;i<elli.length;i++)
{
    document.write(elli[i].innerHTML+"<br>");
}
var mypara = document.querySelector("p");
document.write(mypara.innerHTML);

var d = document.querySelector("#my-heading");
document.write(d.innerHTML);

var all  = document.querySelectorAll("div p");
for(var i=0;i<all.length;i++)
{
    document.write(all[i].innerHTML+"<br>");
}

var list = document.getElementsByTagName("ul")[0];
document.write("Node name " + list.nodeName+"<br>");

var parent = list.parentNode.nodeName;
document.write("Node name " + parent+"<br>");

var ulnodes = list.childNodes;
for(var i=0;i<ulnodes.length;i++)
{
    if(ulnodes[i].nodeType == 1)
    document.write(ulnodes[i].innerHTML+"<br>");
}
ulnodes.firstChild();lastChild();
previoudSibliings,nextSiblings

var list = document.getElementById("mylist2");
var item = document.createElement("li");
var text = document.createTextNode("This is the new item");
item.appendChild(text);
//list.appendChild(item);
var it = document.getElementById("item4");
it.parentNode.insertBefore(item,it);


var imel = document.getElementsByTagName("img")[0];
imel.src = "azure.jpg";

var el = document.getElementById("my-heading");
el.className = "myp";
//removeAttribute();

function()
{

    var imgel = document.getElementById("myimg");
    var imgtop = 0;
    var imgleft =450;

    setInterval(moveImage,10);

    function moveImage() {
        if(imgtop < 270 && imgleft==450)
        {
            imgtop++;
            imgel.style.top = imgtop+"px";
        }
        else if(imgleft<720 && imgtop==270)
        {
            imgleft++;
            imgel.style.left = imgleft+"px";
        }
        else if(imgtop>0)
        {
            imgtop--;
            imgel.style.top = imgtop+"px";
        }
        else if(imgleft>450)
        {
            imgleft--;
            imgel.style.left = imgleft+"px";
        }

    }

}

var btn = document.getElementById("btnel");
//btn.onclick = function()
//{
 //   btn.className = "btn btn-danger";
//};
function changebutton() {
    btn.style.fontSize = "45px";
}
btn.addEventListener("click",changebutton);
//btn.addEventListener("click",function(){alert("Hello")});

//btn.removeEventListener("click",changebutton);


var addevent = function(el,type,func){
    if(typeof(addEventListener) !== "undefined")
    {
        el.addEventListener(type,func);
    }
    else if(typeof(attachEvent) !== "undefined")
    {
        el.attachEvent("on"+type,func);
    }
    else{
        el["on"+type] = func;
    }

};


try {
    call();
} catch (error) {
    //alert(error);
}

var x  = "test";
try {
    if(isNaN(x))
    {
        throw("Not a number");
    }
} catch (error) {
    alert("Error : " + error);
}
finally
{
    document.write("Finally block");
}*/
"use strict";
x = 10;
alert(x);


