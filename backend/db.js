const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(
            "mongodb://10.128.5.107:27017/"
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
