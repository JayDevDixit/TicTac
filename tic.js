let turn = true    // X : True : current chance is 0
const audio = new Audio("tic.mp3")
let listX = []
let list0 = []
let winner
let victorypoint
let computer = false
allbox = document.getElementsByClassName("box")
desc = document.getElementById("status") 
b1.addEventListener("click",()=>{
    if(b1.innerHTML!="")
    return
    if(turn){
        b1.innerHTML = "X"
        listX.push(1)
        checkwinX()
    }
    else{
        b1.innerHTML = "0"
        list0.push(1)
        checkwin0()
    }
    turn = !turn
    if(winner==undefined){
    if(turn){
        desc.innerHTML = "It's X Turn."
    }
    else{
        desc.innerHTML = "It's 0 Turn."
    }
}
  
})
b2.addEventListener("click",()=>{
    if(b2.innerHTML!="")
    return
    if(turn){
        b2.innerHTML = "X"
        listX.push(2)
        checkwinX()
    }
    else{
        b2.innerHTML = "0"
        list0.push(2)
        checkwin0()

    }
    turn = !turn
    if(winner==undefined){
    if(turn){
        desc.innerHTML = "It's X Turn."
    }
    else{
        desc.innerHTML = "It's 0 Turn."
    }
}
  
})
b3.addEventListener("click",()=>{
    if(b3.innerHTML!="")
    return
    if(turn){
        b3.innerHTML = "X"
        listX.push(3)
        checkwinX()
    }
    else{
        b3.innerHTML = "0"
        list0.push(3)
        checkwin0()

    }
    turn = !turn
    if(winner==undefined){
    if(turn){
        desc.innerHTML = "It's X Turn."
    }
    else{
        desc.innerHTML = "It's 0 Turn."
    }
}
  
})
b4.addEventListener("click",()=>{
    if(b4.innerHTML!="")
    return
    if(turn){
        b4.innerHTML = "X"
        listX.push(4)
        checkwinX()
    }
    else{
        b4.innerHTML = "0"
        list0.push(4)
        checkwin0()

    }
    turn = !turn
    if(winner==undefined){
    if(turn){
        desc.innerHTML = "It's X Turn."
    }
    else{
        desc.innerHTML = "It's 0 Turn."
    }
}
  
})
b5.addEventListener("click",()=>{
    if(b5.innerHTML!="")
    return
    if(turn){
        b5.innerHTML = "X"
        listX.push(5)
        checkwinX()
    }
    else{
        b5.innerHTML = "0"
        list0.push(5)
        checkwin0()

    }
    turn = !turn
    if(winner==undefined){
    if(turn){
        desc.innerHTML = "It's X Turn."
    }
    else{
        desc.innerHTML = "It's 0 Turn."
    }
}
  
})
b6.addEventListener("click",()=>{
    if(b6.innerHTML!="")
    return
    if(turn){
        b6.innerHTML = "X"
        listX.push(6)
        checkwinX()
    }
    else{
        b6.innerHTML = "0"
        list0.push(6)
        checkwin0()

    }
    turn = !turn
    if(winner==undefined){
    if(turn){
        desc.innerHTML = "It's X Turn."
    }
    else{
        desc.innerHTML = "It's 0 Turn."
    }
}
  
})
b7.addEventListener("click",()=>{
    if(b7.innerHTML!="")
    return
    if(turn){
        b7.innerHTML = "X"
        listX.push(7)
        checkwinX()
    }
    else{
        b7.innerHTML = "0"
        list0.push(7)
        checkwin0()

    }
    turn = !turn
    if(winner==undefined){
    if(turn){
        desc.innerHTML = "It's X Turn."
    }
    else{
        desc.innerHTML = "It's 0 Turn."
    }
}
  
})
b8.addEventListener("click",()=>{
    if(b8.innerHTML!="")
    return
    if(turn){
        b8.innerHTML = "X"
        listX.push(8)
        checkwinX()
    }
    else{
        b8.innerHTML = "0"
        list0.push(8)
        checkwin0()

    }
    turn = !turn
    if(winner==undefined){
    if(turn){
        desc.innerHTML = "It's X Turn."
    }
    else{
        desc.innerHTML = "It's 0 Turn."
    }
}
  
})
b9.addEventListener("click",()=>{
    if(b9.innerHTML!="")
    return
    if(turn){
        b9.innerHTML = "X"
        listX.push(9)
        checkwinX()
    }
    else{
        b9.innerHTML = "0"
        list0.push(9)
        checkwin0()

    }
    turn = !turn
    if(winner==undefined){
    if(turn){
        desc.innerHTML = "It's X Turn."
    }
    else{
        desc.innerHTML = "It's 0 Turn."
    }
}
  
})

btn.addEventListener("click",()=>{
    computer = true
    btn.innerHTML = "Okay Boss..Playing"
})

// function computer_move(){
//     do{
//     n = Math.random()*9 +1
//     n = Math.floor(n)
//     }while(allbox[n].innerHTML!="")
//     allbox[n].innerHTML = "0"
//     list0.push(n)
//     checkwin0()
// }











golden_no = [
    [1,4,7],[2,5,8],[3,6,9],
    [1,2,3],[4,5,6],[7,8,9],
    [1,5,9],[3,5,7]
]

function checkwinX(){
    if(listX.length<3)
    return
for (gold of golden_no)
    if((listX.includes(gold[0])&&(listX.includes(gold[1])&&listX.includes(gold[2])))){
    winner = "X"
    victorypoint = gold
    console.log("won x")
    winnerFound()
    }
   checkDraw()

}

function checkwin0(){
    if(listX.length<3)
    return
for (gold of golden_no)
    if((list0.includes(gold[0])&&(list0.includes(gold[1])&&list0.includes(gold[2])))){
    winner = "0"
    victorypoint = gold
    console.log("won 0")
    winnerFound()
    }
    checkDraw()
}

function checkDraw(){
    l = listX.length + list0.length
if(winner==undefined&&l==9){
    winner = "Draw"
    desc.innerHTML = `Match ${winner}`
let j =1
    for (Box of allbox){
    Box.style.animation = "rotate 1s ease-in-out infinite"
    if(j==4||j==5||j==6)
    Box.style.zIndex = 2
    j+=1
    }
    reset()

}
}
function winnerFound(){
    console.log("winner is",winner)
    desc.innerHTML = `${winner} won the Match !`

    let i = 1
    if(winner=="X"){
        for (Box of allbox){
         if (Box.innerHTML=="X" && victorypoint.includes(i)){
             Box.style.animation = "rotate 1s ease-in-out infinite"
            //  Box.style.animation = "big  1s ease-in-out infinite alternate"
            if(i==4||i==5||i==6)
            Box.style.zIndex = 2
    
         }else{
             Box.style.animation = "resize 2s linear infinite alternate"
         }
         i+=1
        }
    } 
    i=1
    if(winner=="0"){
        for (Box of allbox){
         if (Box.innerHTML=="0" &&victorypoint.includes(i)){
             Box.style.animation = "rotate 1s ease-in-out infinite"
             if(i==4||i==5||i==6)
             Box.style.zIndex = 2 
    
         }else{
            Box.style.animation = "resize 2s linear infinite alternate"
        }
         i+=1
    }
    
    

    reset()
}
function reset(){
   
listX = []
list0 = []
    
}
}

// b1.style.animation = "rotate 1s linear infinite"

