import React from 'react'

const PageContainer = ({header,footer,children}) => {
  return (
    <div id="page-template">
      {header}
      <main>{children}</main>
      {footer}
    </div>
  )
}

export default PageContainer
