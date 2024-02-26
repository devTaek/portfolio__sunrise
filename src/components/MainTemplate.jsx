import React from 'react'

const MainTemplate = ({header,footer,children}) => {
  return (
    <div id="page-template">
      {header}
      <main>{children}</main>
      {footer}
    </div>
  )
}

export default MainTemplate
