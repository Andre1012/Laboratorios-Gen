export class Team {
  constructor(teamName) {
    this.teamName = teamName
    this.players = []
  }

  addPlayer(player) {
    this.players.push(player)
  }

  removePlayer(player) {
    const index = this.players.indexOf(player)

    if (index !== -1) {
      this.players.splice(index, 1)
    }
  }
}


export class Player {
    constructor(name) {
      this.name = name
      this.level = 1
      this.expPoints = 0
      this.expRequired = 100
      this.inventory = []
    }
    info() {
      if (this.level == 1){
        return "\nWelcome " + this.name + " you've reached Level " + this.level + "!" +
                "\nKeep playing to increase your level" + 
                "\nYour EXP Points: " + this.expPoints
      }
      else{
        return "\n" + this.name + " has reached Level " + this.level + "!" +
                "\nYour EXP Points: " + this.expPoints
      }
    }

    gainExp(amount) {
      this.expPoints += amount
      while (this.expPoints >= this.expRequired){
        this.level ++
        this.expRequired += 100
        console.log(this.info())
      }
    }

    addItem(item) {
      this.inventory.push(item)
    }

    removeItem(item) {
      const index = this.inventory.indexOf(item)

      if (index !== -1) {
        this.inventory.splice(index, 1)
      }
    }
}

export class Item {
  constructor(name) {
    this.name = name
    this.amount = 0
  }

  increaseAmount(amount){
    this.amount += amount
  }

  decreaseAmount(amount){
    if (this.amount >= amount)
      this.amount -= amount
    }
}



// Creating some items for the player's inventory
const item1 = new Item("knife")
const item2 = new Item("gun")
const item3 = new Item("medicine")

// Quantitity of each item
item1.increaseAmount(2)
item2.increaseAmount(1)
item3.increaseAmount(6)

// Adding items to player's inventory
const player = new Player("Andre")
player.addItem(item1)
player.addItem(item2)
player.addItem(item3)

console.log("Inventory of " + player.name + ": " + player.inventory.map(item => `${item.name} [${item.amount}]`).join(", "))

// Removing an item from the player's inventory
player.removeItem(item1)
console.log("Inventory of " + player.name + ": " + player.inventory.map(item => `${item.name} [${item.amount}]`).join(", "))
