export const config = {
    anticaptchaApikey: "e94d7a1cfb9830d7f0f999f054d882ca", // paste your apikey
    txAmount: { from: 500, to: 1000 }, // random uSei amount limits to send
    delayBetweenTransactions: 0, // milliseconds
    timeToWaitForFaucetTokens: 5, // minutes
    waitForGiftsToBeMinted: false, // false recommended
    recheckMode: false // true/false, check old mnemonics for available gifts for send\mint
}
