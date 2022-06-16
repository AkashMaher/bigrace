"use strict";

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const delay = ms => new Promise(res => setTimeout(res, ms));
let web3Modal
let account;
let racing;
let matrix;
let provider;
let selectedAccount;
let tnxHash;
let code;
let horseNum;
let balance;



const RACINGABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"bids","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"horseNum","type":"uint256"}],"name":"buyTicket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finish","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"val","type":"uint256"}],"name":"getPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"horseFour","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"horseOne","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"horseThree","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"horseTwo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"prices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"racIter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"racingEnded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"speedUp","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"startRacing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"timeStampStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"timeStampStop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userChoice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"val","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const RACINGCONTRACT = '0xA87f9Dd5c062Fd0949Ad7870e30405047203873b'

const MatrixABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "Levels", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "NumLevels", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }, { "internalType": "uint256", "name": "ref", "type": "uint256" }], "name": "ParentId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }, { "internalType": "uint256", "name": "ref", "type": "uint256" }], "name": "ReferalAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }], "name": "ReferalNum", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }, { "internalType": "address", "name": "ref", "type": "address" }], "name": "ReferalNumber", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }], "name": "ReferalsId", "outputs": [{ "internalType": "uint256[]", "name": "IDs", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "Times", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "Values", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }, { "internalType": "uint256", "name": "ref", "type": "uint256" }], "name": "addUser", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "addUserToQueue", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "iter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "itersOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "timeStamp", "type": "uint256" }], "name": "newLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }]
const MatrixCONTRACT = '0xA004D89fDbaa38ed9a66f691230ec24f1a96a155'

const chainId = '97'
const Path = 5500
const returnUrl = window.location.protocol + "//" + window.location.host + Path

const objectMap = (object, mapFn) => {
    return Object.keys(object).reduce((result, key) => {
        result[key] = mapFn(object[key]);
        return result
    }, {})
}

const NETWORKS = {
    1: {
        name: "Ethereum",
        rpcURL: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        currency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        testnetID: 4,
        blockExplorerURL: "https://etherscan.io"
    },
    4: {
        name: "Rinkeby",
        rpcURL: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        currency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        testnetID: 4,
        blockExplorerURL: "https://rinkeby.etherscan.io"
    },
    137: {
        name: "Polygon",
        rpcURL: "https://polygon-rpc.com/",
        currency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18
        },
        testnetID: 80001,
        blockExplorerURL: "https://polygonscan.com"
    },
    80001: {
        name: "Mumbai (Polygon Testnet)",
        rpcURL: "https://rpc-mumbai.maticvigil.com/",
        currency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18
        },
        testnetID: 80001,
        blockExplorerURL: "https://mumbai.polygonscan.com"
    },
    56: {
        name: "Binance",
        rpcURL: "https://bsc-dataseed1.binance.org",
        currency: {
            name: "Binance Coin",
            symbol: "BNB",
            decimals: 18,
        },
        testnetID: 97,
        blockExplorerURL: "https://bscscan.com",
    },
    97: {
        name: "Binance Smart Chain Testnet",
        rpcURL: "https://data-seed-prebsc-2-s1.binance.org:8545",
        currency: {
            name: "Binance Coin",
            symbol: "tBNB",
            decimals: 18,
        },
        testnetID: 97,
        blockExplorerURL: "https://testnet.bscscan.com",
    },
    1285: {
        name: "Moonriver",
        rpcURL: "https://rpc.moonriver.moonbeam.network",
        currency: {
            name: "MOVR",
            symbol: "MOVR",
            decimals: 18,
        },
        testnetID: 1287,
        blockExplorerURL: "https://blockscout.moonriver.moonbeam.network"
    },
    1287: {
        name: "Moonbase Alpha",
        rpcURL: "https://rpc.testnet.moonbeam.network",
        currency: {
            name: "DEV",
            symbol: "DEV",
            decimals: 18,
        },
        testnetID: 1287,
        blockExplorerURL: "https://moonbase-blockscout.testnet.moonbeam.network"
    }
}


const walletConnectOptions = {
    // rpc: objectMap(NETWORKS, (value) => (value.rpcURL)),
    rpc:"https://data-seed-prebsc-2-s1.binance.org:8545",
    qrcodeModalOptions: {
        mobileLinks: [
            "metamask",
            "trust",
        ],
        
    },
}

function init() {


    web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions: {
            walletconnect: {
                package: WalletConnectProvider,
                options: walletConnectOptions
            }
        }
    });



    toastr.options.progressBar = true;
    toastr.options.showMethod = 'slideDown';
    toastr.options.hideMethod = 'slideUp';
    toastr.options.closeMethod = 'slideUp';

}



