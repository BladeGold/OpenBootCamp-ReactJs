import React, {useState,  useEffect } from "react";
import ContactComponent  from "../pure/ContactComponent";
import { Contact } from "../../models/contact.class";

const ContactListComponent = () => {

    const contactDefault = new Contact('Example','Primer','example@mail.com',false);

    const [contacts, setContacts] = useState([contactDefault]); 
    

    function changeConected(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts];
        tempContact[index].conected = !tempContact[index].conected;
        setContacts(tempContact);
    } 

    const ListContact = () => {
        return (
            <div>
                {
                    contacts.map((contact, index) => {
                        return (
                        <ContactComponent
                            key={index}
                            contact={contact}
                            conectedChange={changeConected}
                        ></ContactComponent>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div>
            <h1>Contact List</h1>
            <ListContact></ListContact>
        </div>
    )
}

export default ContactListComponent