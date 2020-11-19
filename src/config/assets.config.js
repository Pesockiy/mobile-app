/**
 * Application assets config (used in the App and Webpack builder)
 */
var glob = require("glob");


module.exports = {
    build_directory : "build",
    assets_map : {
        // vendor: [
        //     './src/assets/js/vendor/style-vendor.js',
        // ],
        app: [
            './src/assets/js/app/style-app.js',
            './src/assets/js/app/indexPage.js',
        ],
        // media: [
        //     './src/assets/js/media/style-app.js',
        //     './src/assets/js/media/indexPage.js',
        // ],
        html: glob.sync("./src/*.html"),
        images: glob.sync("./src/assets/images/nonoptimised/*.*"),
        // video: glob.sync("./src/assets/video/*.*"),
        // pdf: glob.sync("./src/assets/pdf/*.*"),
        // sprites: glob.sync("./src/assets/images/sprite.png"),
        // svg: glob.sync("./src/assets/images/svg/*.*")
    }
};
