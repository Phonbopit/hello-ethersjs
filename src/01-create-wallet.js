const { Wallet } = require('ethers')

// 1. Create with random with have object with
const wallet = new Wallet.createRandom()

// 2. create with private key
const wallet1 = new Wallet(wallet.privateKey) // privateKey = '<YOUR_PRIVATE_KEY>'

// 3. create with mnemonic
const wallet2 = Wallet.fromMnemonic(wallet.mnemonic.phrase) // 12 words

// encrypt JSON
const encryptJSON = async (wallet) => {
  const password = 'password' // your password, should be secret.
  const json = await wallet.encrypt(password)
  // 4. Create with encryptedJson
  return await Wallet.fromEncryptedJson(json, password) // your json from encryptJSON
}

module.exports = { wallet1, wallet2, encryptJSON }
