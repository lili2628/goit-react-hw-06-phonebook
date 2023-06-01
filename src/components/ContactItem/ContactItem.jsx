
import { ListItem, InfoContainer, InfoItemContainer, Data, DeleteBtn } from './ContactItem.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';
import { getContacts, getFilter } from 'store/selectors';

function ContactItem() {
    const dispatch = useDispatch();
    const normalizedFilter = useSelector(getFilter)?.toLowerCase() || '';
    const contacts = useSelector(getContacts);
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
        <>
            {visibleContacts.map(({id, name, number}) => (
                <ListItem key={id}>
                    <InfoContainer>
                        <InfoItemContainer>
                            <Data>{name}</Data>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <Data>{number}</Data>
                        </InfoItemContainer>
                    </InfoContainer>
                    <DeleteBtn type="button" onClick={() => dispatch(deleteContact({ id }))}>
                        Delete contact
                    </DeleteBtn>
                </ListItem>
            ))}
        </>
    );
}


export default ContactItem;

