let Account = {
  reanonymize(string) {
    //code
  },

  resetPassword() {},

  firstName() {},

  lastName() {},

  email() {},

  displayName() {},

  init(email, password, firstName, lastName) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = "abcdefghijklmnop"
  },
};

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');

console.dir(fooBar);