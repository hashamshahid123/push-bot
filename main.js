function getCurrentYear() {
    return new Date().getFullYear();
}


function updateYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = getCurrentYear();
    }
}


updateYear();


setInterval(updateYear, 1000);