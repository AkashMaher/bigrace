let Count;
let StartTime;
let EndTime;
let RacIter;
let RacingEnded;
let LastWinnerHorse;
let LastGameID;

let hw1 = 0
let hl1 = 5
let hw2 = 0
let hl2 = 5
let hw3 = 0
let hl3 = 5
let hw4 = 0
let hl4 = 5


let testAbi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "bids", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "horseNum", "type": "uint256" }], "name": "buyTicket", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "changeOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "finish", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "vals", "type": "uint256[]" }, { "internalType": "uint256", "name": "valSize", "type": "uint256" }, { "internalType": "bool", "name": "withdrawBalance", "type": "bool" }], "name": "getPrices", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "val", "type": "uint256" }, { "internalType": "bool", "name": "withdrawBalance", "type": "bool" }], "name": "getPrices", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "a", "type": "address" }], "name": "getPrices", "outputs": [{ "internalType": "uint256[]", "name": "result", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "horseFour", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "horseOne", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "horseThree", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "horseTwo", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "prices", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "racIter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "racingEnded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "speedUp", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "startRacing", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "timeStampStart", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "timeStampStop", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "userChoice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "winners", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "val", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
let testContract = '0x0FbA62Ec7f614cD2E2A18488bB31e70FfC59C457'

let testRace = new web3.eth.Contract(testAbi,testContract)

console.log(testRace)
async function onSpeedUp() {
    delay(3000);
    if (!account) return toastr.info('Пожалуйста, подключите свой кошелек');
    let race = await racing.methods.racingEnded().call()
    console.log(race)
    if (race == true) return toastr.info('Гонка уже завершена', 'Информация')
    let inputVal = parseFloat(document.getElementById('range-input').value * 100)
    let slideVal = parseFloat(slider.value)
    console.log(inputVal, slideVal)
    if (inputVal > slideVal) {
        mul = inputVal;
    } else {
        mul = slider.value
    }
    console.log(mul)
    let vall = 10000000000000000 * mul;
    var val = (vall).toLocaleString('fullwide', { useGrouping: false });
    console.log(val)
    await racing.methods.speedUp().send({ from: account, gasLimit: '100000', value: `${val}` })
    toastr.success('Speed Up Successfully ')
}



async function onBuy() {
    
    if (!account) return console.log('not logged in');

    let activatedFarms = await matrix.methods.ReferalsId(account).call();
    if (account === '0x2F1b87C0EE11e810b8Bf9B5D78e70D400eb3f645') activatedFarms = ['15']
    if (activatedFarms.length === 0) return; console.log(`User don't have any farm`)

    Count = `${horseNum}`;
    let vall = '50000000000000000'
    var val = (vall).toLocaleString('fullwide', { useGrouping: false });
    console.log(val)
    console.log(Count)
    await racing.methods.buyTicket(Count).send({ from: account, value: val })
        .on('transactionHash', function (hash) {
            console.log(hash);
            tnxHash = hash;
        })

    toastr.success(`You have successfully purchased ticket for horse no. ${horseNum}, <a href="https://bscscan.com/tx/${tnxHash}" target="_blank" style="color:yellow;">view on bscscan</a>`, 'SUCCESS', { timeOut: 30 * 1000, enableHtml: true, tapToDismiss: false })

}


async function finishRace() {
    if (!account) return;
    let RaceEnded = await racing.methods.racingEnded().call()
    console.log(RaceEnded)

    if (RaceEnded === true) {

    } else {
        await racing.methods.finish().send({ from: account})
            .on('transactionHash', function (hash) {
                console.log(hash);
                tnxHash = hash;
            })
            toastr.info(`processing...`)
            await delay(1000)
            toastr.success(`Great! You have finished racing, <a href="https://bscscan.com/tx/${tnxHash}" target="_blank" style="color:yellow;">view on bscscan</a>`, 'SUCCESS', { timeOut: 30 * 1000, enableHtml: true, tapToDismiss: false })
        
    }
}


