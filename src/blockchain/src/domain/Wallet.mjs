import computeBalance from './wallet/compute_balance.mjs'

const VERSION = '1.0'

/**
 * Construct a new Wallet. The private key is used to sign the data and the
 * public key can be used to verify its integrity
 */
export default class Wallet {
  constructor(publicKey, privateKey) {
    this.publicKey = publicKey
    this.privateKey = privateKey
  }

  /**
   * Generates a new wallet
   *
   * @return {Wallet} A new digital wallet
   */
  static generateWallet() {}

  get address() {
    return this.publicKey
  }

  get [Symbol.for('version')]() {
    return VERSION
  }

  balance(ledger) {
    return /*#__PURE__*/ computeBalance(this.publicKey)([...ledger])
  }

  toJSON() {
    return {
      address: this.publicKey,
      version: VERSION
    }
  }
}