// JS Variables
// What is variables?- containers to store data values
// var no1=87;
// var no2=55;
// console.log(no1+no2);
// 4. Data types in JS
var str1="This is one";
var str2='This is two';

// Objects
var marks ={
    ram:12,
    harsh:98,
    harry:45
}
// console.log(marks);
// Bolleans
var a=true;
var b=false;
// console.log(a,b);
// undefined
var und;
// console.log(undefined);
// both will show undefined as we have intiated a variable which does not have any value i.e undefined
var n =null;
// console.log(n);

/*
At a very high level, there are two types of data types in JS
1. Primitive data types: undefined, null, number,string,boolean, symbol
2. Reference data types: Arrays and Objects
*/
var arr = [1,2,"String",3,4,5];
// console.log(arr)
// VM2602:1 (5) [1, 2, 3, 4, 5]

// console.log(arr[0])
// VM2677:1 1
// console.log(arr);

// Operators in JS
// Arithmetic operator are =,-,*,/
var A=13;
var B=32;
// console.log("The value a+b",A+B);

// Asignment operator
// var c=b;
// console.log(c);
// c+=2;
// console.log(c>=a);

// Logical Operators

// console.log(true && true)
// console.log(true && false)
// console.log(false && false)

// USE Alt+click for multiple cursors

// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

function avg(a,b)
{
    c=(a+b)/2;
    return c;
}
c1=avg(2,3)
c2=avg(6,87)
// console.log(c1,c2)

// Constionals in JS
// var  age=4;
// if(age>18)
// {
//     console.log("You can drink");
// }
// else{
//     console.log("You cannot");
// }
// let newarr[1,2,3,4,5,6]
// for(i=0;i<newarr.length,i++)
// {
//     console.log(newarr[i]);
// }
// newarr.foreach(function(element)){
//     console.log(element)
// }

// We will use let instead of var from now on as le is ony available till a bloack and var is old method

// const bc=0;
//bc++; --> this will through error as constant cannot be changed once declared
// let j=0;
// while(j<newarr.length){
//     console.log(arr[j]);j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length); 
// Do while runs the loop atleast once
// You can also use continue and breaks

let Myarr=[1,2,"harry","harsh",5,null,true];
// ++ ARRAY METHODS ++
// Myarr.pop();
// Myarr.push("kesh");
// console.log(Myarr);
// (7) [1, 2, 'harry', 'harsh', 5, null, 'kesh']

// Myarr.shift() //THis will remove first element and store the rest
// const newLen = Myarr.unshift("34")//This will add in the first element what you just typed and return the new element length 
// Myarr.toString() //==> will convert to array
// Myarr.sort() //==> First it will conert to string and then compare them in string ALPHABATICALLY
// console.log(newLen);
// console.log(Myarr);

//  Explore more array methods====>

// let newstr="Harsh is good boy good good Harsh";
// console.log(newstr.length)
// console.log(newstr.indexOf("harsh"))
// console.log(newstr.indexOf("good")) Will return only the first good index one by default

// console.log(newstr.slice(1,4))// will slucw the array for you

// d=newstr.replace("Harsh","kesh");// Note: only first one will be replaced
// console.log(d,newstr);

// DOM Manipulation
//==IN CONSOLE
// document
    // ON writing this we will get ==> #document
// document.location
    // Similarly ==> Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/htmlpg.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}

    // DOM Manipulation
//    let elem= document.getElementById('click');

    let elemclass= document.getElementsByClassName("container");
//     console.log(elemclass);
    //elemclass[0].style.background="yellow";
      elemclass[0].classList.add("bg-primary");
      elemclass[0].classList.add("text-success");
//    elemclass[0].classList.remove("text-success");
    tn=document.getElementsByTagName('div');
    console.log(tn);
    createdElement=document.createElement('p');
    createdElement.innerText="This is a created para";
    tn[0].appendChild(createdElement);
     
    createdElement2=document.createElement('b');
    createdElement2.innerText="This is a created bold";
    tn[0].replaceChild(createdElement2,createdElement);
    // removeChild(element); --> removes an element

    //  selecting using query
    // sel=document.querySelector('.container')
    // will return 1 element
    // sel=document.querySelectorAll('.container')
    // will return all elements


    // Events in JS
    //  function clicked(){
    //     console.log('Button was clicked');
    //  }
    // //  start window me khulne ke baad kuch karana hai
    // window.onload=function(){
    //     console.log('Document was loaded')
    // }
    // firstContainer.addeventListner('click',function(){
    //     console.log("clicked on colsole")
    // })
    // firstContainer.addeventListner('mouseover',function(){
    //     console.log("mouse on container")
    // })// "mouseout" | "mouseup"(mouse is left after clicked) | "mousedown"(when you hold the mouse click)


    // function makeing to change font on cick
    // let prevHTML=document.querySelectorAll('.container')[1].innerHTML;/*first area (container)*/
    // firstContainer.addeventListner('mouseup',function(){
    // document.querySelectorAll('.container')[1].innerHTML=prevHTML;/*storing the data */
    //     console.log("clicked on colsole");
    // })
    // firstContainer.addeventListner('mousedown',function(){
    //     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>";
    //     console.log("mouse down when container clicked");
    // })

    //Arrow functions
    //usually we write as  
    // function summ(a,b){
    //     return a+b;
    // } but now we can also write as
    // summ= (a,b)=>{
    //     return a+b;
    // }

    // SetTimeout an=bd setTime interval
    logkaro=()=>{
        document.querySelectorAll('.container')[1].innerHTML="<b> Set Interval </b>"
        console.log("I am your log after 2sec")
    }
    // setTimeout(logkaro,2000); //will make function active after 2 sec
    // setInterval(logkaro,2000); //Will make function repeat itself baar baar after 2 sec
    // clr=setInterval(logkaro,2000); //Give Id to it so that if you wanna stop the interval just pass as clearInterval(clr) && clearTimeout(clr) to cancel

    // JS Local Storage
    // localStorage.setItem('name','harry')
    // localStorage
    // localStorage.getItem('Name')
    // localStorage.removeItem('name')
    // localStorage.clear();

    // JSON
    // obj={name:"harry",length: 1,a:{this:'tha"t'}}
    // jso=JSON.stringify(obj);
    // console.log(typeof jso)
    // console.log(jso)
    // parsed=JSON.parse{`{{"name":"harry","length":1,"a":{"this":"tha\"t"}}`}
    // console.log(parsed);

    // Template Literals - Backticks(`)
    // a=34;
    // console.log(`this is my ${a}`)
