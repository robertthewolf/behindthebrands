import CMS from 'netlify-cms'

import ReferencePreview from './preview-templates/ReferencePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('reference', ReferencePreview)