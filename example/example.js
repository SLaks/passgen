var passgen = require('../');

var password = passgen.create();
console.log("By default, you'll get 64 alphanumeric characters in mixed case:");
console.log(password);
console.log("\n");

password = passgen.create(12);
console.log('Choose a different password length:');
console.log(password);
console.log("\n");

password = passgen.create(12, 'abc');
console.log('Choose a different alphabet from which to pick characters for the password:');
console.log(password);
