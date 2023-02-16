import React, { useState } from "react";
import dummyContacts from "../dummyData";
import {ContactList} from "./"

const Main = () => {
  const [contacts, setContacts] = useState([]);
 
  const getContacts = async () => {
    try {
      const response = await fetch('http://jsonplace-univclone.herokuapp.com/users')
      const contacts = await response.json()
      setContacts(contacts)
      console.log('got data')      
    } catch (error) {
      console.log('there is no data')
    }

  }



  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <ContactList contacts={contacts}/>
  </div>
  </div>
);};
export default Main;
