const countMoney = money => {
  const newMoney = money.reduce((a,b) => a + b);
  availableMoney.textContent =  `${newMoney}zł`
}
