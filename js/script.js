const playerList = [];


function displayPlayer(player){
    const playerNameList = document.getElementById('player-list');
    playerNameList.innerText = '';
    for (let i = 0; i < playerList.length; i++) {
        const playerSingleName = playerList[i].playerName;
        const li = document.createElement('li');
        li.innerText = `${playerSingleName}`;
       
        if (i <= 4) {
            playerNameList.appendChild(li);
        }else {
            alert('You can not select more than 5 Players');
            playerList.removeAttribute('disabled');
        }
            
    }
    return;
}


function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    playerList.push(playerObj);
    displayPlayer(playerList);

}


document.getElementById('per-player-expense').addEventListener('click', function(){

    const perPlayer = inputFieldValue('perPlayer-amount');
 
    const playerNameList = document.getElementById('player-list');
    const playerNumber = playerNameList.children.length;
    
    const playersExpenses = playerNumber * perPlayer;

    const playerExpense = document.getElementById('player-expenses');
    playerExpense.innerText = playersExpenses;
})

//Total Expense Calculate

document.getElementById('calculate-total').addEventListener('click', function(){
    
    const playerExpenseString = document.getElementById('player-expenses');
    const playerExpenseNumber = parseFloat(playerExpenseString.innerText);
    
    const managerAmount = inputFieldValue('manager-amount');
    const coachAmount = inputFieldValue('coach-amount');

    const totalCost = playerExpenseNumber + managerAmount + coachAmount;

    const calculateTotalAmount = document.getElementById('calculate-total-amount');
    calculateTotalAmount.innerText = totalCost;

})

