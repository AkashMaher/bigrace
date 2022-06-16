

let Ader;
let inviteLink;
let UserAddress;


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
        if (!code) {
            UserAddress = account;
            let Uid = await matrix.methods.ReferalNumber('1',UserAddress).call()
            console.log(Uid)
            let ader = UserAddress.slice(0, 5);
            let lastader = UserAddress.slice(37, 42);
            let adder = `${ader}....${lastader}`;
            console.log(adder)
            document.getElementById('userAddress').textContent = `${adder}`;
            document.getElementById('userId').textContent = `${Uid}`;
            inviteLink = `https://bigrace.io?invite=${Uid}`
            document.getElementById('MyReferLink').textContent = `${inviteLink}`
            document.getElementById('inviteLinkShare').textContent = `${inviteLink}`
            
        } else{
            UserAddress = await matrix.methods.ReferalAddress('1',code).call()
            console.log(UserAddress)
            let ader = UserAddress.slice(0, 5);
            let lastader = UserAddress.slice(37, 42);
            let adder = `${ader}....${lastader}`;
            console.log(adder)
            document.getElementById('userId').textContent = `${code}`;
            document.getElementById('userAddress').textContent = `${adder}`;
            inviteLink = `https://bigrace.io?invite=${code}`
            document.getElementById('MyReferLink').textContent = `${inviteLink}`
            document.getElementById('inviteLinkShare').textContent = `${inviteLink}`

        }
    } else {
        UserAddress = account;
        let Uid = await matrix.methods.ReferalNumber('1', UserAddress).call()
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



const fbbtn = document.querySelector('#FacebookShare');
const twbtn = document.querySelector('#TwitterShare');
const libtn = document.querySelector('#LinkedInShare');
const emailbtn = document.querySelector('#EmailShare');

async function fbshare(){
    window.open(`https://www.facebook.com/share.php?u=${inviteLink}`,'_blank')
    shareDialog.classList.remove('is-open');
}

async function tweetshare() {
    window.open(`http://www.twitter.com/share?url=${inviteLink}`, '_blank')
    shareDialog.classList.remove('is-open');
}

// async function Lishare() {
//     window.open(`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2F${inviteLink}&source=LinkedIn`, '_blank')
//     shareDialog.classList.remove('is-open');
// }

// async function emailShare() {
//     window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${inviteLink}`, '_blank')
//     shareDialog.classList.remove('is-open');
// }


window.addEventListener('load', async () => {
    document.querySelector("#copyAddress").addEventListener("click", copyAddress);
    document.querySelector("#copyReferLink").addEventListener("click", copyInviteLink);
    document.querySelector("#copylinkinvite").addEventListener("click", copyInviteLink);
    document.querySelector('#FacebookShare').addEventListener("click", fbshare)
    document.querySelector('#TwitterShare').addEventListener("click", tweetshare)
    // document.querySelector('#LinkedInShare').addEventListener("click", Lishare)
    // document.querySelector('#EmailShare').addEventListener("click", emailShare)
});