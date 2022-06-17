
let InputID

async function invCheck() {

  if (!account) return;
  await delay(4000);
  let Url = window.location.href;
  let url = new URL(Url);
  code = url.searchParams.get("invite");
  console.log(code)
  
  if (code == null || code == undefined) {
    code = 0;
  }
  // if (code.length != 6) {document.getElementById('inviteCode').textContent = 'Invalid invite code'}
  document.getElementById('inviteCode').textContent = `ID ${code}`;
  maxNum = await matrix.methods.ReferalNum(1).call()
  console.log(maxNum)
  if (code > maxNum - 1) {
    document.getElementById('inviteCode').textContent = `Invalid Id`
    code = 0
  }

  
}
const byPass = [
  { '999978': '0x93965A19CD9f32Ea9bF8E15BCa3C5BE1Dd2D220A' },
  { '999979': '0x5fC94d1f94189Aac055D4C38431dBCde64d32E23' },
  { '999980': '0x5d92df666a2c293510654c8bd7B210359728635E' },
  { '999981': '0xBB4661E3281d3D9537017B4DC8753c006c7237a7' },
  { '999982': '0xd2393B19689593502F90D2097A365dfeAA6101A6' },
  { '999983': '0xd72730056CF8125c0f4cB9c85078163E268746A7' },
  { '999984': '0x06634FF3738BbFb97206e3626d58E1cF999D891e' },
  { '999985': '0xe5a6E7aC5E62Aab66AFF665c8C12fB077CFB56B4' },
  { '999986': '0x3e8b347e6cd277743244bc5ff03356195e274667' },
  { '999987': '0xC30EaDc42380632B8f79a0dD36A088D6c0FE0573' },
  { '999988': '0xeaBE666dE328895dba3b062a518ca33B70ca87d5' },
  { '999989': '0xCc11c67513307b609Cfb5d8446eA25A1E0305552' },
  { '999990': '0x39adeBF21EE873247FfE7d4C892ddF9E491d1440' },
  { '999991': '0xCf84f0faB243Bd2FD6267073540fbfD3B7DC7016' },
  { '999992': '0x737d023E6aafC8e859C6939c041f98Fa13cF84CE' },
  { '999993': '0xF203d98c761BD9fcFaEa55dc7C35aAC31c65458e' },
  { '999994': '0xad5255a0bcc0787154D7339cB6633479b0dEFb7b' },
  { '999995': '0xF314BE2bA72897A2feCd7041bc8BE593DA54f6d6' },
  { '999996': '0x92Cf5a24B631ECA5619b83DB429A7Df28eCC4Abd' },
  { '999997': '0x1aaFedF0282D5A5322233260c4B8a59C2eAC7CAF' },
  { '999998': '0xb643E289A9C70f8C11096b1A304537362d05aE13' },
  { '999999': '0xcD7268a31562264e58C9D807f0e3AD64ca63539A' }
]

