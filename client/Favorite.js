import React from 'react';
import axios from 'axios';

const Favorite = (props) => {
  console.log(props);
  const { selectContact, selectContacted } = props.prop;
  console.log(selectContact);
  const updateFavoriteStatus = async (contactId) => {
    await axios.put(`/api/contacts/${contactId}`, ({
      favorite: !selectContacted.favorite,
    }));
     selectContact(contactId);
  };

  return (
    <div className="fav-container" onClick={()=>updateFavoriteStatus(selectContacted.id)}>
      {selectContacted.favorite ? (
        <img className="fav-image" src="/checked.png"></img>
      ) : (
        <img className="fav-image"  src="/unchecked.png"></img>
      )}
      <span>Favorite</span>
    </div>
  );
};

export default Favorite;
