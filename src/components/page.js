import React from 'react';
import ContactList from '../containers/contact-list';
import  AddContact  from '../containers/add-contact';
import { Grid } from 'semantic-ui-react'

const Page = () =>(
  <Grid>
    <Grid.Row>
      <Grid.Column width={4}>
        <ContactList />
      </Grid.Column>

      <Grid.Column width={5}>
        <AddContact />
      </Grid.Column>
      
      <Grid.Column width={7}>
      
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Page;