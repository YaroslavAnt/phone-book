import React from 'react';
import ContactList from '../containers/contact-list';
import { AddContact } from '../containers/add-contact';

const Page = () =>(
  <div>
    <ContactList />
    <AddContact />
  </div>
);

export default Page;