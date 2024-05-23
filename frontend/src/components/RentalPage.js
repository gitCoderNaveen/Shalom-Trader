import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function RentalPage() {
    const [time, setTime]=useState(new Date())
    const [rent, setRent]=useState()
    const [machine, setMachine]=useState('')


    const handleOrders=(e)=>{
        setMachine(e.target.value)
        setTime(new Date())
        setRent(500)
    }
    return (
        <div>
            <div className='container shadow' style={{ textAlign: 'center' }}>
                <h2>Order Page</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Machine</th>
                            <th scope="col">Time</th>
                            <th scope="col">Rental/Day</th>
                            <th scope='col'>Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><select class="form-select-sm" value={machine} onChange={handleOrders}>
                                <option selected>select your Machine</option>
                                <option value="demolition">Demolition</option>
                                <option value="driller">Driller</option>
                                <option value="screwer">Screwer</option>
                            </select></td>
                            <td><input class="form-control-sm" type="text" placeholder="order-time" value={time.toLocaleTimeString()} /></td>
                            <td><input class="form-control-sm" type="text" placeholder="Rental Per day" value={rent} /></td>
                            <td><button type="submit" class="btn btn-success sm">Submit</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className='container'>
                    <button type="button" class="btn btn-info">Add More</button>
                </div>
            </div>

        </div>
    )
}
