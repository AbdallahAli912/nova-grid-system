let mix = require("laravel-mix");
let path = require("path");
require("./nova.mix");

let aliasMerge = {};
if (__dirname.includes("nova-components") || __dirname.includes("submodules")) {
    aliasMerge = {'@': path.join(__dirname, '../../vendor/laravel/nova/resources/js')};
}

mix
  .setPublicPath("dist")
  .js("resources/js/tool.js", "js")
  .sass("resources/sass/tool.scss", "css")
  .vue({ version: 3 })
  .alias({
    '#': path.join(__dirname, 'resources/js/'),
    '@': path.join(__dirname, 'vendor/laravel/nova/resources/js'),
    ...aliasMerge
  })
  .nova("codenco-dev/nova-grid-system");