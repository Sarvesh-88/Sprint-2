const expenseForm = document.getElementById('expenseForm');

let oldExpense=0;
let expensesArray = [];
expenseForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    
    document.getElementById('error-msg').innerText="";



    let salary=document.getElementById('salaryInput').value;
    let finalSalary=Number(salary);

    let expenses=document.getElementById('expense').value;
    let expense=Number(expenses);

    let expenseType=document.getElementById('expensetype').value.trim();

    if (salary === "" || expenses === "" || expenseType === "") {
        document.getElementById('error-msg').innerText = "Warning:  No field should be empty";
        return; 
    }

    if (finalSalary < 0 || expense < 0) {
        
       
        document.getElementById('error-msg').innerText = "Warning: Please enter a positive value!";
        
    

        return; 
    }
    
    let newArray=
        {id:Date.now(),Name:expenseType,Amount:expense };
    expensesArray.push(newArray);
    
    oldExpense=oldExpense+expense;
    
    let restsalary=finalSalary-oldExpense;
    if(restsalary<=0)
        document.getElementById('error-msg').innerText = "Warning: Your balance is zero";

   
    document.getElementById('displaySalary').innerText = finalSalary;
    document.getElementById('displayTotalExpenses').innerText = oldExpense;
    document.getElementById('displayBalance').innerText = restsalary;

    let newLi = document.createElement('li');
    newLi.innerText=(expenseType+" = "+expense);



     let deleteBtn = document.createElement('button');
     
    deleteBtn.innerText = "Delete";
    deleteBtn.style.color = "red";


    
    
    deleteBtn.addEventListener("click", function() {
       
        newLi.remove();
        
        oldExpense=oldExpense-expense;
        restsalary=finalSalary-oldExpense;
   
        document.getElementById('displayTotalExpenses').innerText = oldExpense;
        document.getElementById('displayBalance').innerText = restsalary;        
    });

        newLi.appendChild(deleteBtn);
    let addElemnt = document.getElementById('totaldata');
    addElemnt.appendChild(newLi);

    document.getElementById('salaryInput').disabled = true;
    document.getElementById('expense').value = "";
    document.getElementById('expensetype').value = "";
        
    
    });
    
   