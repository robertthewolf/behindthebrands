import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  }

  render() {

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#555555"/>
        <meta name="msapplication-TileColor" content="#000000"/>
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:image:width" content="1190" />
        <meta property="og:image:height" content="623"/>
        <meta property="og:title" content="Behind The Brands Ltd."/>
        <meta property="og:description" content="We help to transform beauty and lifestyle brands into successful enterprises. "/>
        <meta property="og:url" content="behindthebrands.net"/>
        <meta property="og:image" content="http://behindthebrands.net/facebook.png"/>

          {this.props.headComponents}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}