import React from 'react';

import ContactRow from './ContactRow';

function ContactList (prop) {

//we had a render here that didn't do anything
   return <table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>

    {/* Contact 1 */}
    {console.log(prop)}
    {prop.contacts.map((ele =>
    < ContactRow key={ele.id} contacts = {ele} selectContact = {prop.selectContact}/>
    ))}
  </tbody>
</table>
}

export default ContactList;

//prop.contacts = this.state.contacts
//arguments is Arraylike =~ prop
