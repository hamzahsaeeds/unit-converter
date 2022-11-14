/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("cvt-btn");
const inputEl = document.getElementById("input-el");

const sec1 = document.getElementById("sec1");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");

let meters = 0, feet = 0, liters = 0, gallons = 0, kilos = 0, pounds = 0;

function getMetersToFeet(num) {
    return (num * 3.281).toFixed(3);
}
function getFeetToMeters(num) {
    return (num / 3.281).toFixed(3);
}
function getLitersToGallons(num) {
    return (num * 0.264).toFixed(3);
}
function getGallonsToLiters(num) {
    return (num / 0.264).toFixed(3);
}
function getKilosToPounds(num) {
    return (num * 2.204).toFixed(3);
}
function getPoundsToKilos(num) {
    return (num / 2.204).toFixed(3);
}

function computeLength(num) {
    meters = getFeetToMeters(num);
    feet = getMetersToFeet(num);
}
function computeVolume(num) {
    liters = getGallonsToLiters(num);
    gallons = getLitersToGallons(num);
}
function computeMass(num) {
    pounds = getKilosToPounds(num);
    kilos = getPoundsToKilos(num);
}

function render(num) {
    let section1 = `
        <h3>Length (Meter/Feet)</h3>
        <p>${num} meters = ${feet} feet | ${num} feet = ${meters} meters</p>
    `;
    let section2 = `
        <h3>Volume (Liters/Gallons)</h3>
        <p>${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters</p>
    `;
    let section3 = `
        <h3>Mass (Kilograms/Pounds)</h3>
        <p>${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos</p>
    `;
    
    sec1.innerHTML = section1;
    sec2.innerHTML = section2;
    sec3.innerHTML = section3;
}

convertBtn.addEventListener("click", function() {
    let numberToCater = Number(inputEl.value);
    computeLength(numberToCater);
    computeVolume(numberToCater);
    computeMass(numberToCater);
    
    render(numberToCater);
})