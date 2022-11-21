const Profile = require("../models/profile");

exports.getAllProfile = (req, res) => {
    Profile.find()
        .then(
            (profile) => {
                res.json(profile);
                console.log(profile);
            }
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Profile not found", error: err.message })
        );
};
exports.addTwoNumber = (req, res) => {
    console.log("--------------------------------");
    console.log(req.body.first)
    const sum = Number(req.body.first)+ Number(req.body.second)
    res.json({result:sum});
};
exports.postCreateProfile = (req, res) => {
    Profile.create(req.body)
        .then((data) => res.json({ message: "Profile added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add profile", error: err.message })
        );
};

exports.putUpdateProfile = (req, res) => {
    this.getAllProfile.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update profile", error: err.message })
        );
};

exports.deleteProfile = (req, res) => {
    Profile.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "profile deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};
