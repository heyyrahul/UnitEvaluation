import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/upload">Upload Video</Link>
            <br />
            <Link to="/chat">Chat</Link>
        </div>
    )
}

export default Home;