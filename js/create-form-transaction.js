const nameInput = document.querySelector('#name');
const amountInput = document.querySelector('#amount');
const categorySelect = document.querySelector('#category');
const incomeSection = document.querySelector('.income-area');
const expensesSection = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.available-money');
const saveBtn = document.querySelector('.save');
const cancelBtn =document.querySelector('.cancel');

let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArray = [0];


const closePanel = () => {
  addTransactionPanel.style.display = 'none';
  clearInputs();
}

const clearInputs = () => {
  nameInput.value = '';
  amountInput.value = '';
  categorySelect.selectedIndex = 0;
}

const checkForm = () => {
  if(nameInput.value !=='' && amountInput.value !=='' && categorySelect.valueOf() !=='none') {
    createNewTransaction();
  } else {
    alert ("Uzupełnij wszystkie pola");
  }
}

const createNewTransaction = () => {
  const newTransaction = document.createElement('div');
  newTransaction.classList.add('transaction');
  newTransaction.setAttribute('id', ID);

  checkCategory(selectedCategory);

  newTransaction.innerHTML =`
  <p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
  <p class="transaction-amount">${amountInput.value} zł <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button></p>`

  amountInput.value > 0 ? incomeSection.appendChild(newTransaction) && newTransaction.classList.add('income') : expensesSection.appendChild(newTransaction) && newTransaction.classList.add('expenses');

  moneyArray.push(parseFloat(amountInput.value));
  countMoney(moneyArray);

  closePanel();
  ID++;
  clearInputs();
}

const selectCategory = () => {
  selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
}

const checkCategory = transaction => {
  switch (transaction) {
    case Transaction.Income.name:
      categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
      break;
    case Transaction.Shopping.name:
      categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
      break;
    case Transaction.Food.name:
      categoryIcon = '<i class="fas fa-hamburger"></i>';
      break;
    case Transaction.Bills.name:
      categoryIcon = '<i class="fas fa-laptop-house"></i>';
      break;
//
//  w przypadku podania innej nazwy transakcji określonej w switchu wykonaj:
//     default :
//       console.log('Invalid transaction operation. Transaction value: ' + transaction);
  }
}



saveBtn.addEventListener('click', checkForm);
cancelBtn.addEventListener('click', closePanel);
