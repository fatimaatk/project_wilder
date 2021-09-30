darkMode = () => {
    const checkContent = document.getElementById('js-mode');
    if (checkContent.innerHTML === "Dark Mode") {
        checkContent.innerHTML = "Light Mode";
    }
    else {
        checkContent.innerHTML = "Dark Mode";
    }
}