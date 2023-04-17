const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet;
  isDirect;

  constructor(isDirect = true) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    } else {
      message = message.toUpperCase();
      key = key.toUpperCase();
      let encripted = "";
      let notLetters = 0;
      for (let i = 0; i < message.length; i++) {
        let j = i - notLetters;
        while (j >= key.length) j -= key.length;
        if (this.alphabet.indexOf(message[i]) !== -1) {
          let mesCharIndex = this.alphabet.indexOf(message[i]);
          let keyCharIndex = this.alphabet.indexOf(key[j]);
          let encCharIndex = mesCharIndex + keyCharIndex;
          if (encCharIndex >= this.alphabet.length)
            encCharIndex -= this.alphabet.length;
          encripted += this.alphabet[encCharIndex];
        } else {
          encripted += message[i];
          notLetters++;
        }
      }
      return this.isDirect ? encripted : encripted.split("").reverse().join("");
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    } else {
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      let decripted = "";
      let notLetters = 0;
      for (let i = 0; i < encryptedMessage.length; i++) {
        let j = i - notLetters;
        while (j >= key.length) j -= key.length;
        if (this.alphabet.indexOf(encryptedMessage[i]) !== -1) {
          let mesCharIndex = this.alphabet.indexOf(encryptedMessage[i]);
          let keyCharIndex = this.alphabet.indexOf(key[j]);
          let encCharIndex = mesCharIndex - keyCharIndex;
          if (encCharIndex < 0) encCharIndex += this.alphabet.length;
          decripted += this.alphabet[encCharIndex];
        } else {
          decripted += encryptedMessage[i];
          notLetters++;
        }
      }
      return this.isDirect ? decripted : decripted.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
