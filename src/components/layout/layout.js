import React from 'react'

import Header from '../header/header'
import './normalize.css'
import '../../fonts/stylesheet.css'
import './layout.css'

const Layout = ({ children }) => {
    return (
        <div className="root">
            <Header />
            { children }
        </div>
    )
}

export default Layout