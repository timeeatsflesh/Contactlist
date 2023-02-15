import React from "react";

const ContactRow = (props) => {
return (props.contacts.map(contact => {
    return <tr key = {contact.id}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>;
  }))
 
} 

export default ContactRow;