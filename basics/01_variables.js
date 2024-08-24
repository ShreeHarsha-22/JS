const accountId = 1 
//Const says the value cannot be changed
//System allocates memory in the name of accountId and a const type
//accountId = 2 -> not allowed
let accountEmail = "harsha@gmail.com"
accountEmail = "harsha@harsha.com"
//We use var mostly because of the issue with let
//System allocates memory in the name of accountId and a let type
var accountPassword = "1"
accountPassword = "2"
//We don't use var -> why? - scope is a problem -> what scope? -> block scope, functional scope
//If we use var, due to the scope, it changes the original value everytime
//This gave rise to *let*
//System allocates memory in the name of accountId and a var type
accountCity = "Vijayawada"
accountCity = "Hyderabad"
//What about above 2 statements? -> by default JS reserves memory and gives to the var name
let accountState // -> This is also fine, But this gives the output as undefined because we haven;t assigned a value
//console.log(accountId); -> TypeError: Assignment to constant variable.
console.log(accountId); // Output -> 1
//It's hard to write console.log() everytime, so is there a solution? - Yes - console.table()
/*NOTE: Don't use var -> issue -> block and functional scope*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
