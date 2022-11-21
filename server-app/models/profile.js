const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    },
});

const Profile = mongoose.model("profile", ProfileSchema);

module.exports = Profile;