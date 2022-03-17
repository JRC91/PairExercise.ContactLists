import React from 'react'
//ele imported in as prop.contacts[i]
function ContactRow(prop){
  console.log(prop);
let contacts = prop.contacts;
    return <tr onClick={()=> prop.selectContact(contacts.id)}>
    <td>{contacts.name}</td>
    <td>{contacts.phone}</td>
    <td>{contacts.email}</td>
  </tr>;

}

export default ContactRow;
//prop.contacts
