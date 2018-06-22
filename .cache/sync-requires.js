// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Robert/btb/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Robert/btb/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Robert/btb/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Robert/btb/src/pages/contact.js")),
  "component---src-pages-contact-zh-js": preferDefault(require("/Users/Robert/btb/src/pages/contact.zh.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Robert/btb/src/pages/index.js")),
  "component---src-pages-index-zh-js": preferDefault(require("/Users/Robert/btb/src/pages/index.zh.js")),
  "component---src-pages-reference-js": preferDefault(require("/Users/Robert/btb/src/pages/reference.js")),
  "component---src-pages-reference-zh-js": preferDefault(require("/Users/Robert/btb/src/pages/reference.zh.js")),
  "component---src-pages-workflow-js": preferDefault(require("/Users/Robert/btb/src/pages/workflow.js")),
  "component---src-pages-workflow-zh-js": preferDefault(require("/Users/Robert/btb/src/pages/workflow.zh.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/Robert/btb/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "404.json": require("/Users/Robert/btb/.cache/json/404.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "contact.json": require("/Users/Robert/btb/.cache/json/contact.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "zh-contact.json": require("/Users/Robert/btb/.cache/json/zh-contact.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "index.json": require("/Users/Robert/btb/.cache/json/index.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "zh.json": require("/Users/Robert/btb/.cache/json/zh.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "reference.json": require("/Users/Robert/btb/.cache/json/reference.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "zh-reference.json": require("/Users/Robert/btb/.cache/json/zh-reference.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "workflow.json": require("/Users/Robert/btb/.cache/json/workflow.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "zh-workflow.json": require("/Users/Robert/btb/.cache/json/zh-workflow.json"),
  "layout-index.json": require("/Users/Robert/btb/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/Robert/btb/.cache/json/404-html.json")
}