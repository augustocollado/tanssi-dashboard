const { ApiPromise, WsProvider } = require("@polkadot/api");

export async function subProvider(URL) {
  let WS;
  switch (URL) {
    case "dancebox":
      WS = "wss://fraa-dancebox-rpc.a.dancebox.tanssi.network";
      break;
    default:
      WS = URL;
      break;
  }

  // Create WS Provider
  const wsProvider = new WsProvider(WS);

  // Wait for Provider
  const api = await ApiPromise.create({
    provider: wsProvider,
    noInitWarn: true,
  });
  await api.isReady;
  return api;
}
