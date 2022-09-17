const { Wallet } = require('ethers')
const { wallet1, wallet2, encryptJSON } = require('../src/01-create-wallet.js')

describe('Create Wallets', () => {
  describe('Wallet 1 (private key)', () => {
    it('should be an instance of Wallet', () => {
      expect(wallet1 instanceof Wallet).toBe(true)
    })
  })

  describe('Wallet 2 (mnemonic)', () => {
    it('should be an instance of Wallet', () => {
      expect(wallet2 instanceof Wallet).toBe(true)
    })
  })

  describe('Wallet 3 (JSON)', () => {
    it('should be an instance of Wallet', async () => {
      const wallet = await encryptJSON(wallet1)
      expect(wallet instanceof Wallet).toBe(true)
    })
  })
})