async function activate() {
  if (!account) return;
  let id = document.getElementById('lvls').value;
  
  if (code =='999978') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x93965A19CD9f32Ea9bF8E15BCa3C5BE1Dd2D220A'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }


  else if(code == '999979') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x5fC94d1f94189Aac055D4C38431dBCde64d32E23'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }


  else if (code == '999980') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x5d92df666a2c293510654c8bd7B210359728635E'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999981') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xBB4661E3281d3D9537017B4DC8753c006c7237a7' 

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999982') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xd2393B19689593502F90D2097A365dfeAA6101A6' 

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999983') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xd72730056CF8125c0f4cB9c85078163E268746A7'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999984') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x06634FF3738BbFb97206e3626d58E1cF999D891e' 

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999985') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xe5a6E7aC5E62Aab66AFF665c8C12fB077CFB56B4'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if(code == '999986') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x3e8b347e6cd277743244bc5ff03356195e274667'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999987') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xC30EaDc42380632B8f79a0dD36A088D6c0FE0573'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999988') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xeaBE666dE328895dba3b062a518ca33B70ca87d5'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999989') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xCc11c67513307b609Cfb5d8446eA25A1E0305552'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999990') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x39adeBF21EE873247FfE7d4C892ddF9E491d1440'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999991') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xCf84f0faB243Bd2FD6267073540fbfD3B7DC7016'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999992') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x737d023E6aafC8e859C6939c041f98Fa13cF84CE' 

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999993') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xF203d98c761BD9fcFaEa55dc7C35aAC31c65458e'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999994') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xad5255a0bcc0787154D7339cB6633479b0dEFb7b'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999995') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xF314BE2bA72897A2feCd7041bc8BE593DA54f6d6'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999996') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x92Cf5a24B631ECA5619b83DB429A7Df28eCC4Abd'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999997') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x1aaFedF0282D5A5322233260c4B8a59C2eAC7CAF'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999998') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xb643E289A9C70f8C11096b1A304537362d05aE13'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }

  else if (code == '999999') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0xcD7268a31562264e58C9D807f0e3AD64ca63539A'

    if (id == '1') {
      
      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
    
  }  

  else if (code == '1000000') {
    document.getElementById('inviteCode').textContent = `ID ${code}`;
    let adderrr = '0x2943885945A5E1f49ea4BF6F3507fd90403d3Fd0'

    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(InputID, Referval, account)

    let ReferId = await matrix.methods.ReferalNumber(InputID, adderrr).call()

    ReferId = parseInt(ReferId)
    delay(2000)
    console.log(id, ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')

  }
  























  // code = await parseInt(code)
  else if (code == NaN) {
    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(id, Referval,account)

    await matrix.methods.addUser(InputID, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')

  }else if (code == null) {
    code = 0
    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }
    console.log(id)

    await matrix.methods.addUser(InputID, 0).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')

  } else{

    let Url = window.location.href;
    let url = new URL(Url);
    code = await url.searchParams.get("invite");
    console.log(code)


    if (id == '1') {

      Referval = '50000000000000000'
      InputID = 16
    }
    else if (id == '2') {
      Referval = '70000000000000000'
      InputID = 15
    }
    else if (id == "3") {
      Referval = '100000000000000000'
      InputID = 14
    }
    else if (id == "4") {
      Referval = '140000000000000000'
      InputID = 13
    }
    else if (id == "16") {
      InputID = 1
      Referval = '8000000000000000000'
    }

    let adderrr = await matrix.methods.UniqueAddress(code).call()
    console.log(adderrr)
    let ReferId = await matrix.methods.ReferalNumber(InputID,adderrr).call()

    ReferId = parseInt(ReferId)
    console.log(InputID,ReferId)

    await matrix.methods.addUser(InputID, ReferId).send({ from: account, value: Referval })
    delay(4000)
    window.open(`./profile.html`, '_self')
  }
  console.log(code)

  
}

async function isInvited() {
  
    let Url = window.location.href;
    let url = new URL(Url);
    code = url.searchParams.get("invite");
  let search =  window.location.search;
  console.log(search)
    let pathname = window.location.pathname
    console.log('code is: '+code)
    console.log(pathname)
    if(search){
      if(!code){
          // document.getElementById('root').innerHTML = main;
        // automate()
        // document.querySelector('#activate2').addEventListener('click', activate)
        // document.querySelector("#register").addEventListener("click", onConnect);
      } else{
          // document.getElementById('root').innerHTML = invited;
          window.open(`./invite.html?invite=${code}`,'_self')
        invCheck()
        automate2()
        document.querySelector("#register").addEventListener("click", onConnect)
        document.querySelector('#activate').addEventListener('click', activate)
      }
    } 
    
    else {
      // document.getElementById('root').innerHTML = main;
      document.querySelector('#activate2').addEventListener('click', activate)
      automate()
      document.querySelector("#register").addEventListener("click", onConnect);
      document.querySelector('#preview').addEventListener('click', PreviewId)
    }

  }





async function automate2() {
  setInterval(async function () {
    if (!account) {
      document.getElementById('ifYes').style.display = 'none'
      document.getElementById('ifNo').style.display = 'flex'
      // console.log('test1')
    } else {
      
      document.getElementById('ifNo').style.display = 'none'
      document.getElementById('ifYes').style.display = 'flex'
      // console.log('test2')
    }
  }, 1000);

}


async function automate(){
  var y= setInterval(async function ()  {
    if (!account) {
      document.getElementById('playy').style.display = 'none'
      document.getElementById('ifYes').style.display = 'none'
      document.getElementById('ifNo').style.display = 'flex'
      // console.log('test1')
    } else {
      owner = await matrix.methods.owner().call()
      userId = await matrix.methods.ReferalNumber('1', account).call()
      if (userId == '0' && account != owner) {
        document.getElementById('ifNo').style.display = 'none'
        document.getElementById('logintoPlay').style.display = 'none'
        document.getElementById('ifYes').style.display = 'flex'
        document.getElementById('playy').style.display = 'flex'
      } else {
        clearInterval(y);
      } 
    }
  }, 1000);
  
}






window.addEventListener('load', async () => {
  // document.querySelector("#engPdf").addEventListener("click", readPdfEng);
});