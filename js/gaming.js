let Count;
let StartTime;
let EndTime;
let RacIter;
let RacingEnded;
// const delay = ms => new Promise(res => setTimeout(res, ms));
async function auto1() {

    await delay(5000);
    if (!account) return;
    // await setInterval(async function () {

    console.log(balance)
    // document.getElementById('balanceonBuyPage').textContent = `${balance} BNB`
    setInterval(async function () {
        RacIter = await racing.methods.racIter().call();
        StartTime = await racing.methods.timeStampStart(RacIter).call();
        RacingEnded = await racing.methods.racingEnded().call()
        EndTime = await racing.methods.timeStampStop(RacIter).call();
        console.log(RacIter, StartTime, EndTime)
        // console.log((new Date("July 1, 1978 02:30:00")).getTime() / 1000.0)

        if (StartTime != '0' && !RacingEnded) {
            console.log('true')

            var StartDate = new Date(StartTime * 1000).toGMTString();
            console.log(StartDate)

            var countDownDate = new Date(StartDate).getTime();

            // Update the count down every 1 second
            var x = setInterval(function () {

                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                if (seconds < 0) {
                    document.getElementById("startCountDown").textContent = `00:00`;
                } else
                    document.getElementById("startCountDown").textContent = minutes + ":" + seconds;

                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    // document.getElementById("startCountDown").textContent = "Started";
                    document.getElementById('startcount').textContent = 'Started';
                    // window.open('./in-game.html', '_self')
                } else {
                    // document.getElementById('StartRace').style.display = 'none';
                    // document.getElementById('startcount').style.display = 'flex';
                }
            }, 1000);

        }

        // }, 5000);

    }, 10000);
}




async function onBuy() {

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





async function CheckGameStatus(){

    let text = document.getElementById("textBox-text").innerHTML;

    let RaceEnded = await racing.methods.racingEnded().call()
    console.log(RaceEnded)
    let GameId = await racing.methods.racIter().call()
    console.log(GameId)

    if(RaceEnded==true){

        const ru1 = `Вы можете начать гонку, нажав «Начать гонку».`
        const hi1 = `आप "स्टार्ट रेसिंग" पर क्लिक करके रेस शुरू कर सकते हैं`
        const en1 = `You can Start Race by click on "Start Racing"`

        
        document.getElementById('StartRace').classList.remove('noview')
        if(text==='English'){
            document.getElementById('gameStatus').innerHTML = en1
        } else if(text ==='Hindi'){
            document.getElementById('gameStatus').innerHTML = hi1
        } else{
            document.getElementById('gameStatus').innerHTML = ru1
        }
        
    } if(RaceEnded==false){
        let StartTime = await racing.methods.timeStampStart(GameId).call()
        let EndTime = await racing.methods.timeStampStop(GameId).call()
        let currentTime = Math.floor(Date.now() / 1000).toString()

        console.log(StartTime,EndTime,currentTime)

        if(StartTime>currentTime){
            document.getElementById('StartRace').style.display = 'none';
            document.getElementById('BuyTicket').classList.remove('noview')
            var x = setInterval( async function (){
                let distance = StartTime - currentTime
                console.log(distance)

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                if (seconds < 0) {
                    document.getElementById("startCountDown").textContent = ``;
                } else
                    document.getElementById("startCountDown").textContent = minutes + ":" + seconds;

                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById('startcount').textContent = 'Started';
                    
                } else {
                    // document.getElementById('StartRace').style.display = 'none';
                    // document.getElementById('startcount').style.display = 'flex';
                }
            }, 1000);
            

        }
    }
}

CheckGameStatus()