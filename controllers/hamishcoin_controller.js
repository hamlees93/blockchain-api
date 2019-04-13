const UserModel = require(`./../database/models/user_model`);
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

index = (req,res) => {
    res.send("HI");
};

newUser = async (req,res) => {
    const genKeyPair = ec.genKeyPair();
    const walletAddress = genKeyPair.getPublic('hex');
    const privateKey = genKeyPair.getPrivate('hex');
    const response = await UserModel.create({ walletAddress, privateKey });
    console.log(response)
    res.send('User successfully created');
};

module.exports = {
    index,
    newUser
};