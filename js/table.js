// add more row under Setting Parameters
                                    

function addRow() {
    var newRow = document.getElementById('addMoreRowsParameters').insertRow();
    var cells = [];

    // Array of custom classes for each cell
    var cellClasses = ['class1', 'enter-value', 'description', 'flex-switch-check', 'enter-value'];

    for (var i = 0; i < 5; i++) {
        cells[i] = newRow.insertCell(i);
        cells[i].classList.add(cellClasses[i]); // Add a different custom class to each <td>
    }

    cells[0].innerHTML = '<td class="your-custom-class"><input type="text" class="form-control"></td>';
    cells[1].innerHTML = '<td class="your-custom-class"><input type="number" class="form-control cost-value" placeholder="10"></td>';
    cells[2].innerHTML = '<td class="your-custom-class"><div class="info-text"><p>Your description here</p><span data-bs-toggle="modal" data-bs-target="#exampleModal" title="Read More"><i class="fa fa-info-circle"></i></span></div></td>';
    cells[3].innerHTML = '<td class="your-custom-class"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked=""><label class="form-check-label" for="flexSwitchCheckChecked"></label></div></td>';
    cells[4].innerHTML = '<td class="your-custom-class"><div class="form-group"><input type="number" class="form-control" placeholder="Value" max="100" required=""></div></td>';
}

// function deleteRow() {
//     var table = document.getElementById('addMoreRowsParameters');
//     if (table.rows.length > 1) {
//         table.deleteRow(-1);
//     }
// }


// 

function toggleTable() {
    var table = document.getElementById("table-data-1");
    if (table.style.display === "none") {
        table.style.display = "block";
    } else {
        table.style.display = "none";
    }
}