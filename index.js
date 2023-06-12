let isalive=false;
let blackjack=false;
let sum =0;
let m;
let cards;
let check=0;
//let su = document.getElementById("s");
let su = document.querySelector("#s");
let ca = document.getElementById("c");

let player={
    name:"ak",
    chips:100
};

document.getElementById("name").textContent=player.name+" $ "+player.chips;
function start(){
    if(check==0){
        isalive=true;
        let first = rand();
        let second = rand();
        cards=[first,second]
        sum=first+second;
        render();
        check++;
    }
}


function render(){
    su.textContent="sum : "+sum;
    ca.textContent="Cards : ";
    for(let i = 0;i<cards.length; i++) {
        ca.textContent+=cards[i]+" ";
    }
    if(sum<21){
        m="Pick another card";
    }else if(sum==21){
        m="You won";
        blackjack=true; 
    }else{
        m="You lost";
        isalive=false;
    }
    document.getElementById("msg").textContent=m;
}


function newc(){
    if (isalive&&!blackjack) {
        console.log("Drawing new card out");
        let card=rand();
        sum+=card;
        cards.push(card);
        render();
    }
}

function rand(){
    let n =Math.floor(Math.random()*13+1);
    if(n==1)
        return 11;
    if(n>10)
        return 10;
    return n;
}