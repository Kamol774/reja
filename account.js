const moment = require('moment');

class Account {
  #amount;
  #account_id;

  constructor(name, amount, account_id) {
    this.name = name,
    this.#amount = amount,
    this.#account_id = account_id;
  }

  tellMeBalance() {
    console.log(`Sizning hisobingizdagi qoldiq ${this.#amount}$`);
    return this.#amount;
  }

  withdrowMoney(amount) {
    if (this.#amount > amount) {
      this.#amount -= amount;
      console.log(`Hisobingizdan ${amount}$ yechib olindi va hisobingiz joriy holati ${this.#amount}$`);
    } else {
    console.log(`Sizning hisobingizda mablag' yetarli emas. Joriy balansingiz: ${this.#amount}$`);
    }
  }

  makeDeposit(amount) {
    this.#amount += amount;
    console.log(`Hisobingiz ${amount}$ ga to'ldirildi. Joriy balansingiz ${this.#amount}$`);
  }

  giveMeDetails() {
    console.log(`Salom hurmatli ${this.name}, sizning balansingizda ${this.#amount}$ mavjud`);
    console.log("Sizning hisob raqamingiz:", this.#account_id);
  }

  static tellMeAboutClass() {
    console.log("Bu class account larni yasash uchun xizmat qiladi");
  }

  static tellMeTime() {
    console.log(`Hozirgi vaqt ${moment().format("HH:mm:ss")}`);
  }
}

module.exports = Account;