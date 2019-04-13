const { Schema } = require(`mongoose`);

const UserSchema = new Schema({
    walletAddress: {
        type: String,
        required: true
    },
    privateKey: [{
        type: String,
        required: true
    }]
});

module.exports = UserSchema;