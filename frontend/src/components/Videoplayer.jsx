const { useState,useRef } = require("react");

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlaypause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };
    return (
        <div>
            <video ref={videoRef} controls>
                <source src={src} type="video/mp4" />
            </video>
            <button onClick={handlePlaypause}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    )
};

export default VideoPlayer;