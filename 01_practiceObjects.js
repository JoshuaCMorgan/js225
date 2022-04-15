let invoices = {
  unpaid: [],
  paid: [],

  add: function(clientName, amountOwed) {
    let client = { 
      clientName, 
      amountOwed,
    };
    this.unpaid.push(client);
  },

  totalDue: function() {
    return this.unpaid.reduce((sum, currentClient) => {
      return sum + currentClient.amountOwed
    }, 0);
  },

  totalPaid: function() {
    return this.paid.reduce((sum, currentClient) => {
      return sum + currentClient.amountOwed;
    }, 0);
  },

  payInvoice: function(name) {
    let unpaid = [];
    this.unpaid.forEach(client => {
      if (name === client.clientName) {
        this.paid.push(client);
      } else {
        unpaid.push(client);
      };
    });
    this.unpaid = unpaid;
  },
}

invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Due North Development", 250)
invoices.add("Slough Digital", 300)
console.log(invoices.unpaid)

invoices.payInvoice("Slough Digital");
invoices.payInvoice("Due North Development");
console.log(invoices.paid);
console.log(invoices.totalPaid())
console.log(invoices.totalDue())
