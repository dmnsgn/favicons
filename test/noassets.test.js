const favicons = require("../src");
const test = require("ava");

const { logo_png } = require("./util");

test("should allow disabling asset generation", async t => {
  // eslint-disable-next-line no-magic-numbers
  t.plan(3);

  const { files, images, html } = await favicons(logo_png, {
    icons: {
      android: false,
      apple: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: false,
      firefox: false,
      windows: false,
      yandex: false
    }
  });

  t.deepEqual(files, []);
  t.deepEqual(images, []);
  t.deepEqual(html, []);
});
