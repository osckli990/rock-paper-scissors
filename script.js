
const messageBox = document.getElementById("message")

// console.log("Global scope")

let computerWeapon = "scissors"
let winner = ""
let userNameInput = ""

const askForUsersName = () => {
  console.log("askForUsersName function is running")
  // console.log("Local scope")

  messageBox.innerHTML = `
    <p>What's your name?</p>
    <input id="userNameInput" />
    <button id="sendButton">Send</button>
  `

  //We locate these DOM selectors here because the HTML elements were created in this local scope
  userNameInput = document.getElementById("userNameInput")
  const sendButton = document.getElementById("sendButton")

  //We locate the eventListener here because the DOM selectors were created in this local scope
  sendButton.addEventListener("click", () => {
    console.log("send button is clicked")
    askForUsersWeapon()
    //askForUserWeapon(nameInput) to ship the local value

  })
}

const askForUsersWeapon = () => {
  messageBox.innerHTML += `
    <p>Hi ${userNameInput.value}!</p>
    <p>What weapon would you like to pick?</p>
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
    `

  const rockButton = document.getElementById("rock")
  const paperButton = document.getElementById("paper")
  const scissorsButton = document.getElementById("scissors")

  //could also be acomplished with forEach ??
  rockButton.addEventListener("click", () => {
    console.log("rock button was clicked")
    compareWeapons("rock")

  })
  paperButton.addEventListener("click", () => {
    console.log("paper button was clicked")
    compareWeapons("paper")

  })
  scissorsButton.addEventListener("click", () => {
    console.log("scissors button was clicked")
    compareWeapons("scissors")

  })

}

const compareWeapons = (userWeapon) => {
  console.log(`compareWeapons is running with the argument ${userWeapon}`)

  if (computerWeapon === userWeapon) {
    winner = null //it's a tie
  } else if (
    (userWeapon === "rock" && computerWeapon === "scissors") ||
    (userWeapon === "scissors" && computerWeapon === "paper") ||
    (userWeapon === "paper" && computerWeapon === "rock")
  ) {
    winner = "user" //User wins
  } else {
    winner = "computer" //Computer wins
  }

  console.log("Winner:", winner)
}

askForUsersName()
