darkMode = () => {
    const checkContent = document.getElementById('js-mode');
    if (checkContent.innerHTML === "Dark Mode") {
        checkContent.innerHTML = "Light Mode";
    }
    else {
        checkContent.innerHTML = "Dark Mode";
    }
}
function uppercase(str) {

let arrayStr = str.split(' ');

for (let i = 0; i < arrayStr.length; i++) {
    console.log(arrayStr[i]);
    arrayStr[i] = arrayStr[i].charAt(0).toUpperCase() + arrayStr[i].substring(1);
}
return arrayStr.join(' ');
}