const swichNetwork = async (chainId) => {

    const currentChainId = await getNetworkId()

    if (currentChainId !== chainId) {
        try {
            await web3.currentProvider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: Web3.utils.toHex(chainId) }],
            });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                alert('add this chain id')
            }
        }
    }
}



async function onConnect() {
    let disconnected = sessionStorage.getItem('disconnected');
    console.log(`disconnected =`+ disconnected)
    if(disconnected === 'true') {toastr.success('Wallet Connected','SUCCESS')}
        // sessionStorage.setItem('disconnected', false)}
    else if(account) {toastr.info('Wallet Already Connected', 'INFO')}
    

    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
        var web3 = new Web3(provider);
        
        const currentChainId = await web3.eth.net.getNetworkType();
        console.log(currentChainId)

        if (currentChainId !== chainId) {
            try {
                await web3.currentProvider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(chainId) }],
                });
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    alert('add this chain id')
                }
            }
        }
        
        var accounts = await web3.eth.getAccounts();
        account = accounts[0];
        console.log(account)

        racing = new web3.eth.Contract(RACINGABI, RACINGCONTRACT)
        matrix = new web3.eth.Contract(MatrixABI, MatrixCONTRACT)

        let ader = account.slice(0, 3);
        let lastader = account.slice(38, 42);
        let adder = `${ader}...${lastader}`;
        console.log(adder)
        // document.getElementById('address').textContent = `${adder}`;

        let bal = await web3.eth.getBalance(`${account}`)
        let bals = await web3.utils.fromWei(bal, 'ether');
        let balan = parseFloat(bals)
        balance = balan.toFixed(2);
        // console.log(balance)
        // document.getElementById('balance').innerHTML = `${balance} BNB`

        sessionStorage.setItem('WalletConnected', true);
        // document.getElementById('connectName').textContent = 'Connected';
        // document.querySelector('.logout-btn').style.display = 'flex';
        sessionStorage.setItem('disconnected', false)
        // console.log("Provider is ", provider, "till here")
        // console.log('test')
        toastr.success('Wallet Connected', 'SUCCESS')
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

}



async function onConnected(){
    if(!account) return toastr.error('Please connect wallet', 'ERROR');
    window.open(`https://bscscan.com/address/${account}`, '_block')
}
async function onDisconnect(){
    let isConnected = sessionStorage.getItem('WalletConnected');
    console.log(isConnected)
    if (!isConnected) return console.log('Not Connected');
    // await web3Modal.clearCachedProvider();
    // document.getElementById('connectName').textContent = 'Connect Wallet';
    // document.querySelector('.logout-btn').style.display = 'none';
    sessionStorage.setItem('WalletConnected', false);
    sessionStorage.setItem('disconnected', true);
    toastr.success('Disconnected', 'SUCCESS')
    
}









async function onRefreshPage() {
    let disconnected = sessionStorage.getItem('disconnected');
    console.log(`disconnected =` + disconnected)
    if (disconnected === 'true') return;
    let isConnected = sessionStorage.getItem('WalletConnected');
    console.log(isConnected)
    if (!isConnected) return console.log('Not Connected'), web3Modal.clearCachedProvider();

    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();

        var web3 = new Web3(provider);
        
        const currentChainId = await web3.eth.net.getNetworkType();
        console.log(currentChainId)

        if (currentChainId !== chainId) {
            try {
                await web3.currentProvider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(chainId) }],
                });
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    alert('add this chain id')
                }
            }
        }
        racing = new web3.eth.Contract(RACINGABI, RACINGCONTRACT)
        matrix = new web3.eth.Contract(MatrixABI, MatrixCONTRACT)
        var accounts = await web3.eth.getAccounts();
        account = accounts[0];
        console.log(account.length)

        let ader = account.slice(0, 3);
        let lastader = account.slice(38, 42);
        let adder = `${ader}...${lastader}`;
        console.log(adder)
        // document.getElementById('address').textContent = `${adder}`;

        let bal = await web3.eth.getBalance(`${account}`)
        let bals = await web3.utils.fromWei(bal, 'ether');
        let balan = parseFloat(bals)
        balance = balan.toFixed(2);
        console.log(balance)
        // document.getElementById('balance').innerHTML = `${balance} BNB`


        console.log("Provider is ", provider, "till here")
        // document.getElementById('connectName').textContent = 'Connected';
        // document.querySelector('.logout-btn').style.display = 'flex';


        setInterval(async function () {
            if (!account) return;
            let isConnected = sessionStorage.getItem('WalletConnected');
            if (!isConnected) return console.log('Not Connected'), web3Modal.clearCachedProvider();

            //code here

            let bal = await web3.eth.getBalance(`${account}`)
            let bals = await web3.utils.fromWei(bal, 'ether');
            let balan = parseFloat(bals)
            balance = balan.toFixed(2);
            // console.log(balance)
            // document.getElementById('balance').innerHTML = `${balance} BNB`
            
        }, 30000);

    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

}