// moveHorse()

async function moveHorse(){

    setInterval(async function () {
    let gameid = await racing.methods.racIter().call()
    // gameid = '1'

        const Bidhorse1 = await racing.methods.horseOne(gameid).call()
        const Bidhorse2 = await racing.methods.horseTwo(gameid).call()
        const Bidhorse3 = await racing.methods.horseThree(gameid).call()
        const Bidhorse4 = await racing.methods.horseFour(gameid).call()



        let bid1 = parseInt((web3.utils.fromWei(`${Bidhorse1}`, 'finney'))/5)
        
        console.log(bid1)

        let bid2 = parseInt((web3.utils.fromWei(`${Bidhorse2}`, 'finney'))/5)
        console.log(bid2)


        let bid3 = parseInt((web3.utils.fromWei(`${Bidhorse3}`, 'finney'))/5)
        console.log(bid3)

        let bid4 = parseInt((web3.utils.fromWei(`${Bidhorse4}`, 'finney'))/5)
        console.log(bid4)


        // bid3 = 100

        let hw11 = 0 + (bid1)
        let hl11 = 5 + (bid1)
        let hw22 = 0 + (bid2)
        let hl22 = 5 + (bid2)
        let hw33 = 0 + (bid3)
        let hl33 = 5 + (bid3)
        let hw44 = 0 + (bid4)
        let hl44 = 5 + (bid4)

        if(hw11>25 && hw11<=50){
            hw11 = parseInt(25) + parseFloat([(hw11-25)/1.5])
            hl11 = parseInt(25) + parseFloat([(hl11 - 25) / 1.5])
        } else if (hw11 >50 && hw11<=75){
            hw11 = parseInt(42) + parseFloat([(hw11 - 50) / 2])
            hl11 = parseInt(42) + parseFloat([(hl11 - 50) / 2])
        } else if (hw11 > 75 && hw11 <=100) {
            hw11 = parseInt(55) + parseFloat([(hw11 - 75) / 2.5])
            hl11 = parseInt(55) + parseFloat([(hl11 - 75) / 2.5])
        } else if (hw11 > 100 && hwll <= 145){
            hw11 = parseInt(65) + parseFloat([(hw11 - 100) / 3])
            hl11 = parseInt(65) + parseFloat([(hl11 - 100) / 3])
        } else if(hw11>145 && hw11 <= 245){
            hw11 = parseInt(80) + parseFloat([(hw11 - 145) / 10])
            hl11 = parseInt(80) + parseFloat([(hl11 - 145) / 10])
        } else if(hw11>245){
            hw11 = parseInt(90)
            hl11 = parseInt(100)
        }

        if (hw22 > 25 && hw22 <= 50) {
            hw22 = parseInt(25) + parseFloat([(hw22 - 25) / 1.5])
            hl22 = parseInt(25) + parseFloat([(hl22 - 25) / 1.5])
        } else if (hw22 > 50 && hw22 <= 75) {
            hw22 = parseInt(42) + parseFloat([(hw22 - 50) / 2])
            hl22 = parseInt(42) + parseFloat([(hl22 - 50) / 2])
        } else if (hw22 > 75 && hw22 <= 100) {
            hw22 = parseInt(55) + parseFloat([(hw22 - 75) / 2.5])
            hl22 = parseInt(55) + parseFloat([(hl22 - 75) / 2.5])
        } else if (hw22 > 100 && hwll <= 145) {
            hw22 = parseInt(65) + parseFloat([(hw22 - 100) / 3])
            hl22 = parseInt(65) + parseFloat([(hl22 - 100) / 3])
        } else if (hw22 > 145 && hw22 <= 245) {
            hw22 = parseInt(80) + parseFloat([(hw22 - 145) / 10])
            hl22 = parseInt(80) + parseFloat([(hl22 - 145) / 10])
        } else if (hw22 > 245) {
            hw22 = parseInt(90)
            hl22 = parseInt(100)
        }

        if (hw33 > 25 && hw33 <= 50) {
            hw33 = parseInt(25) + parseFloat([(hw33 - 25) / 1.5])
            hl33 = parseInt(25) + parseFloat([(hl33 - 25) / 1.5])
        } else if (hw33 > 50 && hw33 <= 75) {
            hw33 = parseInt(42) + parseFloat([(hw33 - 50) / 2])
            hl33 = parseInt(42) + parseFloat([(hl33 - 50) / 2])
        } else if (hw33 > 75 && hw33 <= 100) {
            hw33 = parseInt(55) + parseFloat([(hw33 - 75) / 2.5])
            hl33 = parseInt(55) + parseFloat([(hl33 - 75) / 2.5])
        } else if (hw33 > 100 && hwll <= 145) {
            hw33 = parseInt(65) + parseFloat([(hw33 - 100) / 3])
            hl33 = parseInt(65) + parseFloat([(hl33 - 100) / 3])
        } else if (hw33 > 145 && hw33 <= 245) {
            hw33 = parseInt(80) + parseFloat([(hw33 - 145) / 10])
            hl33 = parseInt(80) + parseFloat([(hl33 - 145) / 10])
        } else if (hw33 > 245) {
            hw33 = parseInt(90)
            hl33 = parseInt(100)
        }


        if (hw44 > 25 && hw44 <= 50) {
            hw44 = parseInt(25) + parseFloat([(hw44 - 25) / 1.5])
            hl44 = parseInt(25) + parseFloat([(hl44 - 25) / 1.5])
        } else if (hw44 > 50 && hw44 <= 75) {
            hw44 = parseInt(42) + parseFloat([(hw44 - 50) / 2])
            hl44 = parseInt(42) + parseFloat([(hl44 - 50) / 2])
        } else if (hw44 > 75 && hw44 <= 100) {
            hw44 = parseInt(55) + parseFloat([(hw44 - 75) / 2.5])
            hl44 = parseInt(55) + parseFloat([(hl44 - 75) / 2.5])
        } else if (hw44 > 100 && hwll <= 145) {
            hw44 = parseInt(65) + parseFloat([(hw44 - 100) / 3])
            hl44 = parseInt(65) + parseFloat([(hl44 - 100) / 3])
        } else if (hw44 > 145 && hw44 <= 245) {
            hw44 = parseInt(80) + parseFloat([(hw44 - 145) / 10])
            hl44 = parseInt(80) + parseFloat([(hl44 - 145) / 10])
        } else if (hw44 > 245) {
            hw44 = parseInt(90)
            hl44 = parseInt(100)
        }

        

        console.log(hw11, hl11)
        console.log(hw22, hl22)
        console.log(hw33, hl33)

        document.getElementById('horse111').style.width = `${hw11}%`
        document.getElementById('horse11').style.left = `${hl11}%`

        document.getElementById('horse222').style.width = `${hw22}%`
        document.getElementById('horse22').style.left = `${hl22}%`

        document.getElementById('horse333').style.width = `${hw33}%`
        document.getElementById('horse33').style.left = `${hl33}%`

        document.getElementById('horse444').style.width = `${hw44}%`
        document.getElementById('horse44').style.left = `${hl44}%`

    }, 1000)
}



