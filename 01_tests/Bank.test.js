const makeBank = require("./Bank.js")

test("openAccount function can create an account", () => {
  const bank = makeBank();
  const account = bank.openAccount();
  expect(account.balance()).toBe(0);
});

test("deposit function can increment account's balance", () => {
  const bank = makeBank();
  const account = bank.openAccount();
  account.deposit(12);
  expect(account.balance()).toBe(12);
});

test("deposit function can increment account's balance with multiple deposits", () => {
  const bank = makeBank();
  const account = bank.openAccount();
  account.deposit(12);
  account.deposit(12);
  expect(account.balance()).toBe(24);
})

test("withdraw function can decrement account's balance", () => {
  const bank = makeBank();
  const account = bank.openAccount();
  account.deposit(100);
  account.withdraw(19);
  expect(account.balance()).toBe(81);
})