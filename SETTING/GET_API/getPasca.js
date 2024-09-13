const fs = require('fs');
const crypto = require('crypto');
const axios = require('axios');

function getPasca(DigiflazzUser, DigiflazzKey, persen) {
  let code = "pricelist";

  let hasho = crypto
    .createHash("md5")
    .update(DigiflazzUser + DigiflazzKey + code)
    .digest("hex");

  var config = {
    method: "POST", 
    url: `https://${global.digiFlazz}/v1/price-list`, 
    data: {
      cmd: "pasca",
      username: DigiflazzUser,
      sign: hasho,
    },
  };

  axios(config)
    .then(function (response) {
      let data = response.data.data;

      // Convert product_name to uppercase
      data.forEach(item => {
        item.product_name = item.product_name.toUpperCase();
      });

      let jsonData = JSON.stringify(data);
      fs.writeFileSync("./SETTING/DB/dataPostpaid.json", jsonData);

      let dataup = JSON.parse(fs.readFileSync("./SETTING/DB/dataPostpaid.json"));
      let persentase = persen;
      dataup.forEach((i) => (i.price));
      let updatedData = JSON.stringify(dataup);
      fs.writeFileSync("./SETTING/DB/dataPostpaid.json", updatedData);
    })
    .catch((error) => {
      console.log("Gagal", error);
    });
}

module.exports = { getPasca };