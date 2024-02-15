import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
export default function WelcomeComponent(){
    const {username} = useParams()
    console.log(username);

    function callHelloWorldRestApi(){
        console.log('Called');
        axios.get('http://localhost:8080/hello-world')
            .then((response) => successfulResponse(response))
            .catch( (error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function successfulResponse(response){
        console.log(response);
    }
    function errorResponse(error){
        console.log(error);
    }
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your Todos. <Link to="/todos">Access Heress</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" 
                onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>
        </div>
    )
}