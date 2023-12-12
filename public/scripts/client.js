let empDataObj = [];

function submitFormEvent(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();

    let fnameVal = document.querySelector('[data-testid="firstNameInput"]').value;
    let lnameVal = document.querySelector('[data-testid="lastNameInput"]').value;
    let idVal = document.querySelector('[data-testid="idInput"]').value;
    let titleVal = document.querySelector('[data-testid="titleInput"]').value;
    let annualsalaryVal = document.querySelector('[data-testid="annualSalaryInput"]').valueAsNumber;

    empDataObj.push({
        firstname: fnameVal,
        lastname: lnameVal,
        idname: idVal,
        titlename: titleVal,
        annsalaryname: annualsalaryVal
    })
    console.log(empDataObj)

    console.log(addUpSalary(empDataObj));

    overBudget();

    document.querySelector('#totalSalary').innerHTML = `<p>${addUpSalary(empDataObj)}</p>`
    // Find the tbody on the page so that we can append to it
    let employeeTable = document.querySelector('#employeeData');

    employeeTable.innerHTML += `
        <tr>
            <td>${fnameVal}</td>
            <td>${lnameVal}</td>
            <td>${idVal}</td>
            <td>${titleVal}</td>
            <td>${annualsalaryVal}</td>
            <td><button onclick="onDeleteRow(event)">Delete</button></td>
        </tr>
    `;
    //clear Input fields after submitting them.
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value ='');

}

function onDeleteRow(event) {
    event.target.parentElement.parentElement.remove();
}

function addUpSalary(empobj) {
    let sum = 0;
    for(let i = 0; i < empobj.length; i++) {
      // console.log(empobj[i].annsalaryname);
      sum += empobj[i].annsalaryname;   
    }
    return sum;
  };
 
function overBudget() {
    let currentBudget = addUpSalary(empDataObj);
    if (currentBudget > 20000) {
        let elementToChange = document.getElementById("foot");
        elementToChange.classList.add("redFill");
        
    }
}

