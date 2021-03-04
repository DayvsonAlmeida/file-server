const FileModel = require("../../model/files");

const saveFile = async ({ name, data, size, encoding, mimetype, md5 }) => {
  const result = FileModel.create({
    name,
    data,
    size,
    encoding,
    mimetype,
    md5,
  });

  return result;
};

module.exports = saveFile;
