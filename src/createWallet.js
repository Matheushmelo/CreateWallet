//Importing dependencies
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//Defining the network
const network = bitcoin.networks.testnet

//Derivation of HD wallets
const path = `m/49'/1'/0'/0` 

//Generating mnemonic for the seed
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//Creating the root of the HD wallet
let root = bip32.fromSeed(seed, network)

//Creating a wallet = pair pvt/pub keys
let account = root.derivePath(path)

//generating a node account from the root account
let node = account.derive(0).derive(0)

//Generating adress type p2pkh
let btcAddress = bitcoin.payments.p2pkh({
  pubkey: node.publicKey,
  network: network,
}).address

console.log("Carteira gerada")
console.log("Endereço: ", btcAddress)
console.log("Chave privada:", node.toWIF())
console.log("Seed:", mnemonic)