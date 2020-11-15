import React from 'react'
import './main.css';

const FormExampleFieldControlId = () => (

    <div className="testbox">
      <form action="/">
        <h1>Complaint Form</h1>
        <div className="item">
          <p>Restaurant Name</p>
          <input type="text" name="name"/>
        </div>
        <div className="item">
          <p>Name</p>
          <div className="name-item">
            <input type="text" name="name" placeholder="First" />
            <input type="text" name="name" placeholder="Last" />
          </div>
        </div>
        <div className="item">
            <p>Email</p>
            <input type="text" name="name"/>
        </div>
        <div className="item">
          <p>Phone</p>
          <input type="text" name="name"/>
        </div>

        <div className="item">
          <p>Please Explain Your Complaint</p>
          <textarea rows="5"></textarea>
        </div>
        
        <div className="btn-block">
          <button type="submit" href="#">SEND</button>
        </div>
      </form>
    </div>



)

export default FormExampleFieldControlId