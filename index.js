let homeScore = 0
let guestScore = 0
const scoreElements = document.getElementsByClassName("score")

function updateScore(team, value) {
    if (team === "home") {
        homeScore += value
        scoreElements[0].textContent = homeScore
    } else if (team === "guest") {
        guestScore += value
        scoreElements[1].textContent = guestScore
    }
}