import React, {useState} from 'react';
import { Form, FormData, FormLabel, FormInput, AddBtn } from './ContactForm.styled'; 
import { addContact } from '../../store/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/selectors';
import { nanoid } from 'nanoid';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNumber = e => {
    setNumber(e.target.value);
  };

  const resetForm = () => {
    setName('');
    setNumber(''); 
  };

  const onSubmitForm = e => {
    e.preventDefault();

    const id = nanoid();

    if (contacts.find(contact => contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase())) {
      alert(`${e.target.elements.name.value} is already in contact`);
    } else {
       dispatch(addContact({ id, name, number}));
    };

    resetForm();
  };


    return (
      <Form onSubmit={onSubmitForm}>
        <FormData>
          <FormLabel>
            Name
            <FormInput
            type="text"
            name="name"
            value={name}
            onChange={onChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </FormLabel>
        
          <FormLabel>
            Number
            <FormInput
              type="tel"
              name="number"
              value={number}
              onChange={onChangeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
        </FormData>

        <AddBtn type="submit">
          Add contact
        </AddBtn>
      </Form>
    );
  }
    


export default ContactForm;



