const fs = require('fs')
const crypto = require('crypto')
const axios = require('axios')

function getHarga(UsernameDF, APIkeyDF, persen) {
  let code = "pricelist";

  let hasho = crypto
    .createHash("md5")
    .update(global.UsernameDF + global.APIkeyDF + code)
    .digest("hex");

  var config = {
    method: "POST", 
    url: `https://${global.digiFlazz}/v1/price-list`, 
    data: {
      cmd: "prepaid",
      username: global.UsernameDF,
      sign: hasho,
    },
  };

  axios(config)
    .then(function (response) {
      let data = JSON.stringify(response.data.data, null, 2);
      fs.writeFileSync("./SETTING/DB/AdminPrepaid.json", data);
      
    })

    .catch((error) => {
      console.log(error);
    });
}

module.exports = { getHarga }