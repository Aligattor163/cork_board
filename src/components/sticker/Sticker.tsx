import React from 'react'
import './sticker.css'

const Sticker: React.FC = () => {
    return (
        <div className="sticker">
            <div className="sticker__pin"></div>
            <div className="sticker__body">
                <span className="sticker__header-text">Note #1</span>
                <span className="sticker__content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, illum!</span>
            </div>
        </div>
    )
}

export default Sticker
