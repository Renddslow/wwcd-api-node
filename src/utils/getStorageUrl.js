module.exports = (key) => {
  return `https://storage.googleapis.com/${process.env.BUCKET_NAME}/${key}`;
};
