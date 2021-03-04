const downloadFile = require("../../services/files/download");

const download = async (req, res) => {
  const { mimetype, data } = await downloadFile(req.params.hash);

  res.setHeader("content-type", mimetype);

  return res.send(data);
};

module.exports = download;
