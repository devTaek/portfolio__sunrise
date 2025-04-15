import React from 'react'

const PageContainer = ({header,children}) => {
  return (
    <div id="page-template">
      {header}
      <main>{children}</main>
    </div>
  )
}

export default PageContainer
