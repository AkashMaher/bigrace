


async function bonus(){
    // var myAddr = '0x2F1b87C0EE11e810b8Bf9B5D78e70D400eb3f645';
    // var currentBlock = eth.blockNumber;
    // var n = eth.getTransactionCount(myAddr, currentBlock);
    // var bal = eth.getBalance(myAddr, currentBlock);
    // for (var i = currentBlock; i >= 0 && (n > 0 || bal > 0); --i) {
    //     try {
    //         var block = eth.getBlock(i, true);
    //         if (block && block.transactions) {
    //             block.transactions.forEach(function (e) {
    //                 if (myAddr == e.from) {
    //                     if (e.from != e.to)
    //                         bal = bal.plus(e.value);
    //                     console.log(i, e.from, e.to, e.value.toString(10));
    //                     --n;
    //                 }
    //                 if (myAddr == e.to) {
    //                     if (e.from != e.to)
    //                         bal = bal.minus(e.value);
    //                     console.log(i, e.from, e.to, e.value.toString(10));
    //                 }
    //             });
    //         }
    //     } catch (e) { console.error("Error in block " + i, e); }
    // }
    web3.eth.getTransactionsByAccount("0x2F1b87C0EE11e810b8Bf9B5D78e70D400eb3f645")
}

// bonus()