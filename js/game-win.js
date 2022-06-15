async function auto3() {

    await delay(3000);
    if (!account) return;
    // await setInterval(async function () {

    console.log(balance)
    document.getElementById('balanceonBuyPage2').textContent = `${balance} BNB`
        RacIter = await racing.methods.racIter().call();
        StartTime = await racing.methods.timeStampStart(RacIter).call();
        RacingEnded = await racing.methods.racingEnded().call()
        EndTime = await racing.methods.timeStampStop(RacIter).call();
        Winner = await racing.methods.winners(RacIter).call()
        console.log(RacIter, StartTime, EndTime, Winner)
        document.getElementById('winner').textContent = `Horse #${Winner} Won`
 
}



window.addEventListener('load', async () => {
    // auto()


});