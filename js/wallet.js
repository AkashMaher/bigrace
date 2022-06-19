"use strict";

const Web3Modal = window.Web3Modal.default;
console.log(Web3Modal)
const WalletConnectProvider = window.WalletConnectProvider.default;
const delay = ms => new Promise(res => setTimeout(res, ms));
let web3Modal
let account;
let racing;
let matrix;
let provider;
let selectedAccount;
let tnxHash;
let horseNum;
let balance;
let userId;
let owner;
let referr;
let maxNum
let Referval;
let langID;
var selectIndex=4;
let code=0;
let mm1;
let mm2
let mm3
let mm4
let mm5
let mm6
let mm7
let mm8
let mm9
let mm10
let mm11
let mm12
let mm13
let mm14
let mm15
let mm16



const RACINGABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "bids", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "horseNum", "type": "uint256" }], "name": "buyTicket", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "changeOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "finish", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "val", "type": "uint256" }], "name": "getPrices", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "horseFour", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "horseOne", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "horseThree", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "horseTwo", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "prices", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "racIter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "racingEnded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "speedUp", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "startRacing", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "timeStampStart", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "timeStampStop", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "userChoice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "winners", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "val", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const RACINGCONTRACT = '0x7c941127D5544cDb9cF251b34E3f134c937a3809'

const MatrixABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "Levels", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "NumLevels", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }, { "internalType": "address", "name": "ref", "type": "address" }], "name": "ParentId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }, { "internalType": "uint256", "name": "ref", "type": "uint256" }], "name": "ReferalAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }], "name": "ReferalNum", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }, { "internalType": "address", "name": "ref", "type": "address" }], "name": "ReferalNumber", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "ref", "type": "address" }], "name": "ReferalsId", "outputs": [{ "internalType": "uint256[]", "name": "returnLevels", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "Times", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "UniqueAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "UniqueID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "UniqueIter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "Values", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }, { "internalType": "uint256", "name": "ref", "type": "uint256" }], "name": "addUser", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "addUserToQueue", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "ReferalNumbers", "type": "uint256[]" }, { "internalType": "address[]", "name": "newUsers", "type": "address[]" }, { "internalType": "uint256", "name": "size", "type": "uint256" }], "name": "addUsers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "changeOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "Level", "type": "uint256" }, { "internalType": "address", "name": "ref", "type": "address" }], "name": "isUser", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "iter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "itersOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "timeStamp", "type": "uint256" }], "name": "newLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }]
const MatrixCONTRACT = '0x66Dd8c90389C914bD509160Df077f946Eed4E22f'


const mmAbi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timeStamp",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "Owner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Childrens",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Cycles",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Parent",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Queue",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "QueueFinish",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "Referal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "User",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "msgSender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "ReferalNumber",
                "type": "uint256"
            }
        ],
        "name": "addUserPay",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newUser",
                "type": "address"
            }
        ],
        "name": "addUserToQueue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[]",
                "name": "ReferalNumbers",
                "type": "uint256[]"
            },
            {
                "internalType": "address[]",
                "name": "newUsers",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "size",
                "type": "uint256"
            }
        ],
        "name": "addUsers",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "changeOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "r",
                "type": "uint256"
            }
        ],
        "name": "getQueue",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "r",
                "type": "address"
            }
        ],
        "name": "getReferal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "a",
                "type": "address"
            }
        ],
        "name": "isUser",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "myParant",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "payValue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "number",
                "type": "uint256"
            }
        ],
        "name": "random",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]



const mmAddresses = [
    '0xB1274FFBBd13238667A5822B62340fd0F72d6F02',
    '0x0Db54cac64ffa8F0461D9e117A9D4Ae58F6FB451',
    '0x8Ee700C4BccfEFe9405f7fFAa71A6DA4Ed503b05',
    '0x5647F120671Fc5CC71B539172CFD3C8fdEcfe81A',
    '0x246b05de9Ae167B369Efd43f039afBBe49e76602',
    '0x1dFDA3fEB83E3127A020a12f7514552922C3426c',
    '0x0684DabeB2d6A9e04C1DbF01ae1243e405479d59',
    '0xbE2197DC9127dD783fE631b8C81d8916502Ab9d4',
    '0x41dCc929D64167c155839C64281E1017A42b6854',
    '0xF939741d6b2316B58350d5F987255231acD07e06',
    '0xcB4494b279dEf632C2b7a5545038aFBe77a89799',
    '0x92055866253b31F865BDa4e5aC433B816668BD34',
    '0x5996Dfb00f7016b78480c8109F30E10fF1be24a1',
    '0x051Aa8F650a954c9546874C3Eda55212eC98A4A3',
    '0xfCaf5fd845661594835B0EEa2B86CbaF3243212B',
    '0x748E8B4CdEC006a18a06cc7E955060e80AB50a49']


















const chainId = '56'
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
        rpcURL: "https://bsc-dataseed1.binance.org:443",
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
    rpc:{
        56:"https://bsc-dataseed1.binance.org:443"
    },
    qrcodeModalOptions: {
        mobileLinks: [
            "metamask",
            "trust",
        ],
        
    },
}

// provider = new WalletConnectProvider({
//     rpc: {
//         56: "https://bsc-dataseed.binance.org",
//     },
// });

