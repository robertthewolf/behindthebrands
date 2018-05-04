// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Robert/btb/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Robert/btb/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Robert/btb/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Robert/btb/src/pages/about.js")),
  "component---src-pages-clients-js": preferDefault(require("/Users/Robert/btb/src/pages/clients.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Robert/btb/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Robert/btb/src/pages/index.js")),
  "component---src-pages-workflow-js": preferDefault(require("/Users/Robert/btb/src/pages/workflow.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/Robert/btb/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "404.json": require("/Users/Robert/btb/.cache/json/404.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "about.json": require("/Users/Robert/btb/.cache/json/about.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "clients.json": require("/Users/Robert/btb/.cache/json/clients.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "contact.json": require("/Users/Robert/btb/.cache/json/contact.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "index.json": require("/Users/Robert/btb/.cache/json/index.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "workflow.json": require("/Users/Robert/btb/.cache/json/workflow.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/Robert/btb/.cache/json/404-html.json")
}