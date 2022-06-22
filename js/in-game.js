
let mul;

async function onSpeedUp(){
    delay(3000);
    if (!account) return toastr.info('Пожалуйста, подключите свой кошелек');
    let race = await racing.methods.racingEnded().call()
    console.log(race)
    if (race == true) return toastr.info('Гонка уже завершена','Информация')
    let inputVal = parseFloat(document.getElementById('range-input').value*100)
    let slideVal = parseFloat(slider.value)
    console.log(inputVal, slideVal)
    if(inputVal>slideVal){
        mul = inputVal;
    } else {
        mul = slider.value
    }
    console.log(mul)
    let vall = 10000000000000000*mul;
    var val = (vall).toLocaleString('fullwide', { useGrouping: false });
    console.log(val)
    await racing.methods.speedUp().send({from:account, value:val})
    toastr.success('Speed Up Successfully ')
}


async function auto2() {
    console.log('test')
    // await setInterval(async function () {
    
        // console.log(balance)
        // document.getElementById('balanceonBuyPage2').textContent = `${balance} BNB`
    setInterval(async function () {
        RacIter = await racing.methods.racIter().call();
        StartTime = await racing.methods.timeStampStart(RacIter).call();
        RacingEnded = await racing.methods.racingEnded().call()
        EndTime = await racing.methods.timeStampStop(RacIter).call();
        // console.log(RacIter, StartTime, EndTime)
        // console.log((new Date("July 1, 1978 02:30:00")).getTime() / 1000.0)

        if (EndTime != '0' && !RacingEnded) {

            var StartDate = new Date(EndTime * 1000).toGMTString();
            // console.log(StartDate)

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
                    document.getElementById("startCountDown2").textContent = `00:00`;
                    console.log('timer end')
                } else
                    document.getElementById("startCountDown2").textContent = minutes + ":" + seconds;

                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    console.log('finish')
                    // document.getElementById("startCountDown").textContent = "Started";
                    document.getElementById('finishRace').style.display = 'flex';
                    document.getElementById('accelarate').style.display = 'none';
                    // window.open('./game-win.html', '_self')
                    
                } else {
                    // document.getElementById('StartRace').style.display = 'none';
                    // document.getElementById('startcount').style.display = 'flex';
                }
            }, 1000);

        }

        // }, 5000);

    }, 10000);
}


async function finishRace() {
    if (!account) return;
    let RaceEnded = await racing.methods.racingEnded().call()
    console.log(RaceEnded)

    if(RaceEnded===true){
        window.open('./game-win.html', '_self')
    } else{
        await racing.methods.finish().send({ from: account })
        await delay(3000)
        window.open('./game-win.html', '_self')
    }
}

window.addEventListener('load', async () => {


    
});

// checkIfLogin()

auto2()