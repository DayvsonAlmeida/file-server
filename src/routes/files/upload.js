const saveFile = require("../../services/files/save");

const upload = async (req, res) => {
  const { files } = req;
  const hasFiles = files && Object.keys(files).length > 0;

  if (!hasFiles)
    return res.status(400).send({ message: "No file were uploaded" });

  const { file } = files;
  const { _id } = await saveFile(file);

  return res.send({ hash: _id });
};

module.exports = upload;
