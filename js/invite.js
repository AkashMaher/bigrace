
let maxNum
let Referval;

async function invCheck(){
    if(!account) return;
    await delay(4000);
    let Url = window.location.href;
    let url = new URL(Url);
    code = url.searchParams.get("invite");
    console.log(code)
    if(code == null) return code = '0';
    // if (code.length != 6) {document.getElementById('inviteCode').textContent = 'Invalid invite code'}
    document.getElementById('inviteCode').textContent = `ID ${code}`;
        maxNum = await matrix.methods.ReferalNum(1).call()
    console.log(maxNum)
    if (code>maxNum-1) return document.getElementById('inviteCode').textContent = `Invalid Id`, code = "0";
}


async function activate(){
    if (!account) return;
    let id = document.getElementById('lvls').value;
    
    if(id==1){
        Referval = '50000000000000000'
    }
    else if(id==2){
        Referval = '70000000000000000'
    } 
    else if(id==3){
        Referval = '100000000000000000'
    } 
    else if(id==4){
        Referval = '140000000000000000'
    }
    else if(id==16){
        Referval = '8000000000000000000'
    }
    await matrix.methods.addUser(id,code).send({from:account,value:Referval})
    delay(4000)
    window.open(`./profile.html`,'_self')

}

window.addEventListener('load', async () => {
    
    // document.querySelector('#activate2').addEventListener('click', activate)

});