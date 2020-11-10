module.exports = {
  contract: {
    development: '0xB2f31174a4166B5D7DA787fF4fe240bAE4631B66',
    ropsten: '0xb5d4f9340bE24eBB428681567a6DE4014A09E8bC',
  },
  network: {
    host: '127.0.0.1',
    port: 7545,
    id: '5777',
  },
  server: {
    port: 8888,
  },
  mongodb: {
    uri: 'mongodb://127.0.0.1:27017',
  },
  ipfs: {
    repo: './bim-contracts-ipfs',
    EXPERIMENTAL: { pubsub: true },
    preload: {
      enabled: false,
    },
    config: {
      Addresses: {
        Swarm: [
          '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
        ],
      },
    },
  },
};
