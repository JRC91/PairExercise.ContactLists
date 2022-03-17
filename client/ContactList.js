import React from 'react';
import { render } from 'react-dom';
import ContactRow from './ContactRow';

function ContactList (prop) {


   return <table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>

    {/* Contact 1 */}
    {prop.contacts.map((ele =>
    < ContactRow key={ele.id} contacts = {ele} />
    ))}
  </tbody>
</table>
}

export default ContactList;

//prop.contacts = this.state.contacts
//arguments is Arraylike =~ prop
