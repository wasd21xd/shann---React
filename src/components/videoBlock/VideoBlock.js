import React from "react";
import "./videoblock.css";
import photo from './img__videoBlock/Rectangle209.png'

const VideoBlock = () => {
    return (
        <div className="video-block">
            <h2 className="video-title">проверенное <span className='span__video'>качество</span></h2>

            <div className="video-container">
                <img
                    className="video-element"
                    src={photo}
                />
                <button className="video-button">▶</button>
            </div>
        </div>
    );
};

export default VideoBlock;
