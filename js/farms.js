

async function UsersFarms(){
    document.getElementById('16').classList.add('horse-clock-container')
}


UsersFarms()

async function activateFarm(lvlID,Value){
    console.log('Test')
    await matrix.methods.addUser(lvlID, 0).send({ from: account, value: Value })
}


async function FarmOpenIn(timestamp,id){

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
            document.getElementById(id).textContent =days+"d "+hours+"h "+minutes+"m";

        if (distance < 0) {
            clearInterval(x);
            
        } else {
        }
    }, 1000);
}

FarmOpenIn('1655640000','15')
FarmOpenIn('1655640000', '14')
FarmOpenIn('1655640000', '13')

FarmOpenIn('1655812800', '12')
FarmOpenIn('1655812800', '11')
FarmOpenIn('1655812800', '10')

FarmOpenIn('1656072000', '9')
FarmOpenIn('1656072000', '8')
FarmOpenIn('1656072000', '7')
FarmOpenIn('1656072000', '6')
FarmOpenIn('1656072000', '5')


// document.getElementById('16').addEventListener('click', activateFarm(16,'50000000000000000'))