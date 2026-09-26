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

// Creating some teams and players
const team1 = new Team("Red")
const team2 = new Team("Blue")

const player1 = new Player("Peter")
const player2 = new Player("Steve")
const player3 = new Player("Tony")
const player4 = new Player("Scott")

// Adding players to teams
team1.addPlayer(player1)
team1.addPlayer(player3)
team2.addPlayer(player2)
team2.addPlayer(player4)

// Showing the members of the teams
console.log("Members of team " + team1.teamName + " are " + team1.players.map(player => player.name).join(", "))
console.log("Members of team " + team2.teamName + " are " + team2.players.map(player => player.name).join(", "))

// Removing a member of team Red
team1.removePlayer(player1)
console.log("Members of team " + team1.teamName + " are " + team1.players.map(player => player.name).join(", "))
