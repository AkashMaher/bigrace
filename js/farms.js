
let Inviters = []

let ReferalNum;


async function activateFarm(lvlID,Value){
    if(!account) {

    } else {


        let activatedFarms = await matrix.methods.ReferalsId(account).call();
        if (account === '0x2F1b87C0EE11e810b8Bf9B5D78e70D400eb3f645') activatedFarms = ['15']
        // console.log(activatedFarms)
        // account = '0x3fee240aae8881a679dec62de0f068a4cbac51cd'
        // console.log(activatedFarms.length)
        if (activatedFarms.length === 0) {

        } else {

            for (let i = 0; i < activatedFarms.length;i++){

                // console.log(activatedFarms[i])
                let InviterID = await matrix.methods.ParentId(activatedFarms[i],account).call()
                console.log(InviterID)
              

                if(InviterID > 0){
                    let referAddress = await matrix.methods.ReferalAddress(activatedFarms[i],InviterID).call()
                    let ReferId = await matrix.methods.ReferalNumber(lvlID, referAddress).call()
                    Inviters.push(`${ReferId}`)
                } else {

                }
            }

            // console.log(Inviters.length)
            
            if(Inviters.length===0) Inviters.push('0');
            // console.log(Inviters[0])
            console.log(lvlID,Inviters[0])
            await matrix.methods.addUser(lvlID, Inviters[0]).send({ from: account, value: Value })
        }
    
        


        

    }
    
}


async function FarmOpenIn(timestamp,id,Yet,Live){

    var StartDate = new Date(timestamp * 1000).toGMTString();
    console.log(StartDate)

    var countDownDate = new Date(StartDate).getTime();


    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (seconds < 0) {
            document.getElementById(id).textContent = `00:00`;
        } else
            document.getElementById(id).textContent =days+"d "+hours+"h "+minutes+"m " +seconds+"s";

        if (distance < 0) {
            document.getElementById(Yet).style.display = 'none'
            document.getElementById(Live).style.display = 'block'
            clearInterval(x);
            
        } else {
        }
    }, 1000);
}

FarmOpenIn('1656244800', '15', 'YetToActivate15', 'Activated15')
FarmOpenIn('1656244800', '14', 'YetToActivate14', 'Activated14')
FarmOpenIn('1656244800', '13', 'YetToActivate13', 'Activated13')

FarmOpenIn('1656417600', '12', 'YetToActivate12', 'Activated12')
FarmOpenIn('1656417600', '11', 'YetToActivate11', 'Activated11')
FarmOpenIn('1656417600', '10', 'YetToActivate10', 'Activated10')

FarmOpenIn('1656590400', '9', 'YetToActivate9', 'Activated9')
FarmOpenIn('1656590400', '8', 'YetToActivate8', 'Activated8')
FarmOpenIn('1656590400', '7', 'YetToActivate7', 'Activated7')
FarmOpenIn('1656590400', '6', 'YetToActivate6', 'Activated6')
FarmOpenIn('1656590400', '5', 'YetToActivate5', 'Activated5')




// async function activateFarm(lvlID, Value) {
//     console.log('Test')
//     console.log(document.getElementsByClassName('horse-card-container')[lvlID - 1])
//     console.log(lvlID)

//     let result = await matrix.methods.addUser(lvlID, 0).send({
//         from: account,
//         gasLimit: 10000000,
//         value: Value
//     })

//     console.log(result)

//     document.getElementsByClassName('horse-card-container')[lvlID - 1].classList.add('activated')

//     let horseCont = document.getElementsByClassName('horse-card-container')[lvlID - 1]

//     console.log(horseCont.querySelector('div:nth-child(2)'))


//     let text = document.getElementById("textBox-text").innerHTML;
//     if (text === "Русский") {

//         horseCont.querySelector('div:nth-child(2)').innerHTML = '' +
//             '<div>' +
//             '          <p class="text-center main-card-text">данная ферма</p>' +
//             '          <div class="d-flex justify-content-center">' +
//             '            <h3 style="color: white;">Активирована</h3>' +
//             '          </div>' +
//             '        </div>';

//     } else if (text === "English") {

//         horseCont.querySelector('div:nth-child(2)').innerHTML = '' +
//             '<div>' +
//             '          <p class="text-center main-card-text">this farm is</p>' +
//             '          <div class="d-flex justify-content-center">' +
//             '            <h3 style="color: white;">Activated</h3>' +
//             '          </div>' +
//             '        </div>';

//     } else if (text === "Hindi") {

