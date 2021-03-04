const path = require("path");

const upload = (req, res) => {
  const { files } = req;
  const hasFiles = files && Object.keys(files).length > 0;

  if (!hasFiles)
    return res.status(400).send({ message: "No file were uploaded" });

  const { file } = files;
  const basePath = path.dirname(require.main.filename);
  const uploadPath = `${basePath}/db/${file.name}`;

  file.mv(uploadPath, (err) => {
    if (err) return res.status(500).send({ message: "Can not save file" });

    return res.send({ message: "File uploaded" });
  });
};

module.exports = upload;
