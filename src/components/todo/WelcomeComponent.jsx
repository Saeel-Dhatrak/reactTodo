import {useParams, Link} from 'react-router-dom'
export default function WelcomeComponent(){
    const {username} = useParams()
    console.log(username);
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your Todos. <Link to="/todos">Access Here</Link>
            </div>
        </div>
    )
}