const conversionRates = {
    Kbps: 1000,
    Mbps: 1000000,
    Gbps: 1000000000,

    KBps: 8000,
    MBps: 8000000,
    GBps: 8000000000,
};

const fromValue = document.getElementById("fromValue");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const resultValue = document.getElementById("resultValue");

function convertSpeed() {
    const value = Number(fromValue.value);

    if (fromValue.value === "" || value < 0) {
        resultValue.textContent = "Enter a valid value";
        return;
    }

    const valueInBits = value * conversionRates[fromUnit.value];
    const result = valueInBits / conversionRates[toUnit.value];

    resultValue.textContent = `${result} ${toUnit.value}`;
}

fromValue.addEventListener("input", convertSpeed);
fromUnit.addEventListener("change", convertSpeed);
toUnit.addEventListener("change", convertSpeed);