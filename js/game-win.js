async function auto3() {
    await delay(3000)
    if (!account) return window.open('./','_self');
    setInterval(async function () {

        RacIter = await racing.methods.racIter().call();
        StartTime = await racing.methods.timeStampStart(RacIter).call();
        RacingEnded = await racing.methods.racingEnded().call()
        EndTime = await racing.methods.timeStampStop(RacIter).call();
        Winner = await racing.methods.winners(RacIter).call()
        // console.log(RacIter, StartTime, EndTime, Winner)
        document.getElementById('winner').textContent = `Horse #${Winner} Won`

},5000)
 
}



window.addEventListener('load', async () => {
    // auto()


});