$(document).ready(onReady);

function onReady(){
//listen for form submit click
console.log('Page is loaded');


};

function addEmployee(){
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let empId = Number($('#empIdInput').val());
    let empTitle = $('#empTitleInput').val();
    let annualSalary = Number($('#annualSalaryInput').val());


    console.log(`Add employee when clicked`);
    $('#employeeSalaries > tbody').append('<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + empId + '</td><td>' + empTitle + '</td><td>' + annualSalary + '</td><td><button id="delete" class="remove">Delete</button></td></tr>');


    //empty input
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#empIdInput').val('');
    $('#empTitleInput').val('');
    $('#annualSalaryInput').val('');

    totalMonthlyCol();

}

$('#empSubmit').on('click', function(){
    addEmployee();
});




/*
//handle click
let newEmployee={};

function addEmployee(){
    //takes in form inputs and 
    //displays them on DOM in table
    console.log('in addEmployee');
    
    let firstName = $( '#firstNameInput').val();
    let lastName = $( '#lastNameInput').val();
    let iD = $( '#idInput').val();
    let title = $( '#titleInput').val();
    let annualSalary = $( '#annualSalaryInput').val();
return console.log(newEmployee);
newEmployee ={
    firstName,
    lastName,
    iD,
    title,
    annualSalary
    
}
};
    
*/

/*function totalMonthlyCol (tableId, colNumber){
    let result = 0;
    let tableElem = window.document.getElementById(tableId);
    let tableBody = tableElem.getElementsByTagName("tbody").item(0);
    let i;
    let numRows = tableBody.rows.length;
    for (i=1; i<(numRows-1); i++){
        let thisTrElem = tableBody.rows[i];
        let thisTdElem = thisTrElem.cells[colNumber];
        let thisTextNode = Number(thisTdElem.childNodes.item(0));

        if (!isNaN(thisTextNode))
        result += thisTextNode;
    }
    return result

    }
    
let sumMonthly = totalMonthlyCol("employeeSalaries", 5);

$('#totalMonthly').append(`${sumMonthly}`);

*/

//sum 
/*
let total = 0;
function totalMonthlyCol(index) {
    let annualSalary= 
    for(salary of annualSalary){
        console.log(salary);
    };
   
}

$('#totalMonthly').append(`<p> Total: ${total} </p>`);
*/
let monthlySum;
function totalMonthlyCol(){
    $('p').empty();

let table = document.getElementById('employeeSalaries'), sumVal = 0;
for (let i = 1; i < table.rows.length; i++){
    sumVal = sumVal + parseInt(table.rows[i].cells[4].innerHTML);
}
console.log(sumVal);
monthlySum = (sumVal/12);
return  $('#totalMonthly').append('<p> Total Monthly: $'+ (Number(sumVal)/12) +'</p>');

}

$('table').on('click','tr button.remove',function(e){
    e.preventDefault();
    $(this).closest('tr').remove();
  });

//function displayTotal(){   
  //  $('#totalMonthly').append('<p>'+ (Number(sumVal)/12) +'</p>');
//}

//$('#totalMonthly').append('<p>'+ (Number(sumVal)/12) +'</p>')