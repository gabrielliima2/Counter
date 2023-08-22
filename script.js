let ponto1 = 0
let p1 = document.body.querySelector("div#p1")
let ponto2 = 0
let p2 = document.body.querySelector("div#p2")
let w1 = document.body.querySelector("div#w1")
let win1 = 0
let w2 = document.body.querySelector("div#w2")
let win2 = 0
function lessTeam1() {
  if (ponto1 > 0) {
    ponto1 -= 1
  }
  p1.innerHTML = ponto1
}

function plusTeam1() {
  if (ponto1 < 12) {
    ponto1 += 1
  }
  p1.innerHTML = ponto1

  if (ponto1 == 12) {
    window.alert("Team 1 Win!")
    ponto1 = 0
    p1.innerHTML = ponto1

    ponto2 = 0
    p2.innerHTML = ponto2

    win1 += 1
    w1.innerHTML = win1
  }
}

function lessTeam2() {
  if (ponto2 > 0) {
    ponto2 -= 1
  }
  p2.innerHTML = ponto2
}

function plusTeam2() {
  if (ponto2 < 12) {
    ponto2 += 1
  }
  p2.innerHTML = ponto2

  if (ponto2 == 12) {
    window.alert("team 2 win!")
    ponto2 = 0
    p2.innerHTML = ponto2

    ponto1 = 0
    p1.innerHTML = ponto1
    win2 += 1
    w2.innerHTML = win2
  }
}
