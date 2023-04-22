import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id='contact'>
      <div id='contact-address'>
        <h1>Contact Us</h1><br/>
        <h3><u>sathyafoods@gmmail.com</u><br/>
        1234567891 </h3><br/>
        <h4>Sathayafoods,Villapaliy,<br/>
          Vadakara,kozhikode,kerala</h4>
      </div>
      <div className='contact_table'>
        <form action="/" method="get" id='tableform'>
          <table id='tableform'>
            <tr>
              <td><u><input type='text' placeholder='Name' className='name' required/></u></td>
              <td><input type='Text' placeholder='Email' className='name' required/></td>
            </tr>
            <tr>
              <th colspan="2"><input type='Text' placeholder='Subject' className='subject' required/></th>
            </tr>
            <tr>
              <th colSpan="2"><textarea type="text" placeholder='Type your Massage here...' className='feedback'/></th>
            </tr>
            <tr>
            <th colspan="2"><input type='button' value='Submit' id='btn'/></th>
            </tr>
          </table>
        </form>
      </div>
    </div>
  )
}

export default Contact