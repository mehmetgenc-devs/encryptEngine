# EncryptEngine

## EN
EncryptEngine is an encryption engine used for secure data transmission and storage operations. It encrypts data using AES-256-CBC or other security protocols, ensuring the security of sensitive information. It is an effective solution for protecting sensitive data such as user identities, passwords, and session keys.
## TR
EncryptEngine, güvenli veri iletimi ve saklama işlemleri için kullanılan bir şifreleme motorudur. Verileri AES-256-CBC veya diğer güvenlik protokollerine dayalı olarak şifreleyerek, hassas bilgilerin güvenliğini sağlar. Kullanıcı kimlikleri, şifreler, oturum anahtarları gibi hassas verilerin korunmasında etkili bir çözümdür.


## Features - Özellikler

- 1: EN: Secure encryption using AES-256-CBC algorithm.
- 1: TR: AES-256-CBC algoritması kullanılarak güvenli şifreleme.
- 2: EN: Easy integration into existing projects.
- 2: TR: Mevcut projelere kolay entegrasyon.
- 3: EN: Compatible with various programming languages and platforms.
- 3: TR: Çeşitli programlama dilleri ve platformlarla uyumlu hale gelebilme.



## Installation - Kurulum

EN: you can call the file.

TR: dosyayı çağırabilirsiniz.

```bash
include /index.php
```

## Usage - Kullanım

```php
$encryptedData = $endec->encrypt('Sensitive data to encrypt');
echo "Encrypted Data: " . $encryptedData . PHP_EOL;

$decryptedData = $endec->decrypt($encryptedData);
echo "Decrypted Data: " . $decryptedData . PHP_EOL;
```

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/imehmetgenc/encryptEngine/blob/main/LICENSE) file for details.

Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](https://github.com/imehmetgenc/encryptEngine/blob/main/LICENSE) dosyasına bakın.


