const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema(
    {
        title: { type : mongoose.SchemaType.String, required: true },
        description: { type : mongoose.SchemaType.String, required: true },
        user: { type : mongoose.SchemaTypes.ObjectId, ref:"User", required: true}
    },
    {timestamps : true}
);

const blog = mongoose.model("Blog", blogSchema);
module.exports = blog;
