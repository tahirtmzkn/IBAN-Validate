module.exports.validate = function (iban) {
  // Convert to uppercase and remove spaces
  iban = iban.toString();
  iban = iban.toUpperCase().replace(/ /g, '');
  console.log(iban);
  countryCode = iban.substring(0, 2);
  length = iban.length;
  isNum = /^\d+$/.test(iban.substring(2));

  // Check if the IBAN is valid
  if (countryCode == 'TR' && length == 26 && isNum)
    return true;
  else if (countryCode == 'GB' && length == 22 && (/^\d{2}([A-Z0-9]{4}\d{14})/.test(iban.substring(2)))) {

    // Move the first four characters to the end of the string
    const check_digits = iban.substring(2, 4);
    iban = iban.substring(0, 2) + ['00'] + iban.substring(4);
    const rearrangedIban = iban.substring(4) + iban.substring(0, 4);

    // Convert letters to digits (A=10, B=11, ...)
    const digits = [];
    for (let i = 0; i < rearrangedIban.length; i++) {
      const charCode = rearrangedIban.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        digits.push(charCode - 65 + 10);
      } else {
        digits.push(rearrangedIban.charAt(i));
      }
    }
    const numericIban = digits.join('');
    const res = Number(BigInt(98) - (BigInt(numericIban) % BigInt(97)))
    
    // Validating IBAN
    if ((res.toString() != check_digits) && BigInt(numericIban) % BigInt(97) != BigInt(1) )
      return false;
    else
      return true;
  }
  else
    return false;
};