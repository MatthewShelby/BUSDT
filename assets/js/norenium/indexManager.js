// The IndexManager.js is all the commands and functions that should be run on 
// the index page of the website. 
// It should be referenced at the bottom of the index.html and after referencing
// all other .js files.




document.getElementById('cw-btn').addEventListener('click', StartContract)
// StartContract();
// var n = provider.getBlockNumber().then(function (ret) {
//       //console.info(ret)
//       var nn = provider.getNetwork();
//       //console.info(nn);
// });

var balance;
function metamaskOK() {
      provider.getNetwork().then(function (res) {
            //document.getElementById('cw-btn').classList.remove('d-inline-flex');
            document.getElementById('cw-btn').style.display = 'none';
            document.getElementById('info').style.display = 'block';
            document.getElementById('ttrr').style.display = 'block';
            document.getElementById('network-name').innerHTML = res.name;

            ensAddress = res.ensAddress;
            //document.getElementById('coin-name').innerHTML = res.name;
            document.getElementById('contract-adr').innerHTML = contractAddress;
            provider.getBalance(walletAddress).then(function (res2) {
                  //console.info(res2);
                  balance = ethers.utils.formatEther(res2._hex);
                  //document.getElementById('network-balance').innerHTML = res2.balance;
                  document.getElementById('balance').innerHTML = balance;
                  document.getElementById('wallet-address').innerHTML = walletAddress;
                  //var avatartIndex = Number((parseInt(walletAddress)).toString().substring(0, 1))
                  //document.getElementById('address-index').innerHTML = avatartIndex;
                  //document.getElementById('avatar-image').src = 'assets/img/Avatars/Avatar(' + avatartIndex + ').svg';


                  myContract.balanceOf(walletAddress).then(function (obw) {
                        console.info(obw)
                        document.getElementById('BUSDTbalance').innerHTML = numberWithCommas(parseInt(obw / 10 ** 18))
                  })
            })



            // myContract.ownerOf(1).then(function (ow) { console.info(ow) })
            // myContract.balanceOf(walletAddress).then(function (obw) { console.info(obw) })
            // myContract.isFreeze(2).then(function (obcw) { console.info(obcw) })
            // myContract.getTokenTier(2).then(function (obcdw) { console.info(obcdw) })
      })


}

function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
