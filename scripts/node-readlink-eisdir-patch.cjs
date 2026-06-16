const fs = require("fs");

const normalizeReadlinkError = (error) => {
  if (error && error.code === "EISDIR" && error.syscall === "readlink") {
    error.code = "EINVAL";
  }
  return error;
};

const originalReadlink = fs.readlink;
const originalReadlinkSync = fs.readlinkSync;
const originalPromisesReadlink = fs.promises && fs.promises.readlink;

fs.readlink = function patchedReadlink(path, options, callback) {
  if (typeof options === "function") {
    return originalReadlink.call(fs, path, function onReadlink(error, result) {
      options(normalizeReadlinkError(error), result);
    });
  }

  return originalReadlink.call(fs, path, options, function onReadlink(error, result) {
    callback(normalizeReadlinkError(error), result);
  });
};

fs.readlinkSync = function patchedReadlinkSync(path, options) {
  try {
    return originalReadlinkSync.call(fs, path, options);
  } catch (error) {
    throw normalizeReadlinkError(error);
  }
};

if (fs.promises && originalPromisesReadlink) {
  fs.promises.readlink = async function patchedPromisesReadlink(path, options) {
    try {
      return await originalPromisesReadlink.call(fs.promises, path, options);
    } catch (error) {
      throw normalizeReadlinkError(error);
    }
  };
}
