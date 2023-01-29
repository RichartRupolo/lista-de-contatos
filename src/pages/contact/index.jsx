import { Link } from 'react-router-dom';

export default function Contact({ contact }) {
  return (
    <li>
      <Link to={`/edit-contact/${contact.id}`}>
        {contact.name} ({contact.phone})
      </Link>
    </li>
  );
}