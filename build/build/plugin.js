const fs = require("fs");
const path = require("path");

/**
 * Replaces js files at build time.
 *
 * The config is keyed with the name of the file in the contrib project with a
 * value of the replacement file in the local project.
 */
module.exports = function (snowpackConfig, pluginOptions) {
  return {
    name: 'file-swap',
    resolve: {
      input: [".js"],
      output: [".js"],
    },
    load({filePath, fileExt, isDev, isHMREnabled, isSSR, isPackage}) {
      // Find the project's node_modules.
      const parts = filePath.split("/");
      while (parts.length && parts.shift() !== "node_modules") {}
      const relativePath = parts.join("/");
      if (relativePath in pluginOptions) {
        return fs.readFileSync(path.join(process.cwd(), pluginOptions[relativePath])).toString();
      }
    }
  };
};
