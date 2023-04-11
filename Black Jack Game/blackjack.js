var cardsInfo=document.getElementById("cards");
var sumel=document.getElementById("sum");
var message=document.getElementById("message");
const newcard = document.getElementById("newcard");
const start = document.getElementById("start");
let isAlive=true
let hasBlackJack=false
let sum=0
let cards=[]
function blackJack()
{
    if(sum===0)
    {
        let val1=getRandomNumber()
        let val2=getRandomNumber()
        cards.push(val1)
        cards.push(val2)
        sum+=val1+val2
    }
    newcard.style.backgroundColor="rgb(38, 225, 38)";
    start.style.backgroundColor="rgb(230, 85, 85)";
    var msg="";
    sumel.textContent="Sum :"+sum;
    cardsInfo.textContent="Cards :"
    for(let i=0;i<cards.length;i++)
    {
        cardsInfo.textContent+=cards[i]+" "
    }
    if(sum<=20)
    {
        msg="Draw new card ";
    }
    else if(sum===21)
    {
        msg="You got black jack 🥳!!";
        hasBlackJack=true
        isAlive=false
        play.style.backgroundColor="rgb(38, 225, 38)"
        newcard.style.backgroundColor="rgb(230, 85, 85)";
    }
    else
    {
        msg="You're out of the game !!";
        isAlive=false
        play.style.backgroundColor="rgb(38, 225, 38)"
        newcard.style.backgroundColor="rgb(230, 85, 85)";
    }
    message.textContent=msg;
}
function getRandomNumber()
{
    return Math.floor(Math.random()*10)+1
}
function newCard()
{
    if(isAlive && !hasBlackJack && sum!=0)
    {
        var newcard=getRandomNumber()
        cards.push(newcard)
        console.log(cards)
        sum+=newcard
        blackJack()
    }

}
function playAgain()
{
    if(!isAlive)
    {
        window.location.href="blackjack.html";
    }
}