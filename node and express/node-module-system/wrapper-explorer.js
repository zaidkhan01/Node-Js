console.log("Node Module wrapper demo");

console.log("__filename in wrapper explorer", __filename);
console.log("__dirname in wrapper explorer", __dirname);

module.exports.greet = function (name) {
  console.log(`hello ${name}`);
};
