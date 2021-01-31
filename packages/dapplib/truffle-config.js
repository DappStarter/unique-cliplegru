require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan random random come hockey clinic symptom typical'; 
let testAccounts = [
"0x04ad52383a18faec08c787e7498aa61eae9a364a504004c07dd71a0c6066ff2e",
"0x18f90fe3d1dbf5461469ae921ad43ed47943732e837976f6a821f98b998de7b7",
"0x281452c6e0048d3e71e23bb6a4985748303d6af8462731e60ea5bd2c91ae6039",
"0x236742525402c8b774f5f70e6d7f72ccbbed8f74ae668a6fc73c34e6b8c2aaf2",
"0x5a80ce1c367d53e93da1aa8cc8e66168afd506bb57c70489d0c81e3553973b46",
"0x8ca5d5093076ddff8ae1a8dc1ec4acf2373bf24df67c0d56c79b822b46e551f1",
"0xe67ba1c4a3cf047b879b45857f144e499a571ad1cc1be5ad213302c4191dbfe5",
"0xc5c657573919e925f28a8dcae0aa64c526fba704e83d830bf173cd87ed1dcc11",
"0x9340fbf5c0a94d0c0cb2caee9c57b6f69659c388d11ace650a967034101cb1e4",
"0x767487d8a1dd60d3ae3904587598c6fbe5074256b57350acf11886323a05f512"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
