const addTransactionPanel = document.querySelector('.add-transaction-panel');
const addTransactionBtn = document.querySelector('.add-transaction');
const deleteAllBtn = document.querySelector('.delete-all');


const showPanel = () => {
  addTransactionPanel.style.display = 'flex';
}


const deleteTransaction = id => { // ta funkcja jest wywoływana w htmlu gdzie została dopisana do przycisku funkcją onclick
  const transactionToDelete = document.getElementById(id); // pobiera całego diva o classie transaction i przypisanym do niego id
  const transactionAmount = parseFloat(transactionToDelete.childNodes[3].innerText); // parsując stringa do liczby do 2 cyfry po przecinku dospiujamy tę wartośc do transactionAmount (childNodes[3] odwołuje się do tablicy o indexie 3 w którym podana jest wartość właśnie tej  kwoty, którą chcemy sparsować)
  const indexOfTransaction = moneyArray.indexOf(transactionAmount); // kwota jaka została wpisana jest wyszukiwana w tablicy moneyArray i jej indeks jest dopisywany do zmiennej
  moneyArray.splice(indexOfTransaction, 1); // usuń z tablicy indeks o określonym numerze

  // usuń z listy transakcji okresloną transakcję:
  transactionToDelete.classList.contains('income') ? incomeSection.removeChild(transactionToDelete) : expensesSection.removeChild(transactionToDelete);

  countMoney(moneyArray); // przelicz od nowa sumę wartości tablicy
}


const deleteAllTransactions = () => {
  incomeSection.innerHTML = '<h3>Przychód:</h3>';
  expensesSection.innerHTML = '<h3>Wydatki:</h3>';
  availableMoney.textContent = '0zł';
  moneyArray = [0];
}


addTransactionBtn.addEventListener('click', showPanel);
deleteAllBtn.addEventListener('click', deleteAllTransactions);






