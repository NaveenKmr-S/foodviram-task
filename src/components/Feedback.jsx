import React from "react";
import "./main.css";

export default function feedback(){
    return(
        <div class="testbox">
        <form action="/">
          <h1>Feedback Form</h1>
          <p>Please help us improve our restaurant services by filling in our feedback form. Thank you!</p>
          <h4>Name</h4>
          <div class="name">
            <input type="text" name="name" placeholder="First" />
            <input type="text" name="name" placeholder="Last" />
          </div>
          <h4>Email</h4>
          <input type="text" name="name" />
  
          <table>
            <tr>
              <th class="first-col"></th>
              <th>Amazing</th>
              <th>Good</th>
              <th>Decent</th>
              <th>Bad</th>
            </tr>
            <tr>
              <td class="first-col">Food Quality</td>
              <td><input type="radio" value="none" name="Food" /></td>
              <td><input type="radio" value="none" name="Food" /></td>
              <td><input type="radio" value="none" name="Food" /></td>
              <td><input type="radio" value="none" name="Food" /></td>
            </tr>
            <tr>
              <td class="first-col">Service Quality</td>
              <td><input type="radio" value="none" name="Service" /></td>
              <td><input type="radio" value="none" name="Service" /></td>
              <td><input type="radio" value="none" name="Service" /></td>
              <td><input type="radio" value="none" name="Service" /></td>
            </tr>
            <tr>
              <td class="first-col">Speed of Service</td>
              <td><input type="radio" value="none" name="Speed" /></td>
              <td><input type="radio" value="none" name="Speed" /></td>
              <td><input type="radio" value="none" name="Speed" /></td>
              <td><input type="radio" value="none" name="Speed" /></td>
            </tr>
            <tr>
              <td class="first-col">Price</td>
              <td><input type="radio" value="none" name="Price" /></td>
              <td><input type="radio" value="none" name="Price" /></td>
              <td><input type="radio" value="none" name="Price" /></td>
              <td><input type="radio" value="none" name="Price" /></td>
            </tr>
          </table>
          <h4>Any comments, questions or suggestions?</h4>
          <textarea rows="5"></textarea>
          <div class="btn-block">
            <button type="submit" href="/">Send Feedback</button>
          </div>
        </form>
      </div>
  
    );
}