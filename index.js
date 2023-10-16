let heroi = "Lord Felipe"
let expHeroi = 5265
let expFerro = expHeroi <= 1000
let expBronze = expHeroi >= 1001 && expHeroi <= 2000
let expPrata = expHeroi >= 2001 && expHeroi <= 5000
let expOuro = expHeroi >= 5001 && expHeroi <= 7000
let expPlatina = expHeroi >= 7001 && expHeroi <= 8000
let expAscendente = expHeroi >= 8001 && expHeroi <= 9000
let expImortal = expHeroi >= 9001 && expHeroi <= 10000
let expRadiante = expHeroi >= 10001
let nivelHeroi = expHeroi/100

switch (expFerro){
    case true:
        console.log("O Herói de nome " + heroi + " está no nível Ferro")
}
switch (expBronze){
    case true:
        console.log("O Herói de nome " + heroi + " está no nível Bronze")
}
switch (expPrata){
    case true:
        console.log("O Herói de nome " + heroi + " está no nível Prata")
}
switch (expOuro){
    case true:
        console.log("O Herói de nome " + heroi + " está no nível Ouro")
}
switch (expPlatina){
    case true:
        console.log("O Herói de nome " + heroi + " está no nível Platina")
}
switch (expAscendente){
    case true:
        console.log("O Herói de nome " + heroi + " está no nível Ascendente")
}
switch (expImortal){
    case true:
        console.log("O Herói de nome " + heroi + " está no nível Imortal")
}
switch (expRadiante){
    case true:
        console.log("O Herói de nome " + heroi + " está no nível Radiante")
}