export class Bill {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }

  toString() {
    return `Name: ${this.name}, Amount: ${this.amount}`;
  }
}

export class Cost extends Bill {
  constructor(name, amount, type) {
    super(name, amount);
    this.type = type;
  }

  toString() {
    return `Name: ${this.name}, Amount: ${this.amount}, Type: ${this.type}`;
  }
}

export class Cycle {
  constructor() {
    this.list = [];
  }
  addCost(cost) {
    this.list = [...this.list, cost];
  }
  dailyCosts() {
    const result = this.list.filter((cost) => cost.type == "Daily");
    return result;
  }
  weeklyCosts() {
    const result = this.list.filter((cost) => cost.type == "Weekly");
    return result;
  }
  monthlyCosts() {
    const result = this.list.filter((cost) => cost.type == "Monthly");
    return result;
  }
  totalCost(){
        let result = 0;
        // Daily
        let dCosts = [];
        this.dailyCosts().forEach(element => {
            dCosts.push(element.amount);
        })
        let temp = dCosts.map(x => x*30.45);
        result += temp.reduce(function(a, b) { return a + b; }, 0);

        // Weekly
        let wCosts = [];
        this.weeklyCosts().forEach(element => {
            wCosts.push(element.amount);
        })
        temp = wCosts.map(x => x* (30.45/7));
        result += temp.reduce(function(a, b) { return a + b; }, 0);
        
        // Monthly
        this.monthlyCosts().forEach(element => {
            result += element.amount;
        })


        return `Total costs are ${result.toFixed(2)}!`;

  }
}
