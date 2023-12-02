const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username: { type : mongoose.SchemaType.String, required: true },
        email: { type : mongoose.SchemaType.String, unique: true, required: true },
        password: { type : mongoose.SchemaTypes.String, required: true}
    },
    {timestamps : true}
);

const user = mongoose.model("user", userSchema);
module.exports = user;
