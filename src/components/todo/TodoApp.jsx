import './TodoApp.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <HeaderComponent />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />   
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                    <Route path='*' element={<ErrorComponent/>} />
                </Routes>
            </BrowserRouter>
            <FooterComponent />
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()
    function handleUsernameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    function handleSubmit(){
        if(username==='in28minutes' && password==='dummy'){
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }else{
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            <h1>Time to Login!</h1>
            {showSuccessMessage && <div className="successMessage" >Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div> }
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}


function WelcomeComponent(){
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

function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. React out to our team at ABC-DEF-GHIJ
            </div>
        </div>
    )
}

function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    const todos =[
        {id:1, description: 'Learn AWS', done: false, targetDate: targetDate},
        {id:2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
        {id:3, description: 'Learn DevOps', done: false, targetDate: targetDate},
    ]
    return(
        <div className="ListTodosComponent">
            <h1>Things You Want to Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => ( 
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent(){
    return(
        <div className="header">
            Header <hr />
        </div>
    )
}

function FooterComponent(){
    return(
        <div className="footer">
            <hr /> Footer
        </div>
    )
}

function LogoutComponent(){
    return(
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our app . Come back Soon
            </div>
        </div>
    )
}