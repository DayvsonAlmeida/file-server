const { Schema, model } = require("mongoose");

const FileSchema = new Schema({
  name: { type: String, require: true },
  size: { type: Number, require: true },
  encoding: { type: String, require: true },
  mimetype: { type: String, require: true },
  md5: { type: String, require: true },
  data: { type: Buffer, require: true },
});
const FileModel = model("files", FileSchema);

module.exports = FileModel;
