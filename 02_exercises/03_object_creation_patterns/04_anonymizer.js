let Account = (function() {
  function getUserAccount(id, testPassword) {
    if (users[id].userPassword === testPassword) {
      return users[id];
    };
    return false;
  }

  function getRandomLetterNumber() {
    let randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randomIndex];
  }

  function anonymize() {
    let result = '';

    for (let i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }

    return result;
  }

  let users = {};

  let generateId = (function() {
    let userId = 0;
    return function() {
      userId += 1;
      return userId;
    };
  })();

  return {
    init: function(email, password, firstName, lastName) {
      this.displayName = anonymize();
      this.id = generateId();

      users[this.id] = {
        userEmail: email,
        userPassword: password,
        userFirstName: firstName,
        userLastName: lastName,
      }
      return this;
    },

    reanonymize: function(password) {
      let userAccount = getUserAccount(this.id, password);
      if (userAccount) {
        this.displayName = anonymize();
        return true
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword: function(password, newPassword) {
      let userAccount = getUserAccount(this.id, password);
      if (userAccount) {
        userAccount.userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName: function(password) {
      let userAccount = getUserAccount(this.id, password);
      if (userAccount) {
        return userAccount.userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName: function(password) {
      let userAccount = getUserAccount(this.id, password);
      if (userAccount) {
        return userAccount.userLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email: function(password) {
      let userAccount = getUserAccount(this.id, password);
      if (userAccount) {
        return userAccount.userEmail;
      } else {
        return 'Invalid Password';
      }
    },
  };
})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'foo'
console.log(fooBar.email('abc'));                  // logs 'foo@bar.com'
