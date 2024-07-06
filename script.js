const baseUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropDownS = document.querySelectorAll(".dropdown select");


for(let select of dropDownS){
    for (currCode in countryList) {
        let allOptions = document.createElement("option");
        allOptions.innerText = currCode;
        allOptions.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            allOptions.selected = "selected"
        }
        else if (select.name === "to" && currCode === "INR") {
            allOptions.selected = "selected"
        }
        select.append(allOptions);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

let updateFlag = (flag) => {
    let currCode = flag.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let flagImg = flag.parentElement.querySelector("img");
    flagImg.src = newSrc;
}

