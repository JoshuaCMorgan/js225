function makeCountry(name, continent, visited = false) {
  return {
    visited,
    name,
    continent,

    getDescription() {
      return this.name + ' is located in ' + this.continent + '.' + 
      ' I ' + (this.visited ? 'have' : "haven't") + 
      ' visted' + ' ' + this.name + '.';
    },
    
    visitCountry() {
      this.visited = true;
    },
  }
};

let chile = makeCountry('The Republic of Chile', 'South American');
let canada = makeCountry('Canada', 'North American');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');
canada.visitCountry()
console.log(chile.getDescription());
 console.log(canada.getDescription());      
 console.log(southAfrica.getDescription()); 