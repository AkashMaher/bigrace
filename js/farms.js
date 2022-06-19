

async function UsersFarms(){
    document.getElementById('16').classList.add('horse-clock-container')
}


UsersFarms()

async function activateFarm(lvlID,Value){
    console.log('Test')
    await matrix.methods.addUser(lvlID, 0).send({ from: account, value: Value })
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

// FarmOpenIn('1655640000', '15', 'YetToActivate15', 'Activated15')
// FarmOpenIn('1655640000', '14', 'YetToActivate14', 'Activated14')
// FarmOpenIn('1655640000', '13', 'YetToActivate13', 'Activated13')

// FarmOpenIn('1655812800', '12', 'YetToActivate12', 'Activated12')
// FarmOpenIn('1655812800', '11', 'YetToActivate11', 'Activated11')
// FarmOpenIn('1655812800', '10', 'YetToActivate10', 'Activated10')

// FarmOpenIn('1656072000', '9', 'YetToActivate9', 'Activated9')
// FarmOpenIn('1656072000', '8', 'YetToActivate8', 'Activated8')
// FarmOpenIn('1656072000', '7', 'YetToActivate7', 'Activated7')
// FarmOpenIn('1656072000', '6', 'YetToActivate6', 'Activated6')
// FarmOpenIn('1656072000', '5', 'YetToActivate5', 'Activated5')




async function activateFarm(lvlID, Value) {
    console.log('Test')
    console.log(document.getElementsByClassName('horse-card-container')[lvlID - 1])
    console.log(lvlID)

    let result = await matrix.methods.addUser(lvlID, 0).send({
        from: account,
        gasLimit: 10000000,
        value: Value
    })

    console.log(result)

    document.getElementsByClassName('horse-card-container')[lvlID - 1].classList.add('activated')

    let horseCont = document.getElementsByClassName('horse-card-container')[lvlID - 1]

    console.log(horseCont.querySelector('div:nth-child(2)'))


    let text = document.getElementById("textBox-text").innerHTML;
    if (text === "Русский") {

        horseCont.querySelector('div:nth-child(2)').innerHTML = '' +
            '<div>' +
            '          <p class="text-center main-card-text">данная ферма</p>' +
            '          <div class="d-flex justify-content-center">' +
            '            <h3 style="color: white;">Активирована</h3>' +
            '          </div>' +
            '        </div>';

    } else if (text === "English") {

        horseCont.querySelector('div:nth-child(2)').innerHTML = '' +
            '<div>' +
            '          <p class="text-center main-card-text">this farm is</p>' +
            '          <div class="d-flex justify-content-center">' +
            '            <h3 style="color: white;">Activated</h3>' +
            '          </div>' +
            '        </div>';

    } else if (text === "Hindi") {

        horseCont.querySelector('div:nth-child(2)').innerHTML = '' +
            '<div>' +
            '          <p class="text-center main-card-text">यह खेत</p>' +
            '          <div class="d-flex justify-content-center">' +
            '            <h3 style="color: white;">सक्रिय है</h3>' +
            '          </div>' +
            '        </div>';

    }

}


let  farmPrice = [
    ['1','8000000000000000000'],
    ['2','6500000000000000000'],
    ['3','4400000000000000000'],
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

async function checkIfActivated(checkIfLogin){
    
    var x = setInterval(async function () {
        if(account){
            let activatedFarms =await matrix.methods.ReferalsId(account).call();
            // activatedFarms =['15']
            console.log(activatedFarms)
            console.log(activatedFarms.length)
            if (activatedFarms.length === 0) {
                let lvlId = checkIfLogin.slice(5)
                let lvlPrice = farmPrice[lvlId - 1][1]

                console.log(lvlPrice)

                document.getElementById(checkIfLogin).innerHTML = `
                <a onclick="activateFarm(${lvlId},${lvlPrice})"><button>Активировать</button></a>`

                clearInterval(x)

            } else{
                for(let i=0;i<activatedFarms.length;i++){
                    let lvlId = checkIfLogin.slice(5)
                    if(lvlId===activatedFarms[i]){
                        let getId = `check${activatedFarms[i]}`
                        let ifAct = `ifAct${activatedFarms[i]}`
                        let referBonus = ''
                        let UserEarning = ''
                        document.getElementById(getId).classList.remove('d-flex')
                        document.getElementById(getId).innerHTML = `<p class='earning1' style='font-size:medium' >Направление бонус: ${referBonus}</p>
                    <p class='earning2'style='font-size:medium' >Ваш доход: ${UserEarning}</p>`
                        document.getElementById(ifAct).textContent = `Активированная ферма`
                        // clearInterval(x)
                        // let lvlId = checkIfLogin.slice(5)
                        console.log(lvlId)
                    } else{
                        let lvlPrice = farmPrice[lvlId - 1][1]

                        console.log(lvlPrice)

                        document.getElementById(checkIfLogin).innerHTML = `
                <a onclick="activateFarm(${lvlId},${lvlPrice})"><button>Активировать</button></a>`

                    } 
                }
                clearInterval(x)
            }


        } else{
            document.getElementById(checkIfLogin).innerHTML = `<button>требуется логин</button>`
            
            
        }
        
    }, 1000);
}

// checkIfActivated('check16')
// checkIfActivated('check15')
// checkIfActivated('check14')
// checkIfActivated('check13')
// checkIfActivated('check12')
// checkIfActivated('check11')
// checkIfActivated('check10')
// checkIfActivated('check9')
// checkIfActivated('check8')
// checkIfActivated('check7')
// checkIfActivated('check6')
// checkIfActivated('check5')
// checkIfActivated('check4')
// checkIfActivated('check3')
// checkIfActivated('check2')
// checkIfActivated('check1')


async function checkIfLogin(){
    await delay(3000)
    if(!account){
        window.open('./', '_self')
    }
    
    
}

checkIfLogin()

let text = document.getElementById("textBox-text").innerHTML;
console.log(text)
// document.getElementById('16').addEventListener('click', activateFarm(16,'50000000000000000'))