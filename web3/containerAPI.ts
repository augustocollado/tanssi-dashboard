const { ApiPromise, WsProvider } = require("@polkadot/api");

export async function containerProvider(network) {
  const wsProvider = new WsProvider(network);

  // Wait for Provider
  const api = await ApiPromise.create({
    provider: wsProvider,
  });
  await api.isReady;
  return api;
}
