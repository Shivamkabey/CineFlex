import React from 'react'

const VideoBackground = () => {
    return (
        <div className='w-screen'>
            <iframe
                className='w-screen aspect-video'
                src="https://www.youtube.com/embed/5USuekk16e0?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground