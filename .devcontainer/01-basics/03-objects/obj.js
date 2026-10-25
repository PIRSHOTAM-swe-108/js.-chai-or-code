//single ton 
//object literals
const jsUser ={
    name :"pirshu",
    age:20,
    location:"hyderabad",
    email :"poorani@gmil.com",

}
// console.log(jsUser["email"])
// console.log(jsUser.locatioin)
jsUser.greeting = function(){
    console.log("heloo js user");
}
console.log(jsUser.greeting());
jsUser.greetingTwo = function(){
    console.log('heloo jsuser, ${this.name}');
}
console.log(jsUser.greetingTwo());