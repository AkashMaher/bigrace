

let Ader;
let inviteLink;
let UserAddress;
let Uid;
let textwithLink = 'Приглашаем вас сыграть в замечательную игру о скачках "BIG RACE"';
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


async function userInfo(){

    await delay(5000);

    let Url = window.location.href;
    let url = new URL(Url);
    code = url.searchParams.get("user");
    let search = window.location.search;
    console.log(search)
    let pathname = window.location.pathname
    console.log(code)
    console.log(pathname)
    if (search) {
        if (code) {
            if (code > 999977 && code < 999978 + byPass.length) {
                let i = 0;
                for (i = 0; i < byPass.length; i++) {
                    if (code === byPass[i][0]) {
                        UserAddress = byPass[i][1]
                        // console.log(UAddress)
                        let ader = UserAddress.slice(0, 5);
                        let lastader = UserAddress.slice(37, 42);
                        let adder = `${ader}....${lastader}`;
                        console.log(adder)
                        document.getElementById('userId').textContent = `${code}`;
                        document.getElementById('userAddress').textContent = `${adder}`;
                        inviteLink = `https://bigrace.io?invite=${UserAddress}`
                        // document.getElementById('referId').textContent = `${referre}`;
                        document.getElementById('MyReferLink').textContent = `${inviteLink}`
                        document.getElementById('inviteLinkShare').textContent = `${inviteLink}`
                    }
                    
                }
            } else {
                UserAddress = await matrix.methods.UniqueAddress(code).call()
                if (UserAddress ==='0x0000000000000000000000000000000000000000'){
                    document.getElementById('userId').textContent ='No User Found'
                    document.getElementById('userAddress').textContent = ''
                    document.getElementById('MyReferLink').textContent = ``
                    document.getElementById('inviteLinkShare').textContent = ``
                } else{
                let ader = UserAddress.slice(0, 5);
                let lastader = UserAddress.slice(37, 42);
                let adder = `${ader}....${lastader}`;
                console.log(adder)
                document.getElementById('userId').textContent = `${code}`;
                document.getElementById('userAddress').textContent = `${adder}`;
                inviteLink = `https://bigrace.io?invite=${UserAddress}`
                let refershortlink = `bigrace.io?invite=${adder}`
                document.getElementById('MyReferLink').textContent = `${refershortlink}`
                document.getElementById('inviteLinkShare').textContent = `${inviteLink}`
                }
            }
        } 
    } else {
        UserAddress = account;
        Uid = await matrix.methods.UniqueID(UserAddress).call()
        let admin = await matrix.methods.UniqueAddress(0).call()
        console.log(Uid)
        let inputVal = account;
        let adder = inputVal.length
        console.log(adder)
            for (let i = 0; i < byPass.length; i++) {
                if (inputVal == byPass[i][1]) {
                    let UserId = byPass[i][0]

                    console.log('test000')
                    // window.open(`./profile.html?user=${UserId}`, '_self')
                    let ader = UserAddress.slice(0, 5);
                    let lastader = UserAddress.slice(37, 42);
                    let adder = `${ader}....${lastader}`;
                    console.log(adder)
                    document.getElementById('userId').textContent = `${UserId}`;
                    document.getElementById('userAddress').textContent = `${adder}`;
                    inviteLink = `https://bigrace.io?invite=${UserAddress}`
                    // document.getElementById('referId').textContent = `${referre}`;
                    document.getElementById('MyReferLink').textContent = `${inviteLink}`
                    document.getElementById('inviteLinkShare').textContent = `${inviteLink}`
                }
            }
            // let UserId = await matrix.methods.UniqueID(inputVal).call()
            if (Uid === '0' && inputVal !== admin) {
                // toastr.error('user not found', "ERROR")
                
                console.log('test1')
            } else if (Uid !== '0') {
                // window.open(`./profile.html?user=${UserId}`, '_self')
                let ader = UserAddress.slice(0, 5);
                let lastader = UserAddress.slice(37, 42);
                let adder = `${ader}....${lastader}`;
                console.log(adder)
                document.getElementById('userId').textContent = `${Uid}`;
                document.getElementById('userAddress').textContent = `${adder}`;
                inviteLink = `https://bigrace.io?invite=${UserAddress}`
                let refershortlink = `bigrace.io?invite=${adder}`
                document.getElementById('MyReferLink').textContent = `${refershortlink}`
                document.getElementById('inviteLinkShare').textContent = `${inviteLink}`
                console.log('test11')
            }
            // document.getElementById('referId').textContent = `${referre}`;

    }
        // referre = await matrix.methods.ParentId('1', UserAddress).call();
        
}






async function copyAddress(){

        // var copyText = account;

        
    navigator.clipboard.writeText(UserAddress);

        /* Alert the copied text */
        toastr.info("Copied Address", "INFO");
}

async function copyInviteLink() {

    // inviteLink = await document.getElementById('MyReferLink').textContent


    navigator.clipboard.writeText(inviteLink);

    /* Alert the copied text */
    toastr.info("Copied Refferal Link", "INFO");
}


const shareButton = document.querySelector('#shareLink');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
    shareDialog.classList.add('is-open');
    sessionStorage.setItem('share',true)
});

closeButton.addEventListener('click', event => {
    shareDialog.classList.remove('is-open');

});


// const inviter = document.querySelector("#referId");

// inviter.addEventListener('click', async function (){
//     window.open(`./profile.html?user=${referre}`,'_self')
// })

// checkIfLogin()

const fbbtn = document.querySelector('#FacebookShare');
const twbtn = document.querySelector('#TwitterShare');
const libtn = document.querySelector('#LinkedInShare');
const emailbtn = document.querySelector('#EmailShare');

async function fbshare(){
    window.open(`https://www.facebook.com/share.php?u=${inviteLink}&quote=${textwithLink}`,'_blank')
    shareDialog.classList.remove('is-open');
}

async function tweetshare() {
    window.open(`http://www.twitter.com/share?url=${inviteLink}&text=${textwithLink}`, '_blank')
    shareDialog.classList.remove('is-open');
}

async function TgShare() {
    window.open(`https://t.me/share/url?url=${inviteLink}&text=${textwithLink}`, '_blank')
    shareDialog.classList.remove('is-open');
}

async function WaShare() {
    window.open(`https://api.whatsapp.com/send?phone=whatsappphonenumber&text=${textwithLink} ${inviteLink}`, '_blank')
    shareDialog.classList.remove('is-open');
}


window.addEventListener('load', async () => {
    document.querySelector("#copyAddress").addEventListener("click", copyAddress);
    document.querySelector("#copyReferLink").addEventListener("click", copyInviteLink);
    document.querySelector("#copylinkinvite").addEventListener("click", copyInviteLink);
    document.querySelector("#MyReferLink").addEventListener("click", copyInviteLink);
    document.querySelector('#FacebookShare').addEventListener("click", fbshare)
    document.querySelector('#TwitterShare').addEventListener("click", tweetshare)
    document.querySelector('#TelegramShare').addEventListener("click", TgShare)
    document.querySelector('#WhatsAppShare').addEventListener("click", WaShare)
});