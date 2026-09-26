export class Player {
    constructor(name) {
      this.name = name
      this.level = 1
      this.expPoints = 0
      this.expRequired = 100
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
}

const player1 = new Player("Andre")
console.log(player1.info())
player1.gainExp(70)
console.log(player1.info()) // It's in Level 1 yet!
player1.gainExp(100) // Player reached Level 2
player1.gainExp(500) // Player reached Level 2

