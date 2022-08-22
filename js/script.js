const playerList = [];

function displayPlayer(player){
    
    const playerNameList = document.getElementById('player-list');
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
}

function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    const playerSelectBtn = document.querySelectorAll('select-btn');
    const playerObj = {
        playerName: playerName
    }
    playerList.push(playerObj);
    displayPlayer(playerList);


}