async function PreviewId() {
    if (!account) return toastr.error('Пожалуйста, сначала войдите с кошельком', 'ОШИБКА')
    let inputVal = await document.getElementById('inputPreviewId').value;
    let adder = inputVal.length
    console.log(adder)
    console.log(account)

    if (adder == 42) {
        let owner = await matrix.methods.owner().call()
        let userId = await matrix.methods.ReferalNumber('1', inputVal).call()
        if (userId == '0' && inputVal != owner) return toastr.error('User Not Registered')
        document.getElementById('userID').textContent = `ID пользователя : ${userId}`;
        document.getElementById('WalletAddress').textContent = `Адрес кошелька : ${inputVal}`;
    } else {
        // console.log(UID)
        
        let addres = await matrix.methods.ReferalAddress('1', inputVal).call()
        if (addres == '0x0000000000000000000000000000000000000000') return toastr.error('Invalid User Id')

        document.getElementById('userID').textContent = `ID пользователя : ${inputVal}`;
        document.getElementById('WalletAddress').textContent = `Адрес кошелька : ${addres}`;
    }


}


async function chooseHorse1(){
    document.getElementById('horse1').style.border ="6px solid red"
    document.getElementById('horse2').style.border = ""
    document.getElementById('horse3').style.border = ""
    document.getElementById('horse4').style.border = ""
    horseNum = 1
}

async function chooseHorse2() {
    document.getElementById('horse1').style.border = ""
    document.getElementById('horse2').style.border = "6px solid red"
    document.getElementById('horse3').style.border = ""
    document.getElementById('horse4').style.border = ""
    horseNum = 2
}

async function chooseHorse3() {
    document.getElementById('horse1').style.border = ""
    document.getElementById('horse2').style.border = ""
    document.getElementById('horse3').style.border = "6px solid red"
    document.getElementById('horse4').style.border = ""
    horseNum = 3
}
async function chooseHorse4() {
    document.getElementById('horse1').style.border = ""
    document.getElementById('horse2').style.border = ""
    document.getElementById('horse3').style.border = ""
    document.getElementById('horse4').style.border = "6px solid red"
    horseNum = 4
    console.log(horseNum)
}

// async function onStartRace() {
//     if(!account) return toastr.info('please connect wallet');
//     await racing.methods.startRacing().send({from:account})
//     toastr.info('racing started')
//     auto()
// }
async function onBuyTicket(){
    if(!account) return toastr.info('please login by connect wallet')
    console.log(horseNum)
    if (horseNum = "") return toastr.error('Please select horse');
    let price = await racing.methods.horseVal().call()
    console.log(price)
    var val = (price).toLocaleString('fullwide', { useGrouping: false });
    // var BN = _BN.BN;

    // var val = new BN(price).toString();
    console.log(val)
    await racing.methods.buyTicket(horseNum).send({ from: account, value: '50000000000000000' })
        .on('transactionHash', function (hash) {
            console.log(hash);
            tnxHash = hash;
        })
    toastr.success(`You have successfully purchased ticket for horse no. ${horseNum}, <a href="https://bscscan.com/tx/${tnxHash}" target="_blank" style="color:yellow;">view on etherscan</a>`, 'SUCCESS', { timeOut: 30 * 1000, enableHtml: true, tapToDismiss: false })
    
    
}



function openNavs() {
    if(document.getElementById('mySidenav').style.width=='250px'){
        closeNavs()
    } else{
    document.getElementById("mySidenav").style.width = "250px";
    }
}

function closeNavs() {
    document.getElementById("mySidenav").style.width = "0";
}
// async function onRegister(){
//     if(!account) return toastr.info('please connect wallet ')
//     document.querySelector('.modal').style.display = 'block';
// }


window.addEventListener('load', async () => {
    init();
    onRefreshPage();
    // document.querySelector("#connect").addEventListener("click", onConnect);
    // document.querySelector("#connect2").addEventListener("click", onConnect);
    // document.querySelector("#disconnect").addEventListener("click", onDisconnect);
    // document.querySelector("#connected").addEventListener("click", onConnected);
    
});

