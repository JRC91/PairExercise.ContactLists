import React from "react";
import Favorite from "./Favorite";

function SingleContact (prop) {
  console.log(prop);
  let selectedContact = prop.selectContacted;
  console.log(selectedContact);
  let {name, email, imageUrl, phone} = selectedContact;
  return <div id='single-contact'>
  <img src={imageUrl} />
  <div id='contact-info'>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <Favorite prop = {prop} />
  </div>
</div>
}

export default SingleContact;
