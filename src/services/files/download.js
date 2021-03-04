const FileModel = require("../../model/files");

const downloadFile = async (hash) => {
  const result = FileModel.findById(hash);

  return result;
};

module.exports = downloadFile;
