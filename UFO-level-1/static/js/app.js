// Level 1

// from data.js
let tableData = data;

// YOUR CODE HERE!

let tBody = d3.select("tBody");
let table = d3.select("table");

let tClass = d3.select("class", "table table-striped");
table.attr("class", "table table-striped");

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

