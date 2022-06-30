
let InputID;
let UAddress;
let inviter;

const byPass = [
  ['999978', '0x93965A19CD9f32Ea9bF8E15BCa3C5BE1Dd2D220A'],
  ['999979', '0x5fC94d1f94189Aac055D4C38431dBCde64d32E23'],
  ['999980', '0x5d92df666a2c293510654c8bd7B210359728635E'],
  ['999981', '0xBB4661E3281d3D9537017B4DC8753c006c7237a7'],
  ['999982', '0xd2393B19689593502F90D2097A365dfeAA6101A6'],
  ['999983', '0xd72730056CF8125c0f4cB9c85078163E268746A7'],
  ['999984', '0x06634FF3738BbFb97206e3626d58E1cF999D891e'],
  ['999985', '0xe5a6E7aC5E62Aab66AFF665c8C12fB077CFB56B4'],
  ['999986', '0x3e8b347e6cd277743244bc5ff03356195e274667'],
  ['999987', '0xC30EaDc42380632B8f79a0dD36A088D6c0FE0573'],
  ['999988', '0xeaBE666dE328895dba3b062a518ca33B70ca87d5'],
  ['999989', '0xCc11c67513307b609Cfb5d8446eA25A1E0305552'],
  ['999990', '0x39adeBF21EE873247FfE7d4C892ddF9E491d1440'],
  ['999991', '0xCf84f0faB243Bd2FD6267073540fbfD3B7DC7016'],
  ['999992', '0x737d023E6aafC8e859C6939c041f98Fa13cF84CE'],
  ['999993', '0xF203d98c761BD9fcFaEa55dc7C35aAC31c65458e'],
  ['999994', '0xad5255a0bcc0787154D7339cB6633479b0dEFb7b'],
  ['999995', '0xF314BE2bA72897A2feCd7041bc8BE593DA54f6d6'],
  ['999996', '0x92Cf5a24B631ECA5619b83DB429A7Df28eCC4Abd'],
  ['999997', '0x1aaFedF0282D5A5322233260c4B8a59C2eAC7CAF'],
  ['999998', '0xb643E289A9C70f8C11096b1A304537362d05aE13'],
  ['999999', '0xcD7268a31562264e58C9D807f0e3AD64ca63539A'],
  ['1000000', '0x2943885945A5E1f49ea4BF6F3507fd90403d3Fd0']
]
async function invCheck() {

  // let Url = window.location.href;
  // let url = new URL(Url);
  inviter = await sessionStorage.getItem('Inviter')
  console.log(inviter)
  if(inviter !==null){
    document.getElementById('inviteCode').textContent = `${inviter}`
  }
        
}





