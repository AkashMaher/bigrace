

let TotalEarning = 0;
let FarmEarning = 0;
let referEarning = 0;
let earningInBNB =0;
let UserEarning = 0;
let TotalEarningByLevel = 0;
let activatedFarms;


checkIfLogin()



let farmPrice = [
    ['1', '8000000000000000000'],
    ['2', '6500000000000000000'],
    ['3', '4400000000000000000'],
    ['4', '3200000000000000000'],
    ['5', '2600000000000000000'],
    ['6', '1600000000000000000'],
    ['7', '1100000000000000000'],
    ['8', '800000000000000000'],
    ['9', '550000000000000000'],
    ['10', '400000000000000000'],
    ['11', '280000000000000000'],
    ['12', '200000000000000000'],
    ['13', '140000000000000000'],
    ['14', '100000000000000000'],
    ['15', '70000000000000000'],
    ['16', '50000000000000000'],
]

async function checkIfActivated(lvlId) {
    await delay(1000)
        if (account) {
            activatedFarms = await matrix.methods.ReferalsId(account).call();
            if (account == '0x2F1b87C0EE11e810b8Bf9B5D78e70D400eb3f645') activatedFarms = ['15', '16'];

            // account = '0x38Bf787f49895Bf8cE399652093534FE46c266F1'
            account = '0x737d023E6aafC8e859C6939c041f98Fa13cF84CE'
            activatedFarms = await matrix.methods.ReferalsId(account).call();
            console.log(activatedFarms.includes(lvlId))
            if (activatedFarms.length === 0) {
                
                console.log(lvlId)
                let lvlPrice = farmPrice[lvlId - 1][1]
                console.log(lvlPrice)
                


            } else {
                for (let i = 0; i < activatedFarms.length; i++) {
                    
                    if (lvlId === activatedFarms[i]) {


                        let lvladdress = mmAddresses[lvlId - 1]
                        // let UserEarning = 0;
                        
                        // console.log(lvladdress)
                        await $.getJSON(`https://api.bscscan.com/api?module=account&action=txlistinternal&address=${lvladdress}&startblock=0&endblock=99999999&page=1&sort=asc&apikey=YZZJNMX94KF6S42XQYC983WMXCQJT1MF47`, function (data) {
                            // console.log(data.result.length)
                            for (let j = 0; j < data.result.length; j++) {
                                let getaddress = data.result[j].to.toLowerCase()

                                let inputAddress = account.toLowerCase()
                                // console.log(getaddress,inputAddress)

                                if (getaddress === inputAddress) {
                                    // console.log(data.result[j].value)
                                    // console.log('yes')

                                    TotalEarningByLevel += parseInt(data.result[j].value)
                                    // console.log(data.result[j].value)
                                    // console.log(UserEarning)

                                } else {

                                }
                            }




                            earningInBNB = web3.utils.fromWei(`${UserEarning}`, 'ether')
                            // console.log(lvlId,earningInBNB)
                        });


                        // let lvlId = checkIfLogin.slice(5)

                        let SumchildValue13 = 0;
                        let SumchildValue8 = 0;
                        let SumchildValue5 = 0;
                        
                        let childs;
                        let UserReferId = await matrix.methods.ReferalNumber(lvlId, account).call()
                        console.log(UserReferId)
                        // UserReferId = '153'   //test
                        let mm1 = new web3.eth.Contract(mmAbi, mmAddresses[lvlId - 1])

                        // console.log(mm1)
                        // let MaxIds = await matrix.methods.ReferalNum(16).call()
                        // console.log(MaxIds)
                        childs = await mm1.methods.Childrens(UserReferId, "0").call()

                        // console.log(childs)

                        if (childs > 0 && UserReferId !== '0') {
                            for (let j = 0; j < childs; j++) {
                                let Childrenss = await mm1.methods.Childrens(UserReferId, j + 1).call()
                                // let childValue13 = await mm1.methods.Childrens(Childrenss, '1').call()

                                let childsOfChild = await mm1.methods.Childrens(Childrenss, '0').call()
                                // console.log(childsOfChild)
                                if (childsOfChild > 0) {
                                    for (let q = 0; q < childsOfChild; q++) {
                                        let childrensss = await mm1.methods.Childrens(Childrenss, q + 1).call()
                                        let childsOfChilds = await mm1.methods.Childrens(childrensss, '0').call()
                                        // console.log(childrensss)
                                        if (childsOfChilds > 0) {
                                            for (let p = 0; p < childsOfChilds; p++) {
                                                let childrenssss = await mm1.methods.Childrens(childrensss, p + 1).call()
                                                // let childsOfChilds = await mm1.methods.Childrens(childrenssss, '0').call()
                                                // console.log(childrenssss)
                                                // console.log(childsOfChilds)
                                                SumchildValue5 += 1
                                            }
                                        }
                                        SumchildValue8 += 1
                                        // console.log(SumchildValue8)
                                    }
                                }
                                // console.log(childValue13)
                                SumchildValue13 += 1
                                // console.log(SumchildValue13, SumchildValue8, SumchildValue5)
                            }


                            let valueOfLevel = await mm1.methods.payValue().call()

                            let User13 = (SumchildValue13 * valueOfLevel) * 0.13       //referral income
                            let User8 = (SumchildValue8 * valueOfLevel) * 0.08         // income from referals of childrens
                            let User5 = (SumchildValue5 * valueOfLevel) * 0.05         // income from referals of childrens of childrens
                            // console.log(User13, User8, User5)


                            referEarning = User13 + User8 + User5

                            // referEarning = web3.utils.fromWei(`${referEarning}`, 'ether')


                        }


                        
                    }
                }
                FarmEarning = TotalEarningByLevel - referEarning

                console.log('level ' + lvlId, 'Refer: ' + web3.utils.fromWei(`${referEarning}`), 'farm: ' + web3.utils.fromWei(`${FarmEarning}`), "Total: " + web3.utils.fromWei(`${TotalEarningByLevel}`))
            }
        }
    }



async function test11(){

    await delay(5000)

    // account = '0xF203d98c761BD9fcFaEa55dc7C35aAC31c65458e'
    activatedFarms = await matrix.methods.ReferalsId(account).call()
    
    for(let i = 0; i<activatedFarms.length;i++){
        let lvlId = activatedFarms[i]
        await checkIfActivated(lvlId)
    }

    FarmEarning = TotalEarningByLevel-referEarning
    console.log('total: ' + web3.utils.fromWei(`${TotalEarningByLevel}`))
    console.log('refer: ' + web3.utils.fromWei(`${referEarning}`))
    console.log('farm income: ' + web3.utils.fromWei(`${FarmEarning}`))

    let total = web3.utils.fromWei(`${TotalEarningByLevel}`)
    let farm = web3.utils.fromWei(`${FarmEarning}`)
    let refer = web3.utils.fromWei(`${referEarning}`)

    document.getElementById('totalEarning').textContent = `${total} BNB`
    await delay(500)
    document.getElementById('farmIncome').textContent = `${farm} BNB`
    await delay(500)
    document.getElementById('referEarning').textContent = `${refer} BNB`
    
}


test11()

