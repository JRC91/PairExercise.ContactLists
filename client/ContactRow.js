import React from 'react'

function ContactRow(prop){
  console.log(prop)
let contacts = prop.contacts;
    return <tr>
    <td>{contacts.name}</td>
    <td>{contacts.phone}</td>
    <td>{contacts.email}</td>
  </tr>;

}

export default ContactRow;
//prop.contacts
