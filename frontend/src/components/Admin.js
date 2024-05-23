import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Admin() {
    const [name, setName]=useState('')
    const [number, setNumber]=useState()
    const [address, setAddress]=useState('')

    const handleSubmit=(e)=>{
        (e).preventDefault()
        axios.post('')
    }

    return (
        <div>
            <form className='container shadow' onSubmit={handleSubmit}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="User Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <label for="floatingInput">User Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Phone Number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
                    <label for="floatingInput">Mobile Number</label>
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
                    <label for="floatingTextarea">Address</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
