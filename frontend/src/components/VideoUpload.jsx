import { useState } from "react";
import axios from axios;

const VideoUpload = () => {
    const [video, setVideo] = useState(null);
    const handleChange = (evenet) => {
        setVideo(evenet.target.files[0]);
    }

    const handleUpload = async () => {
        try {
            const formData = new formData();
            await axios.post('http://localhost:3000/stream/videos', formData, {
                headers: {
                    'Content-Type':'multipart/form-data',
                }
            })
            alert('Video Uploaded Successfully !')
        } catch (err) {
            console.log({err});
        }
    }
    return (
        <div>
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUpload}>Upload Video</button>
       </div>
    )
}

export default VideoUpload;