document.getElementById('buyNow').addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    // Request account access if needed
    await ethereum.request({ method: 'eth_requestAccounts' });

    // Web3 instance
    const web3 = new Web3(window.ethereum);

    // Define the transaction parameters
    const transactionParams = {
      to: '0xD593373a5F92b73454a95256c6F558B3fC405756', // Raptoreum.uni.eth address
      from: ethereum.selectedAddress,
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
  } else {
    alert('Ethereum wallet not detected. Please install MetaMask.');
  }
});