async function ClaimAndWithdraw(){
    
    if (!account) return console.log('not logged in');

    let activatedFarms = await matrix.methods.ReferalsId(account).call();
    if (account === '0x2F1b87C0EE11e810b8Bf9B5D78e70D400eb3f645') activatedFarms = ['15']
    if (activatedFarms.length === 0) return; console.log(`User don't have any farm`);
        
    let userWinningRaces = await racing.methods.getPrices(account).call()
    let WinningRaceCount = userWinningRaces.length
    if (WinningRaceCount === '0') return console.log('no any pending winnings'), toastr.info('you have no pending winnings');
    await racing.methods.getPrices(userWinningRaces,WinningRaceCount,true).send({from:account})
        .on('transactionHash', function (hash) {
            console.log(hash);
            tnxHash = hash;
        })
    toastr.success(`You have successfully withdrawal your pending claim prizes, <a href="https://bscscan.com/tx/${tnxHash}" target="_blank" style="color:yellow;">view on bscscan</a>`, 'SUCCESS', { timeOut: 30 * 1000, enableHtml: true, tapToDismiss: false })
}




async function CheckGameStatus(){

    let text = document.getElementById("textBox-text").innerHTML;

    let RaceEnded = await racing.methods.racingEnded().call()
    console.log(RaceEnded)
    let GameId = await racing.methods.racIter().call()
    console.log(GameId)
    // RaceEnded = false
    
    if(RaceEnded==true){

        

        
            const ru1 = `Игры скачек скоро начнутся`
            const hi1 = `घुड़दौड़ का खेल जल्द ही शुरू होगा`
            const en1 = `Horse Racing Games starts soon`



            // document.getElementById('StartRace').classList.remove('noview')
            if (text === 'English') {
                document.getElementById('gameStatus').textContent = en1
            } else if (text === 'Hindi') {
                document.getElementById('gameStatus').textContent = hi1
            } else if (text === 'Русский') {
                document.getElementById('gameStatus').textContent = ru1
            }
        // document.getElementById('Claim').style.display = 'none'
        
    } if(RaceEnded==false){

        // document.getElementById('Claim').style.display = 'flex'

        var x = setInterval(async function () {

        let GameId = await racing.methods.racIter().call()
        
            let text = document.getElementById("textBox-text").innerHTML;
            // console.log(text)

        LastGameID = `${GameId-1}`
        if(GameId==='0') LastGameID = 0
 
        
        let StartTime = await racing.methods.timeStampStart(GameId).call()
        let EndTime = await racing.methods.timeStampStop(GameId).call()

        LastWinnerHorse = await racing.methods.winners(LastGameID).call()

            
            document.getElementById("WinnerHorse").textContent = `${LastWinnerHorse}`
            document.getElementById("gameidd").textContent = `${GameId}`

            // StartTime = '1655985720'
            // EndTime = '1655985900'
        
        var StartDate = new Date(StartTime * 1000).toGMTString();

        var StartcountDownDate = new Date(StartDate).getTime();

        var EndDate = new Date(EndTime * 1000).toGMTString();

        var EndcountDownDate = new Date(EndDate).getTime();
        // let currentTime = Math.floor(Date.now() / 1000).toString()

        
        // console.log(StartTime,EndTime,currentTime)

        // if(GameTime>currentTime){
            
            
                

                
                var now = new Date().getTime();


                let distance = StartcountDownDate - now
                let GameTime = EndcountDownDate - now


                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                var Gameminutes = Math.floor((GameTime % (1000 * 60 * 60)) / (1000 * 60));
                var Gameseconds = Math.floor((GameTime % (1000 * 60)) / 1000);
                

                if (seconds > 0) {
                    


                    const ru4 = `Купить билет! Гонка еще не начнется`
                    const hi4 = `टिकेट खरीद! दौड़ अभी शुरू होनी बाकी है`
                    const en4 = `Buy Ticket! Race will be yet to start`

                    if (text === 'English') {
                        document.getElementById('gameStatus').textContent = en4
                    } else if (text === 'Hindi') {
                        document.getElementById('gameStatus').textContent = hi4
                    } else {
                        document.getElementById('gameStatus').textContent = ru4
                    }


                    // document.getElementById('StartRace').style.display = 'none';
                    
                    document.getElementById('horse111').style.width = `0%`
                    document.getElementById('horse11').style.left = `5%`

                    document.getElementById('horse222').style.width = `0%`
                    document.getElementById('horse22').style.left = `5%`

                    document.getElementById('horse333').style.width = `0%`
                    document.getElementById('horse33').style.left = `5%`

                    document.getElementById('horse444').style.width = `0%`
                    document.getElementById('horse44').style.left = `5%`
                    
                    document.getElementById('BuyTicket').style.display = 'flex';
                    document.getElementById("startCountDown").textContent = minutes + ":" + seconds;
                    document.getElementById('accelarate').style.display = 'none';
                    document.getElementById('finishRace').style.display = 'none';
                }
                // Output the result in an element with id="demo"
                else if (seconds<0 && Gameseconds > 0) {

                    

                    const ru2 = `Гонка началась! Ускорьтесь, чтобы увеличить шансы на победу`
                    const hi2 = `दौड़ शुरू! जीतने की संभावना बढ़ाने के लिए तेजी लाएं`
                    const en2 = `Race Started! Speed up to increase chances of winning`

                    if (text === 'English') {
                        document.getElementById('gameStatus').textContent = en2
                    } else if (text === 'Hindi') {
                        document.getElementById('gameStatus').textContent = hi2
                    } else {
                        document.getElementById('gameStatus').textContent = ru2
                    }
                  
                    document.getElementById("startCountDown").textContent = Gameminutes +`:`+ Gameseconds;
                    document.getElementById('BuyTicket').style.display = 'none';
                    document.getElementById('accelarate').style.display = 'flex';
                    document.getElementById('finishRace').style.display = 'none';


                    let gameid = await racing.methods.racIter().call()
                    // gameid = '1'

                    const Bidhorse1 = await racing.methods.horseOne(gameid).call()
                    const Bidhorse2 = await racing.methods.horseTwo(gameid).call()
                    const Bidhorse3 = await racing.methods.horseThree(gameid).call()
                    const Bidhorse4 = await racing.methods.horseFour(gameid).call()



                    let bid1 = parseInt((web3.utils.fromWei(`${Bidhorse1}`, 'finney')) / 5)

                    // console.log(bid1)

                    let bid2 = parseInt((web3.utils.fromWei(`${Bidhorse2}`, 'finney')) / 5)
                    // console.log(bid2)


                    let bid3 = parseInt((web3.utils.fromWei(`${Bidhorse3}`, 'finney')) / 5)
                    // console.log(bid3)

                    let bid4 = parseInt((web3.utils.fromWei(`${Bidhorse4}`, 'finney')) / 5)
                    // console.log(bid4)

                    let hw11 = 0 + (bid1)
                    let hl11 = 5 + (bid1)
                    let hw22 = 0 + (bid2)
                    let hl22 = 5 + (bid2)
                    let hw33 = 0 + (bid3)
                    let hl33 = 5 + (bid3)
                    let hw44 = 0 + (bid4)
                    let hl44 = 5 + (bid4)

                    if (hw11 > 25 && hw11 <= 50) {
                        hw11 = parseInt(25) + parseFloat([(hw11 - 25) / 1.5])
                        hl11 = parseInt(25) + parseFloat([(hl11 - 25) / 1.5])
                    } else if (hw11 > 50 && hw11 <= 75) {
                        hw11 = parseInt(42) + parseFloat([(hw11 - 50) / 2])
                        hl11 = parseInt(42) + parseFloat([(hl11 - 50) / 2])
                    } else if (hw11 > 75 && hw11 <= 100) {
                        hw11 = parseInt(55) + parseFloat([(hw11 - 75) / 2.5])
                        hl11 = parseInt(55) + parseFloat([(hl11 - 75) / 2.5])
                    } else if (hw11 > 100 && hwll <= 145) {
                        hw11 = parseInt(65) + parseFloat([(hw11 - 100) / 3])
                        hl11 = parseInt(65) + parseFloat([(hl11 - 100) / 3])
                    } else if (hw11 > 145 && hw11 <= 245) {
                        hw11 = parseInt(80) + parseFloat([(hw11 - 145) / 10])
                        hl11 = parseInt(80) + parseFloat([(hl11 - 145) / 10])
                    } else if (hw11 > 245) {
                        hw11 = parseInt(90)
                        hl11 = parseInt(100)
                    }

                    if (hw22 > 25 && hw22 <= 50) {
                        hw22 = parseInt(25) + parseFloat([(hw22 - 25) / 1.5])
                        hl22 = parseInt(25) + parseFloat([(hl22 - 25) / 1.5])
                    } else if (hw22 > 50 && hw22 <= 75) {
                        hw22 = parseInt(42) + parseFloat([(hw22 - 50) / 2])
                        hl22 = parseInt(42) + parseFloat([(hl22 - 50) / 2])
                    } else if (hw22 > 75 && hw22 <= 100) {
                        hw22 = parseInt(55) + parseFloat([(hw22 - 75) / 2.5])
                        hl22 = parseInt(55) + parseFloat([(hl22 - 75) / 2.5])
                    } else if (hw22 > 100 && hwll <= 145) {
                        hw22 = parseInt(65) + parseFloat([(hw22 - 100) / 3])
                        hl22 = parseInt(65) + parseFloat([(hl22 - 100) / 3])
                    } else if (hw22 > 145 && hw22 <= 245) {
                        hw22 = parseInt(80) + parseFloat([(hw22 - 145) / 10])
                        hl22 = parseInt(80) + parseFloat([(hl22 - 145) / 10])
                    } else if (hw22 > 245) {
                        hw22 = parseInt(90)
                        hl22 = parseInt(100)
                    }

                    if (hw33 > 25 && hw33 <= 50) {
                        hw33 = parseInt(25) + parseFloat([(hw33 - 25) / 1.5])
                        hl33 = parseInt(25) + parseFloat([(hl33 - 25) / 1.5])
                    } else if (hw33 > 50 && hw33 <= 75) {
                        hw33 = parseInt(42) + parseFloat([(hw33 - 50) / 2])
                        hl33 = parseInt(42) + parseFloat([(hl33 - 50) / 2])
                    } else if (hw33 > 75 && hw33 <= 100) {
                        hw33 = parseInt(55) + parseFloat([(hw33 - 75) / 2.5])
                        hl33 = parseInt(55) + parseFloat([(hl33 - 75) / 2.5])
                    } else if (hw33 > 100 && hwll <= 145) {
                        hw33 = parseInt(65) + parseFloat([(hw33 - 100) / 3])
                        hl33 = parseInt(65) + parseFloat([(hl33 - 100) / 3])
                    } else if (hw33 > 145 && hw33 <= 245) {
                        hw33 = parseInt(80) + parseFloat([(hw33 - 145) / 10])
                        hl33 = parseInt(80) + parseFloat([(hl33 - 145) / 10])
                    } else if (hw33 > 245) {
                        hw33 = parseInt(90)
                        hl33 = parseInt(100)
                    }


                    if (hw44 > 25 && hw44 <= 50) {
                        hw44 = parseInt(25) + parseFloat([(hw44 - 25) / 1.5])
                        hl44 = parseInt(25) + parseFloat([(hl44 - 25) / 1.5])
                    } else if (hw44 > 50 && hw44 <= 75) {
                        hw44 = parseInt(42) + parseFloat([(hw44 - 50) / 2])
                        hl44 = parseInt(42) + parseFloat([(hl44 - 50) / 2])
                    } else if (hw44 > 75 && hw44 <= 100) {
                        hw44 = parseInt(55) + parseFloat([(hw44 - 75) / 2.5])
                        hl44 = parseInt(55) + parseFloat([(hl44 - 75) / 2.5])
                    } else if (hw44 > 100 && hwll <= 145) {
                        hw44 = parseInt(65) + parseFloat([(hw44 - 100) / 3])
                        hl44 = parseInt(65) + parseFloat([(hl44 - 100) / 3])
                    } else if (hw44 > 145 && hw44 <= 245) {
                        hw44 = parseInt(80) + parseFloat([(hw44 - 145) / 10])
                        hl44 = parseInt(80) + parseFloat([(hl44 - 145) / 10])
                    } else if (hw44 > 245) {
                        hw44 = parseInt(90)
                        hl44 = parseInt(100)
                    }



                    document.getElementById('horse111').style.width = `${hw11}%`
                    document.getElementById('horse11').style.left = `${hl11}%`

                    document.getElementById('horse222').style.width = `${hw22}%`
                    document.getElementById('horse22').style.left = `${hl22}%`

                    document.getElementById('horse333').style.width = `${hw33}%`
                    document.getElementById('horse33').style.left = `${hl33}%`

                    document.getElementById('horse444').style.width = `${hw44}%`
                    document.getElementById('horse44').style.left = `${hl44}%`

                    
                } else if(Gameseconds<0){
                   
                    document.getElementById("startCountDown").textContent = '';
                }else if(seconds>0){
                    
                    document.getElementById("startCountDown").textContent = minutes + ":" + seconds;
                } else if(seconds<0){
                    document.getElementById('BuyTicket').classList.add('noview')
                }
                if (distance < 0 && GameTime < 0) {
                  
                    
                    document.getElementById('accelarate').style.display = 'none';
                    // document.getElementById('StartRace').style.display = 'none';

                    document.getElementById('BuyTicket').style.display = 'none'
                    document.getElementById('finishRace').style.display = 'flex'

                    document.getElementById('horse111').style.width = `100%`
                    document.getElementById('horse11').style.left = `90%`

                    document.getElementById('horse222').style.width = `100%`
                    document.getElementById('horse22').style.left = `90%`

                    document.getElementById('horse333').style.width = `100%`
                    document.getElementById('horse33').style.left = `90%`

                    document.getElementById('horse444').style.width = `100%`
                    document.getElementById('horse44').style.left = `90%`
                    



                    const ru3 = `Гонка завершена! Завершите гонку, чтобы проверить победителей`
                    const hi3 = `दौड़ समाप्त! विजेताओं की जांच के लिए दौड़ समाप्त करें`
                    const en3 = `Race Ended! Finish Race to Check Winners`

                    if (text === 'English') {
                        document.getElementById('gameStatus').textContent = en3
                    } else if (text === 'Hindi') {
                        document.getElementById('gameStatus').textContent = hi3
                    } else {
                        document.getElementById('gameStatus').textContent = ru3
                    }

                    // clearInterval(x);
                    // document.getElementById('startcount').textContent = 'Started';
                    
                } else if(distance<0 && GameTime>0) {
                   
                    // document.getElementById('accelarate').classList.remove('noview');
                    // document.getElementById('StartRace').style.display = 'none';
                    document.getElementById('BuyTicket').classList.add('noview')
                    document.getElementById('accelarate').style.display = 'flex';
                    // document.getElementById('startcount').style.display = 'flex';
                } else{
                  
                    document.getElementById('BuyTicket').classList.remove('noview')
                }
            }, 1000);
    }
}


window.addEventListener('load', async () => {
    CheckGameStatus()
    document.querySelector("#Claim").addEventListener("click", ClaimAndWithdraw);
    document.querySelector("#BuyTicket").addEventListener("click", onBuy);
    document.querySelector("#horse1").addEventListener("click", chooseHorse1);
    document.querySelector("#horse2").addEventListener("click", chooseHorse2);
    document.querySelector("#horse3").addEventListener("click", chooseHorse3);
    document.querySelector("#horse4").addEventListener("click", chooseHorse4);
    document.querySelector("#finishRace").addEventListener("click", finishRace);
    document.querySelector("#SpeedUp").addEventListener("click", onSpeedUp);

});




// checkIfLogin()

