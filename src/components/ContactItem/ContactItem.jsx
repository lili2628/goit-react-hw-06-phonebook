
import { ListItem, InfoContainer, InfoItemContainer, Data, DeleteBtn } from './ContactItem.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';

function ContactItem() {
    const dispatch = useDispatch();
    const normalizedFilter = useSelector(state => state.filter.filter)?.toLowerCase() || '';
    const contacts = useSelector(state => state.contacts.contacts);
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

