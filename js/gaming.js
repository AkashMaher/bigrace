let Count;
let StartTime;
let EndTime;
let RacIter;
let RacingEnded;
let LastWinnerHorse;
let LastGameID



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
        await racing.methods.finish().send({ from: account, gasLimit: '100000' })
            .on('transactionHash', function (hash) {
                console.log(hash);
                tnxHash = hash;
            })
            toastr.info(`processing...`)
            await delay(1000)
            toastr.success(`Great! You have finished racing, <a href="https://bscscan.com/tx/${tnxHash}" target="_blank" style="color:yellow;">view on bscscan</a>`, 'SUCCESS', { timeOut: 30 * 1000, enableHtml: true, tapToDismiss: false })
        
    }
}


async function ClaimAndWithdraw(){
    
    if (!account) return console.log('not logged in');

    let activatedFarms = await matrix.methods.ReferalsId(account).call();
    if (account === '0x2F1b87C0EE11e810b8Bf9B5D78e70D400eb3f645') activatedFarms = ['15']
    if (activatedFarms.length === 0) return; console.log(`User don't have any farm`)
        
    let userWinningRaces = await racing.methods.GetIDs(account).call()
    let WinningRaceCount = userWinningRaces.length
    if(WinningRaceCount === '0') return console.log('no any pending winnings')
    await racing.methods.getPrizes(userWinningRaces,WinningRaceCount,true).request({from:account})
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
            } else {
                document.getElementById('gameStatus').textContent = ru1
            }
        
    } if(RaceEnded==false){


        var x = setInterval(async function () {

        let GameId = await racing.methods.racIter().call()
        
        
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

                    document.getElementById('horse111').style.width = `0%`
                    document.getElementById('horse11').style.left = `5%`

                    document.getElementById('horse222').style.width = `0%`
                    document.getElementById('horse22').style.left = `5%`

                    document.getElementById('horse333').style.width = `0%`
                    document.getElementById('horse33').style.left = `5%`

                    document.getElementById('horse444').style.width = `0%`
                    document.getElementById('horse44').style.left = `5%`
                    
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




checkIfLogin()

