const alphas = "abcdefghijklmnopqrstuvwxyz".split("");
const alphasUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "1234567890".split("");
const others = "`~!@#$%^&*()-_=+[{]};:,<.>/?".split("");
document.getElementById("submitBtn").addEventListener("click", function(event) {
    let passwordBank = [];
  let curPassword = [];
  let charLen = document.getElementById("charLen").value;
  let specialChar = document.getElementById("specialChar").checked;
  let numChar = document.getElementById("numChar").checked;
  let lowChar = document.getElementById("lowChar").checked;
  let upChar = document.getElementById("upChar").checked;
  console.log(charLen, specialChar, numChar, lowChar, upChar);
  
  if (specialChar === true) {
      passwordBank.push(others);
    }
    if (numChar === true) {
        passwordBank.push(numbers);
    }
    if (lowChar === true) {
        passwordBank.push(alphas);
    }
    if (upChar === true) {
        passwordBank.push(alphasUp);
    }
    console.log(curPassword)
    for (let i = 0; i < charLen; i++) {
        let char = passwordBank[Math.floor(Math.random() * passwordBank.length)];
        curPassword.push(char[Math.floor(Math.random() * char.length)]);
    }
    document.getElementById("passwordArea").innerHTML = curPassword.join("");
    document.getElementById("charLen").value = "";
    document.getElementById("specialChar").checked = false;
    document.getElementById("numChar").checked = false;
    document.getElementById("lowChar").checked = false;
    document.getElementById("upChar").checked = false;
});
// howdy