

let Ader;
let inviteLink;
let UserAddress;
let referre;
let textwithLink = 'Приглашаем вас сыграть в замечательную игру о скачках "BIG RACE"';

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
            if (code > 999978 && code < 999978 + byPass.length) {
                let i = 0;
                for (i = 0; i < byPass.length; i++) {
                    if (code === byPass[i][0]) {
                        UserAddress = byPass[i][1]
                        console.log(UAddress)
                    }
                    let ader = UserAddress.slice(0, 5);
                    let lastader = UserAddress.slice(37, 42);
                    let adder = `${ader}....${lastader}`;
                    console.log(adder)
                    document.getElementById('userId').textContent = `${code}`;
                    document.getElementById('userAddress').textContent = `${adder}`;
                    inviteLink = `https://bigrace.io?invite=${code}`
                    // document.getElementById('referId').textContent = `${referre}`;
                    document.getElementById('MyReferLink').textContent = `${inviteLink}`
                    document.getElementById('inviteLinkShare').textContent = `${inviteLink}`
                }
            } 
        } else {
            UserAddress = await matrix.methods.UniquieAddress(code).call()
            // console.log(Uid)
            let ader = UserAddress.slice(0, 5);
            let lastader = UserAddress.slice(37, 42);
            let adder = `${ader}....${lastader}`;
            console.log(adder)
            document.getElementById('userId').textContent = `${code}`;
            document.getElementById('userAddress').textContent = `${adder}`;
            inviteLink = `https://bigrace.io?invite=${Uid}`
            document.getElementById('MyReferLink').textContent = `${inviteLink}`
            document.getElementById('inviteLinkShare').textContent = `${inviteLink}`
        }
    } else {
        UserAddress = account;
        Uid = await matrix.methods.UniqueID(UserAddress).call()
        let admin = await matrix.methods.UniqueAddress(0).call()

        if(Uid===0 && UserAddress !=admin){

            for (let i = 0; i > byPass.length; i++) {
                if (account === byPass[i][1]) {
                    Uid = byPass[i][0];
                    console.log(Uid)
                    let ader = UserAddress.slice(0, 5);
                    let lastader = UserAddress.slice(37, 42);
                    let adder = `${ader}....${lastader}`;
                    console.log(adder)
                    document.getElementById('userId').textContent = `${Uid}`;
                    document.getElementById('userAddress').textContent = `${adder}`;
                    inviteLink = `https://bigrace.io?invite=${Uid}`
                    document.getElementById('MyReferLink').textContent = `${inviteLink}`
                    document.getElementById('inviteLinkShare').textContent = `${inviteLink}`
                    // document.getElementById('referId').textContent = `${referre}`;
                }
            }
        } else{
            Uid = await matrix.methods.UniqueID(UserAddress).call()
            console.log(Uid)
            let ader = UserAddress.slice(0, 5);
            let lastader = UserAddress.slice(37, 42);
            let adder = `${ader}....${lastader}`;
            console.log(adder)
            document.getElementById('userId').textContent = `${Uid}`;
            document.getElementById('userAddress').textContent = `${adder}`;
            inviteLink = `https://bigrace.io?invite=${Uid}`
            document.getElementById('MyReferLink').textContent = `${inviteLink}`
            document.getElementById('inviteLinkShare').textContent = `${inviteLink}`
            // document.getElementById('referId').textContent = `${referre}`;

        }
        // referre = await matrix.methods.ParentId('1', UserAddress).call();
        
    }
}

async function copyAddress(){

        // var copyText = account;

        
    navigator.clipboard.writeText(UserAddress);

        /* Alert the copied text */
        toastr.info("Copied Address", "INFO");
}

async function copyInviteLink() {

    inviteLink = await document.getElementById('MyReferLink').textContent


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


const inviter = document.querySelector("#referId");

inviter.addEventListener('click', async function (){
    window.open(`./profile.html?user=${referre}`,'_self')
})



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
    document.querySelector('#FacebookShare').addEventListener("click", fbshare)
    document.querySelector('#TwitterShare').addEventListener("click", tweetshare)
    document.querySelector('#TelegramShare').addEventListener("click", TgShare)
    document.querySelector('#WhatsAppShare').addEventListener("click", WaShare)
});