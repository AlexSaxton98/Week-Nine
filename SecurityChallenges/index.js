require("dotenv").config();

const fs = require("fs")
const path = require("path")
const dataPath = path.join(process.env.DATA_LOCATION, "data.json");

const yargs = require("yargs/yargs");
const { hideBin }= require("yargs/helpers");
const bcrypt = require('bcrypt');

const saveData = (data) => {
    try {
        if (!fs.existsSync(process.env.DATA_LOCATION)) {
            fs.mkdirSync(process.env.DATA_LOCATION);
        }

        fs.writeFileSync(dataPath, JSON.stringify(data));
    } catch(error) {
        console.log(error);
    }
};

const main = async () => {
    const argv = yargs(hideBin(process.argv)).argv
    const saltRounds = parseInt(process.env.SALT_ROUNDS);

    const username = argv.username;
    const password = argv.password;
    
    const data = {username, password}

    saveData(data)

}

main()