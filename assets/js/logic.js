document.getElementById('submitBtn').addEventListener('click', function(event) {
    let charLen = document.getElementById('charLen').value;
    let specialChar = document.getElementById('specialChar').checked;
    let numChar = document.getElementById('numChar').checked;
    let lowChar = document.getElementById('lowChar').checked;
    let upChar = document.getElementById('upChar').checked;
console.log(charLen, specialChar, numChar, lowChar, upChar);

})
