const fs = require('fs');
const path = require('path');

const clearImage = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      throw err;
    }
  });
};

exports.clearImage = clearImage;
