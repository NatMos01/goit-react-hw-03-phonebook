import css from './ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(item => {
          return (
            <li key={item.id} className={css.contactListItem}>
              <p className={css.contactName}>
                {item.name}:{' '}
                <span className={css.contactNumber}>{item.number}</span>
              </p>
              <button
                type="button"
                name="delete"
                className={css.contactDeleteBtn}
                onClick={() => onRemoveContact(item.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};