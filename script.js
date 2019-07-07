function checkUpperCase() {
    let ex = /^[A-Z]/;
    let str = document.getElementById('str').value;
    let result = ex.test(str);
    if (result) document.getElementById('result').innerHTML = 'The first letter of string is uppercase';
    else document.getElementById('result').innerHTML = 'The first letter of string is not uppercase';
}