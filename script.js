let users=0;
let comps=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const userc=document.querySelector("#uc");
const compc=document.querySelector("#cc")
const me=document.querySelector("#me")
const computer=document.querySelector("#computer")

const compchoice=()=>{
    let opt=["rock", "paper", "scissor"];
    let random=Math.floor(Math.random()*3)
    return opt[random];
}
const play=(choiceid)=>{ 
    userc.innerText=choiceid
    const sys=compchoice();
    compc.innerText=sys
    if(choiceid===sys){
        drawgame()
    }
    else {
        let userwin=true;
        if(choiceid==='rock'){
            userwin=sys==="paper"? false:true;
        }else if(choiceid==="paper"){
            userwin=sys==="scissor"? false: true;
        }else{
            userwin=sys==="rock"?false: true;
        }
        showwinner(userwin);
    }
}
choices.forEach((choic)=>{
    choic.addEventListener("click", ()=>{
        const choiceid=choic.getAttribute("id")
        play(choiceid)
    })
})
const drawgame=()=>{
    msg.innerText="Game Drawn Play again"
    msg.style.backgroundColor="black"
}
const showwinner=(userwin)=>{
    if(userwin){
        users+=1
        me.innerText=users;
        msg.innerText="You Win 🎉"
        msg.style.backgroundColor="green"     
    }
    else{
        comps+=1
        computer.innerText=comps;
        msg.innerText="You Lose 🥲"
        msg.style.backgroundColor="red"
        
    }
}