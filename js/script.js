const playerList = [];

const playerNameList = document.getElementById('player-list');

function displayPlayer(player){
    playerNameList.innerText = '';
    for (let i = 0; i < player.length; i++) {
        const playerSingleName = player[i].playerName;
        const li = document.createElement('li');
        li.innerText = `${playerSingleName}`;
        if (i <= 4) {
            playerNameList.appendChild(li);
        }else {
            alert('You can not select more than 5 Players');
        }      
    }
    return playerNameList;
}
console.log(playerNameList);


function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    const playerSelectBtn = document.querySelectorAll('select-btn');
    const playerObj = {
        playerName: playerName
    }
    playerList.push(playerObj);
    displayPlayer(playerList);

}


// Players Expense Calculate

document.getElementById('per-player-expense').addEventListener('click', function(){
    const perPlayerAmountField = document.getElementById('perPlayer-amount');
    const perPlayerAmountString = perPlayerAmountField.value;
    const perPlayer = parseFloat(perPlayerAmountString);
    console.log(displayPlayer(playerList));
})