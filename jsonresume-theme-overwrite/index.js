const { render: baseRender } = require("jsonresume-theme-orbit");
const fs = require('fs');

const render = (resume) => {
  const styles = fs.readFileSync('./jsonresume-theme-overwrite/style.css');
  return baseRender(resume).replace("</style>", `${styles}</style>`);
}

module.exports = {
  render: render
};
