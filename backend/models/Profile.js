const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    basicinformation: { type: Array, required: true },
    hardskills: { type: Array, required: true},
    softskills: { type: Array, required: true },
    interest: { type: Array, required: true },
    qualification: { type: String, required: true },
    ctc: { type: Number, required: true }
}, {
    timestamps: true,
    autoIndex: true
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
