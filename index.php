<?php
if (!class_exists('CLASS')) {
    class CLASS {
        public function __construct($key = "your_key") { // unimportant - önemsiz "MEGA"
            $this->key = $key;
        }

        public function encrypt($text) {
            return $this->encryptText($text, $this->key);
        }

        public function decrypt($text) {
            return $this->decryptText($text, $this->key);
        }

        public function encryptText($encryptText, $key) {
            $cipher = "AES-256-CBC"; // algoritma "AES-128-CTR"
            $options = OPENSSL_RAW_DATA;
            $iv_length = openssl_cipher_iv_length($cipher);
            $iv = openssl_random_pseudo_bytes($iv_length);
            $encrypted = openssl_encrypt($encryptText, $cipher, $key, $options, $iv);
            $iv_base64 = base64_encode($iv);
            $encrypted_base64 = base64_encode($encrypted);
            return $iv_base64 . ':' . $encrypted_base64;
        }

        public function decryptText($encryptedText, $key) {
            list($iv_base64, $encrypted_base64) = explode(':', $encryptedText, 2);
            $cipher = "AES-256-CBC"; // algoritma "AES-128-CTR"
            $options = OPENSSL_RAW_DATA;
            $iv = base64_decode($iv_base64);
            $encrypted = base64_decode($encrypted_base64);
            $decrypted = openssl_decrypt($encrypted, $cipher, $key, $options, $iv);
            return $decrypted;
        }
    }

    $endec = new CLASS();
}
?>
