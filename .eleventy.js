module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/normalize.css");
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  return {
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "includes",
      data: "data",
      output: "dist"
    }
  };
};
