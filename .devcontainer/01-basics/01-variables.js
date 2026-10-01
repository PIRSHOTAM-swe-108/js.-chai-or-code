const accountId =123355
let accoountEmail = "pirshi.google.com"
var accountPassword = 12456
accountCity = "hyderabad"
// accountId =12343 // not allowed once decalred as constant 
console.log(accountId);
console.log(accoountEmail);
console.log(accountCity);
console.log(accountPassword);
/*
prefer not to use var because
of issue in block scope and functiona scope
*/
let accountState; /*if variable is just decalared and have not assigned value
then it considerd as undefined by javascript*/
console.table([accoountEmail,accountId,accountPassword,accountCity,accountState]);