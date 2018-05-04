import React from 'react'
import PropTypes from 'prop-types'
import { Reference } from '../../components/Reference'

const ReferencePreview = ({ entry, widgetFor }) => (
  <Reference
    html={widgetFor('body')}
    name={entry.getIn(['data', 'name'])}
    position={entry.getIn(['data', 'position'])}
    company={entry.getIn(['data', 'company'])}
    description={entry.getIn(['data', 'description'])}
    />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ReferencePreview