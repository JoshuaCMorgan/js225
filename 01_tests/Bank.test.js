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

test("withdraw function limits the withdraw to amount available if account contains less than the withdraw amount", () => {
  const bank = makeBank();
  const account = bank.openAccount();
  account.deposit(100);
  account.withdraw(19);
  account.withdraw(91);
  expect(account.balance()).toBe(0);
})

test("transactions function has record of every deposit and withdraw applied to it", () => {
  const bank = makeBank();
  const account = bank.openAccount();
  account.deposit(23);
  expect(account.transactions()[0]).toEqual({type: "deposit", amount: 23})
})

test("makeAccount function allows us to to create multiple accounts", () => {
  const bank = makeBank();
  const account1 = bank.openAccount();
  account1.deposit(23);
  const account2 = bank.openAccount();
  account2.deposit(13);
  expect(account1.balance()).toBe(23);
  expect(account2.balance()).toBe(13);
})

// I could do more, but I'll move on to another assignment