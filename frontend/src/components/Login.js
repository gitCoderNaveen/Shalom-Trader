import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Login() {

    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin=()=>{
        navigate('/admin')
    }

    return (
        <div>
            <div className='container loginDiv shadow bg-light'>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">User Name: </label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="user name" />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Password: </label>
                    <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="password" />
                </div>
                <button class="btn btn-primary" type='submit'>Login</button>
                <button type="submit" class="btn btn-secondary" onClick={handleLogin}>Admin Login</button>
            </div>
        </div>
    )
}
