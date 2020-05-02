/*
11ty Configuration
*/

module.exports = function(eleventyConfig) {

    eleventyConfig.setDataDeepMerge(true);

    //passthrough
    eleventyConfig.addPassthroughCopy("assets/css");
    eleventyConfig.addPassthroughCopy("assets/js");
    eleventyConfig.addPassthroughCopy("assets/webfonts");

};