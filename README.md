# Validate-IBAN
Use this module for validating your iban.

It is a console-app for only validating TR (Turkey) and GB (United Kingdom) iban numbers.

# How to Use 

$ npm install validate-iban

-- Create a .js file and write these lines.

const iban = require("validate-iban");
console.log(iban.validate('GB 82 WEST 123456 98765432'));

$ node filename.js 