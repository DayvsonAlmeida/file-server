const { Schema, model } = require("mongoose");

const FileSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  encoding: { type: String, required: true },
  mimetype: { type: String, required: true },
  md5: { type: String, required: true },
  data: { type: Buffer, required: true },
});
const FileModel = model("files", FileSchema);

module.exports = FileModel;
