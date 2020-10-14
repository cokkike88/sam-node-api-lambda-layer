const axios = require('axios');

let getUser = async (user) => {
    let result = await axios.get(`https://api.github.com/users/${user}`);
    return result.data;
}

module.exports = getUser;