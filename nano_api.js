// https://nano-api.meltingice.net/account/xrb_3tgc13bymw7ifz5f61gpkf3ibeb3keiq8njic3f5rtqp568kwowjs1pqiabs

const axios = require('axios');


function getWalletData() {
    return new Promise((resolve, reject) => {
        const url = `https://nano-api.meltingice.net/account/xrb_3tgc13bymw7ifz5f61gpkf3ibeb3keiq8njic3f5rtqp568kwowjs1pqiabs`;
        const config = {
            params: {}
        };

        axios.get(url, config)
            .then(function (response) {
                resolve(response.data['Data']);     // resolve = function passed in as the next ".then(resolve{...})"
                console.log(response.data);
            })
            .catch(reject);
    });
}

getWalletData();