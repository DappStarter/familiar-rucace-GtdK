require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind exchange gloom arch sun genre'; 
let testAccounts = [
"0x0741b82be67558ea91d02136095072a16ed68a152e7a6b3a1383b493346ca4f0",
"0x9793460c0c73e1e41aceba6161013733f5783f6b19dc849451b0bdce8d7b7798",
"0x6f767ad093347d141a071673851fd1623ae824158edac0cd101801e55605cfe2",
"0xcf3fc06e7e88561871d9f5643cd4a7e4bf514523b68766eab4f5c55377a4e553",
"0x02778e80531d8f11422d91e3daf7dd5d16514c7162c3c123dcd9790b5df6eec2",
"0x45d2d2c286ea615492cf467c7ce4eedd7417e7fde589c7e797852d09449c28cd",
"0xed4465b81075df86ae0fff706adebe2b27342916a9a1bdfcb6fe14cde501d3a0",
"0x21cf7c565c9ecb2323bbe7f4419aaa8983dd57d86bc1f8d4135d47cd64919280",
"0xfc8ccc5e52345f7c49c451af968a17f59cd406844aac00f666545d0a46391e79",
"0x602f1ea20e76e8b92b160ffb775f79de89bc89d57b71f401e078c89833851472"
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
            version: '^0.8.0'
        }
    }
};