async function activate(){

  let activatedFarms = await matrix.methods.ReferalsId(account).call();
  // if (account === '0x2F1b87C0EE11e810b8Bf9B5D78e70D400eb3f645') activatedFarms = ['15']
  // console.log(activatedFarms)
  // account = '0x3fee240aae8881a679dec62de0f068a4cbac51cd'
  console.log(activatedFarms.length)
  if (activatedFarms.length === 0) {

    // let Url = window.location.href;
    // let url = new URL(Url);
    // inviter = url.searchParams.get("invite");
    let testttttt = await sessionStorage.getItem('Inviter')

    console.log(testttttt)

    inviter = await sessionStorage.getItem('Inviter')

    let id = document.getElementById('lvls').value;
    if (id == '1') { Referval = '50000000000000000'; InputID = 16 }
    else if (id == '2') { Referval = '70000000000000000'; InputID = 15 }
    else if (id == "3") { Referval = '100000000000000000'; InputID = 14 }
    else if (id == "4") { Referval = '140000000000000000'; InputID = 13 }
    else if (id == "16") { Referval = '8000000000000000000'; InputID = 1 }
    else if (id == "15") { Referval = '6500000000000000000'; InputID = 2 }
    else if (id == "14") { Referval = '4400000000000000000'; InputID = 3 }
    else if (id == "13") { Referval = '3200000000000000000'; InputID = 4 }
    else if (id == "12") { Referval = '2600000000000000000'; InputID = 5 }
    else if (id == "11") { Referval = '1600000000000000000'; InputID = 6 }
    else if (id == "10") { Referval = '1100000000000000000'; InputID = 7 }
    else if (id == "9") { Referval = '800000000000000000'; InputID = 8 }
    else if (id == "8") { Referval = '550000000000000000'; InputID = 9 }
    else if (id == "7") { Referval = '400000000000000000'; InputID = 10 }
    else if (id == "6") { Referval = '280000000000000000'; InputID = 11 }
    else if (id == "5") { Referval = '200000000000000000'; InputID = 12 }

    ReferId = await matrix.methods.ReferalNumber(InputID, inviter).call()
    console.log(ReferId)
    console.log(InputID, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    sessionStorage.setItem('User', true);
    window.open('./profile.html', '_self')
  } else {
    toastr.info('User Already Registred. Redirecting to your account!')
    await delay(3000)
    window.open(`./profile.html`,'_self')
  }

  
    } 
  


async function onActivate2() {

  let id = document.getElementById('lvls').value;
  if (id == '1') { Referval = '50000000000000000'; InputID = 16 }
  else if (id == '2') { Referval = '70000000000000000'; InputID = 15 }
  else if (id == "3") { Referval = '100000000000000000'; InputID = 14 }
  else if (id == "4") { Referval = '140000000000000000'; InputID = 13 }
  else if (id == "16") { Referval = '8000000000000000000'; InputID = 1 }
  else if (id == "15") { Referval = '6500000000000000000'; InputID = 2 }
  else if (id == "14") { Referval = '4400000000000000000'; InputID = 3 }
  else if (id == "13") { Referval = '3200000000000000000'; InputID = 4 }
  else if (id == "12") { Referval = '2600000000000000000'; InputID = 5 }
  else if (id == "11") { Referval = '1600000000000000000'; InputID = 6 }
  else if (id == "10") { Referval = '1100000000000000000'; InputID = 7 }
  else if (id == "9") { Referval = '800000000000000000'; InputID = 8 }
  else if (id == "8") { Referval = '550000000000000000'; InputID = 9 }
  else if (id == "7") { Referval = '400000000000000000'; InputID = 10 }
  else if (id == "6") { Referval = '280000000000000000'; InputID = 11 }
  else if (id == "5") { Referval = '200000000000000000'; InputID = 12 }

  await matrix.methods.addUser(InputID, 0).send({ from: account, value: Referval })
  sessionStorage.setItem('User', true);
  window.open('./profile.html', '_self')

}

async function isInvited() {
  
    let Url = window.location.href;
    let url = new URL(Url);
    inviter = url.searchParams.get("invite");
  let search =  window.location.search;
  console.log(search)
    let pathname = window.location.pathname
    console.log('code is: '+inviter)
    console.log(pathname)
    if(search){
      if (inviter.length > 41 && inviter.length<45){

        await sessionStorage.setItem('Inviter',inviter)
        window.open(`./invite.html?invite=${inviter}`, '_self')
        // invCheck()
        // automate2()
        document.querySelector("#register").addEventListener("click", onConnect)
        document.querySelector('#activate').addEventListener('click', activate)
        document.querySelector("#register").addEventListener("click", automate2);
      }
          // document.getElementById('root').innerHTML = invited;
        
      
    } 
    
    else {
      // document.getElementById('root').innerHTML = main;
      document.querySelector('#activate2').addEventListener('click', onActivate2)
      // document.querySelector("#register").addEventListener("click", automate);
      // document.querySelector("#register").addEventListener("click", onConnect);
      document.querySelector('#preview').addEventListener('click', PreviewId)
    }

  }


  // async function automate2(){
    
  //   if(account){
  //     const boxx = document.getElementById('exampleModal2');
  //     boxx.style.display = 'block';
  //     boxx.classList.add('show')
  //     boxx.setAttribute('role','dialog')
  //   } else{
  //     onConnect()
  //   }
    
  // }




async function automate2() {
  var x = setInterval(function () {
    if (!account) {
      document.getElementById('ifNo').style.display = 'flex'
      document.getElementById('ifYes').style.display = 'none'
      
      console.log('test1')
    } else {
      document.getElementById('ifNo').style.display = 'none'
      document.getElementById('ifYes').style.display = 'flex'
      clearInterval(x)
      console.log('test2')
    }
  }, 1000);

}


// async function automate(){
//   var y= setInterval(async function ()  {
//     let activatedFarms;
//     if(account) activatedFarms = await matrix.methods.ReferalsId(account).call();
//     if (!account) {
      
//       // console.log('test1')
//     } else if (activatedFarms.legth === 0) {
//           document.getElementById('ifNo').style.display = 'none'
//           document.getElementById('ifYes').style.display = 'flex'
//           clearInterval(y)
//           console.log('new user')
//     } else if(activatedFarms.length>0){
//           // window.open('./profile.html', '_self')
//           console.log('old user')
//           clearInterval(y)
//     }
    
//   }, 1000);
  
// }



async function automate(){
  await onConnect()

  if(!account) return console.log('account')
  let activatedFarms = await matrix.methods.ReferalsId(account).call();
  console.log(activatedFarms)
  console.log(activatedFarms.length)
  if (activatedFarms.length === 0) {
    document.getElementById('ifNo').style.display = 'none'
    document.getElementById('ifYes').style.display = 'flex'
    // clearInterval(y)
    console.log('new user')
  } else{
    window.open('./profile.html', '_self')
    console.log('old user')
    // clearInterval(y)
  
}
}





window.addEventListener('load', async () => {
  // document.querySelector("#engPdf").addEventListener("click", readPdfEng);
});