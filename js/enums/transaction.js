class Transaction {
  static Income = new Transaction('[ + ] Przychód');
  static Shopping = new Transaction('[ - ] Zakupy');
  static Food = new Transaction('[ - ] Jedzenie');
  static Bills = new Transaction('[ - ] Rachunki');

  constructor(name) {
    this.name = name;
  }
}
