const crypto = require('crypto');

class CryptoClass {
    constructor(key = 'your_key') { // Unimportant - önemsiz "MEGA"
        this.key = key;
        this.algorithm = 'aes-256-cbc'; // Algoritma "AES-128-CTR"
    }

    encrypt(text) {
        return this.encryptText(text, this.key);
    }

    decrypt(text) {
        return this.decryptText(text, this.key);
    }

    encryptText(encryptText, key) {
        const iv = crypto.randomBytes(16); // IV length for AES-256-CBC is 16 bytes
        const cipher = crypto.createCipheriv(this.algorithm, crypto.scryptSync(key, 'salt', 32), iv); // Key must be 32 bytes for AES-256-CBC
        let encrypted = cipher.update(encryptText, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        const iv_base64 = iv.toString('base64');
        return `${iv_base64}:${encrypted}`;
    }

    decryptText(encryptedText, key) {
        const [iv_base64, encrypted_base64] = encryptedText.split(':');
        const iv = Buffer.from(iv_base64, 'base64');
        const encrypted = Buffer.from(encrypted_base64, 'base64');
        const decipher = crypto.createDecipheriv(this.algorithm, crypto.scryptSync(key, 'salt', 32), iv);
        let decrypted = decipher.update(encrypted, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}

// Example usage:
const endec = new CryptoClass();
const encrypted = endec.encrypt('Hello World');
console.log('Encrypted:', encrypted);
const decrypted = endec.decrypt(encrypted);
console.log('Decrypted:', decrypted);