//         horseCont.querySelector('div:nth-child(2)').innerHTML = '' +
//             '<div>' +
//             '          <p class="text-center main-card-text">यह खेत</p>' +
//             '          <div class="d-flex justify-content-center">' +
//             '            <h3 style="color: white;">सक्रिय है</h3>' +
//             '          </div>' +
//             '        </div>';

//     }

// };


let  farmPrice = [
    ['1','8000000000000000000','16'],
    ['2','6500000000000000000','15'],
    ['3','4400000000000000000','14'],
    ['4', '3200000000000000000','13'],
    ['5', '2600000000000000000','12'],
    ['6', '1600000000000000000','11'],
    ['7', '1100000000000000000','10'],
    ['8', '800000000000000000','9'],
    ['9', '550000000000000000','8'],
    ['10', '400000000000000000','7'],
    ['11', '280000000000000000','6'],
    ['12', '200000000000000000','5'],
    ['13', '140000000000000000','4'],
    ['14', '100000000000000000','3'],
    ['15', '70000000000000000','2'],
    ['16', '50000000000000000','1'],
]






async function checkIfActivated(checkIfLogin){
    // await delay(5000)
    
    let text = document.getElementById("textBox-text").innerHTML;
    // console.log(text)
    
    
    // var x = setInterval(async function () {
        if(account){
            let activatedFarms =await matrix.methods.ReferalsId(account).call();
            if (account =='0x2F1b87C0EE11e810b8Bf9B5D78e70D400eb3f645') activatedFarms =['15','16'];
            // console.log(activatedFarms)
            // account = '0x3830c6776B6BEbb005b89Df994756c14BBECd0E3'            //test
            activatedFarms = await matrix.methods.ReferalsId(account).call();    //test
            // console.log(activatedFarms.length)
            if (activatedFarms.length === 0) {
                let lvlId = checkIfLogin.slice(5)
                // console.log(lvlId)
                let lvlPrice = farmPrice[lvlId - 1][1]
                // console.log(lvlPrice)
                const Ru1 = `<a onclick="activateFarm('${lvlId}','${lvlPrice}')"><button>Активировать</button></a>`
                const En1 = `<a onclick="activateFarm('${lvlId}','${lvlPrice}')"><button>Activate</button></a>`
                const Hi1 = `<a onclick="activateFarm('${lvlId}','${lvlPrice}')"><button>सक्रिय</button></a>`

                if(text==='English'){
                    document.getElementById(checkIfLogin).innerHTML = En1
                } else if(text==='Hindi'){
                    document.getElementById(checkIfLogin).innerHTML = Hi1
                } else{
                    document.getElementById(checkIfLogin).innerHTML = Ru1
                }


            } else{


                let lvlId = checkIfLogin.slice(5)
                // console.log(lvlId)
                let lvlPrice = farmPrice[lvlId - 1][1]
                // console.log(lvlPrice)
                



                
                    // let lvlId = checkIfLogin.slice(5)
                if (activatedFarms.includes(`${lvlId}`)){
                        let getId = `check${lvlId}`
                        let ifAct = `ifAct${lvlId}`
                        let iddd = farmPrice[lvlId - 1][2]
                        let activatedId = `Activated${iddd}`


                        let lvladdress = mmAddresses[lvlId - 1]
                        let UserEarning = 0;
                        let earningInBNB = 0;
                        // console.log(lvladdress)
                        await $.getJSON(`https://api.bscscan.com/api?module=account&action=txlistinternal&address=${lvladdress}&startblock=0&endblock=99999999&page=1&sort=asc&apikey=YZZJNMX94KF6S42XQYC983WMXCQJT1MF47`,async function (data) {
                            // console.log(data.result.length)
                            for (let j = 0; j < data.result.length; j++) {

                                let getaddress = data.result[j].to.toLowerCase()
                                
                                let inputAddress = account.toLowerCase()
                                // console.log(getaddress,inputAddress)

                                if (getaddress === inputAddress) {
                                    // console.log(data.result[j].value)
                                    // console.log('yes')

                                    UserEarning += parseInt(data.result[j].value)
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
                        let referEarning =0;
                        let childs;
                        let UserReferId = await matrix.methods.ReferalNumber(lvlId, account).call()
                        // console.log(UserReferId)
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

                            referEarning = web3.utils.fromWei(`${referEarning}`, 'ether')

                            
                        }
                        let farmEarn = earningInBNB - referEarning
                        farmEarn = parseFloat(farmEarn).toFixed(3)
                        referEarning = parseFloat(referEarning).toFixed(3)
                        earningInBNB = parseFloat(earningInBNB).toFixed(3)
                        if(farmEarn == 0) farmEarn = 0
                        if(referEarning == 0) referEarning = 0
                        if(earningInBNB == 0) earningInBNB = 0
                        console.log('level ' + lvlId, 'Refer: ' + referEarning, 'farm: '+farmEarn, "Total: " + earningInBNB)
                        // console.log('Total Earning of level '+lvlId,earningInBNB)

                        
                        // console.log('Farm earning of level '+lvlId,farmEarn)
                        

                        let referBonus = ''
                        
                        

                        const Ru2 = `<p class='earning1' style='font-size:11px' >Реф вознаграждение: ${referEarning} <img src="./assets/img/bnb.png" alt="" style="width:11px" /></p>
                    <p class='earning2'style='font-size:11px' >Вознаграждения: ${farmEarn} <img src="./assets/img/bnb.png" alt="" style="width:11px" /></p>`
                        const Ru3 = `Активировано`

                        const En2 = `<p class='earning1' style='font-size:11px' >Ref. reward: ${referEarning} <img src="../assets/img/bnb.png" alt="" style="width:11px" /></p>
                    <p class='earning2'style='font-size:11px' >Farm Income: ${farmEarn} <img src="../assets/img/bnb.png" alt="" style="width:11px" /></p>`
                        const En3 = `Activated`

                        const Hi2 = `<p class='earning1' style='font-size:11px' >रेफरल इनाम: ${referEarning} <img src="../assets/img/bnb.png" alt="" style="width:11px" /></p>
                    <p class='earning2'style='font-size:11px' >खेत आय: ${farmEarn} <img src="../assets/img/bnb.png" alt="" style="width:11px" /></p>`
                        const Hi3 = `सक्रिय`


                        document.getElementById(getId).classList.remove('d-flex')
                        document.getElementById(activatedId).style.backgroundImage = `url('./assets/img/card-horse-clock.png')`
                        document.getElementById(ifAct).classList.add('ifAct')
                        if (text === 'English') {
                            document.getElementById(getId).innerHTML = En2
                            document.getElementById(ifAct).textContent = En3
                            
                        } else if (text ==='Hindi') {
                            document.getElementById(getId).innerHTML = Hi2
                            document.getElementById(ifAct).textContent = Hi3
                        } else {
                            document.getElementById(getId).innerHTML = Ru2
                            document.getElementById(ifAct).textContent = Ru3
                        }
                    
                    } else{

                    let lvlId = checkIfLogin.slice(5)
                    // console.log(lvlId)
                    let lvlPrice = farmPrice[lvlId - 1][1]
                    // console.log(lvlPrice)
                    const Ru1 = `<a onclick="activateFarm('${lvlId}','${lvlPrice}')"><button>Активировать</button></a>`
                    const En1 = `<a onclick="activateFarm('${lvlId}','${lvlPrice}')"><button>Activate</button></a>`
                    const Hi1 = `<a onclick="activateFarm('${lvlId}','${lvlPrice}')"><button>सक्रिय</button></a>`

                    if (text === 'English') {
                        document.getElementById(checkIfLogin).innerHTML = En1
                    } else if (text === 'Hindi') {
                        document.getElementById(checkIfLogin).innerHTML = Hi1
                    } else {
                        document.getElementById(checkIfLogin).innerHTML = Ru1
                    }
                        
                        

                    } 
                
                
            }

            

        } else{

            // const Ru4 = `<button>Загрузка...</button>`
            // const Hi4 = `<button>Loading...</button>`
            // const En4 = `<button>लोड हो रहा है...</button>`


            // if (text === 'English') {
            //     document.getElementById(checkIfLogin).innerHTML = En4
            // } else if (text === 'Hindi') {
            //     document.getElementById(checkIfLogin).innerHTML = Hi4
            // } else {
            //     document.getElementById(checkIfLogin).innerHTML = Ru4
            // }
            
            
        }
        
    // }, 1000);
}

async function test11(){
    await delay(5000)
    await checkIfActivated('check16')
    await checkIfActivated('check15')
    await checkIfActivated('check14')
    await checkIfActivated('check13')
    await checkIfActivated('check12')
    await checkIfActivated('check11')
    await checkIfActivated('check10')
    await checkIfActivated('check9')
    await checkIfActivated('check8')
    await checkIfActivated('check7')
    await checkIfActivated('check6')
    await checkIfActivated('check5')
    await checkIfActivated('check4')
    await checkIfActivated('check3')
    await checkIfActivated('check2')
    await checkIfActivated('check1')
}

test11()


// checkIfLogin()


// document.getElementById('16').addEventListener('click', activateFarm(16,'50000000000000000'))