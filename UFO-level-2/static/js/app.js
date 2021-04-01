// Level 1

// from data.js
let tableData = data;

// YOUR CODE HERE!
let tBody = d3.select("tBody");
let ufoTable = d3.select("table");

let tClass = d3.select("class", "table table-striped");
ufoTable.attr("class", "table table-striped");

function builder(ufos) {
    ufos.forEach((urows) => {
        let tRow = tBody.append("tr");
        Object.entries(urows).forEach(([key, value]) => {
            let tCol = tRow.append("td");
            tCol.text(value);
        });
    });
};

builder(tableData);

console.log(tableData);

let filterBtn = d3.select("#filter-btn");

let dateInput = d3.select("#datetime");

filterBtn.on("click", function() {
    d3.event.preventDefault();

    tBody.html("");

    let callValue = dateInput.property("value");

    console.log(callValue);

    let newTable = tableData.filter(tableData => tableData.datetime === callValue);

    console.log(newTable);

builder(newTable);
});



// Level 2

citysubmitButton.on("click", function() {
    tBody.html("");
    d3.event.preventDefault();
    console.log("You have just clicked the 'City Filter Button'.");
    let cityinputElement = cityinputField.property("value");
    console.log(cityinputElement);
        let cityinputTypeArray = data.filter(two => two.city === cityinputElement);
        console.log(cityinputTypeArray)

        cityinputTypeArray.forEach((selects) => {
            let Crow = tbody.append("tr");
            Object.entries(selects).forEach(([key,value]) => {
                let Ccell = Crow.append("td");
                Ccell.text(value);
            });
        });
});

statesubmitButton.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();
    console.log("You have just clicked the 'State Filter Button'.");
    let stateinputElement = stateinputField.property("value");
    console.log(stateinputElement);
    let stateinputTypeArray = data.filter(three => three.state === stateinputElement);
    console.log(stateinputTypeArray)

    stateinputTypeArray.forEach((selectss) => {
        let Srow = tbody.append("tr");
        Object.entries(selectss).forEach(([key,value]) => {
            let Scell = Srow.append("td");
            Scell.text(value);
        });
    });
});

countrysubmitButton.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();
    console.log("You have just clicked the 'Country Filter Button'.");
    let countryinputElement = countryinputField.property("value");
    console.log(countryinputElement);
    let countryinputTypeArray = data.filter(four => four.country === countryinputElement);
    console.log(countryinputTypeArray)

    countryinputTypeArray.forEach((selectsc) => {
        let Corow = tbody.append("tr");
        Object.entries(selectsc).forEach(([key,value]) => {
            let Cocell = Corow.append("td");
            Cocell.text(value);
        });
    });
});

shapesubmitButton.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();
    console.log("You have just clicked the 'Shape Filter Button'.");
    let shapeinputElement = shapeinputField.property("value");
    console.log(shapeinputElement);
    let shapeinputTypeArray = data.filter(five => five.shape === shapeinputElement);
    console.log(shapeinputTypeArray)

    shapeinputTypeArray.forEach((selectsh) => {
        let Shrow = tbody.append("tr");
        Object.entries(selectsh).forEach(([key,value]) => {
            let Shcell = Shrow.append("td");
            Shcell.text(value);
        });
    });
});