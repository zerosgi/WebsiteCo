document.getElementById('buyNow').addEventListener('click', async () => {
  // Check for an Ethereum provider
  let provider;
  
  if (window.ethereum) {
    provider = window.ethereum; // MetaMask or other Ethereum wallets
  } else if (window.klaytn) {
    provider = window.klaytn; // Klaytn Wallet
  } else {
    alert('No Ethereum wallet detected. Please install MetaMask, OKX Wallet, or another Ethereum wallet.');
    return;
  }

  try {
    // Request account access if needed
    await provider.request({ method: 'eth_requestAccounts' });

    // Web3 instance
    const web3 = new Web3(provider);

    // Define the transaction parameters
    const transactionParams = {
      to: '0xD593373a5F92b73454a95256c6F558B3fC405756', // Raptoreum.uni.eth address
      from: provider.selectedAddress,
      value: web3.utils.toWei('15', 'ether'), // Set the amount in Wei (price in ETH)
    };

    // Send transaction
    web3.eth.sendTransaction(transactionParams)
      .on('transactionHash', function (hash) {
        alert('Transaction sent! Transaction hash: ' + hash);
      })
      .on('receipt', function (receipt) {
        alert('Transaction successful! Trophy will be sent.');
      })
      .on('error', function (error) {
        alert('Transaction failed: ' + error.message);
      });
  } catch (error) {
    alert('Transaction was not approved: ' + error.message);
  }
});