// await provider.enable();



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
    else if(account) {console.log('already connected')}
    

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
        // web3 = new Web3('https://bsc-dataseed1.binance.org:443');
        var accounts = await web3.eth.getAccounts();
        account = accounts[0];
        console.log(account)

        racing = new web3.eth.Contract(RACINGABI, RACINGCONTRACT)
        matrix = new web3.eth.Contract(MatrixABI, MatrixCONTRACT)
        

        let ader = account.slice(0, 3);
        let lastader = account.slice(38, 42);
        let adder = `${ader}...${lastader}`;
        console.log(adder)

        let bal = await web3.eth.getBalance(`${account}`)
        let bals = await web3.utils.fromWei(bal, 'ether');
        let balan = parseFloat(bals)
        balance = balan.toFixed(2);
        owner = await matrix.methods.owner().call();
        userId = await matrix.methods.UniqueID(account).call();
        // referr = await matrix.methods.ParentId('1',account).call();

        sessionStorage.setItem('WalletConnected', true);
        sessionStorage.setItem('disconnected', false)
        toastr.success('Wallet Connected', 'SUCCESS')

        
        // document.getElementById('ifNo2').style.opacity = '0';
        // console.log('invite user')
        
        // if (account) {
        //     document.getElementById('ifYes').style.display = 'flex';
        //     document.getElementById('ifNo').style.display = 'none';
        //     console.log('new user')
        // } else {
        //     document.getElementById('ifYes').style.display = 'flex';
        //     document.getElementById('ifNo').style.display = 'none';
        //     console.log('old user')
        // }

        

        // let lvl = matrix.methods.referalAddress

        let childs = await mm1.methods.Childrens(1, 0).call()

        console.log(childs)
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

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

        owner = await matrix.methods.owner().call()
        userId = await matrix.methods.ReferalNumber('1', account).call()
        let bal = await web3.eth.getBalance(`${account}`)
        let bals = await web3.utils.fromWei(bal, 'ether');
        let balan = parseFloat(bals)
        balance = balan.toFixed(2);
        console.log(balance)


        console.log("Provider is ", provider, "till here")


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

const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
// console.log(web3)

racing = new web3.eth.Contract(RACINGABI, RACINGCONTRACT)
matrix = new web3.eth.Contract(MatrixABI, MatrixCONTRACT)

mm1 = new web3.eth.Contract(mmAbi, mmAddresses[0])
console.log(mm1)

// let childs = mm1.methods.Childrens().call()

async function MaxUsers(id){
    let Numss = await matrix.methods.UniqueIter().call()
    Numss = parseInt(`${Numss}`)
    let Nums2 = parseInt(`${byPass.length}`)
    document.getElementById(id).textContent = Numss+Nums2;
}


async function PreviewId() {
    let inputVal = await document.getElementById('inputPreviewId').value;
    let adder = inputVal.length
    console.log(adder)
    if (adder == 42) {
        for(let i=0;i<byPass.length;i++){
        if(inputVal==byPass[i][1]){
            let UserId = byPass[i][0]
            
            window.open(`./profile.html?user=${UserId}`,'_self')
        }
        } 
        let admin = await matrix.methods.UniqueAddress(0).call()
        let UserId= await matrix.methods.UniqueID(inputVal).call()
        if(UserId==='0' && inputVal !== admin){
            toastr.error('user not found',"ERROR")
            console.log('test1')
        }else if(UserId !=='0'){
            window.open(`./profile.html?user=${UserId}`, '_self')
            console.log('test11')
        }

    }else {
        let lenn = byPass.length
        if (inputVal > 999977 && inputVal < byPass.length + 999978){
            window.open(`./profile.html?user=${inputVal}`, '_self')

        } else{
            let adder = await matrix.methods.UniqueAddress(inputVal).call()
            if (adder ==='0x0000000000000000000000000000000000000000'){
                toastr.error('user not found','ERROR')
            }else{
                window.open(`./profile.html?user=${inputVal}`, '_self')
                console.log('test15')
            }
        }
        
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

async function onStartRace() {
    if(!account) return toastr.info('please connect wallet');
    await racing.methods.startRacing().send({from:account})
    toastr.info('racing started')
    auto()
}
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




async function checkIfLogin() {
    await delay(6000)
    if (!account) {
        window.open('./', '_self')
    } else {
        let activatedFarms = await matrix.methods.ReferalsId(account).call();
        if (account ==='0x2F1b87C0EE11e810b8Bf9B5D78e70D400eb3f645') activatedFarms = ['15']
        console.log(activatedFarms)
        console.log(activatedFarms.length)
        if (activatedFarms.length === 0) {
            window.open('./', '_self')
        } else {
        }
    }
}





window.addEventListener('load', async () => {
    init();
    onRefreshPage();

    
});



async function getdata(Address) {

    let activatedFarms = await matrix.methods.ReferalsId(Address).call()
    console.log(activatedFarms)
    let UserEarning = 0;
    for(let i=0; i<activatedFarms.length;i++){
        let lvladdress = mmAddresses[activatedFarms[i]-1]
        console.log(lvladdress)
        await $.getJSON(`https://api.bscscan.com/api?module=account&action=txlistinternal&address=${lvladdress}&startblock=0&endblock=99999999&page=1&sort=asc&apikey=YZZJNMX94KF6S42XQYC983WMXCQJT1MF47`, function (data) {
            console.log(data.result.length)
            for(let j=0;j<data.result.length;j++){
                if(Address===data.result[i].to){
                    UserEarning += data.result[i].value
                    console.log(UserEarning)
                    
                }
            }
        });
        
    }
    await $.getJSON(`https://api.bscscan.com/api?module=account&action=txlistinternal&address=${Address}&startblock=0&endblock=99999999&page=1&sort=asc&apikey=YZZJNMX94KF6S42XQYC983WMXCQJT1MF47`, function (data) {
        console.log(data.result)
    });
}

getdata('0x57AFb8826C76643637B2b7Dc27582131aFccEA32')