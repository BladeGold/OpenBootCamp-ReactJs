import React, {useEffect} from "react";
import PropTypes from 'prop-types';

//Models
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact, conectedChange}) => {

    
    return(
        <div>
            <ul>
                <li>Nombre: {contact.name}</li>
                <li>Apellido: {contact.last_name}</li>
                <li>Correo: {contact.email}</li>
                <li>{contact.conected ? 'Contacto En Linea' : 'Contacto No Disponible'}</li>
            </ul>
            <button onClick={()=> conectedChange(contact)}> {contact.conected ? 'Desconectar' : 'Conectar' } </button>
        </div>
    )
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    conectedChange: PropTypes.func.isRequired,
};



export default ContactComponent;