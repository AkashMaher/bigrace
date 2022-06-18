

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

FarmOpenIn('1655640000', '15', 'YetToActivate15', 'Activated15')
FarmOpenIn('1655640000', '14', 'YetToActivate14', 'Activated14')
FarmOpenIn('1655640000', '13', 'YetToActivate13', 'Activated13')

FarmOpenIn('1655812800', '12', 'YetToActivate12', 'Activated12')
FarmOpenIn('1655812800', '11', 'YetToActivate11', 'Activated11')
FarmOpenIn('1655812800', '10', 'YetToActivate10', 'Activated10')

FarmOpenIn('1656072000', '9', 'YetToActivate9', 'Activated9')
FarmOpenIn('1656072000', '8', 'YetToActivate8', 'Activated8')
FarmOpenIn('1656072000', '7', 'YetToActivate7', 'Activated7')
FarmOpenIn('1656072000', '6', 'YetToActivate6', 'Activated6')
FarmOpenIn('1656072000', '5', 'YetToActivate5', 'Activated5')




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

// document.getElementById('16').addEventListener('click', activateFarm(16,'50000000000000000'))