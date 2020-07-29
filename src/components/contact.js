import React from 'react';
import YAMLData from '../../data/contact.yaml';

const Contact = () => (
  <div>
    <h1>{YAMLData.contact.name}</h1>
    <h2>{YAMLData.contact.email}</h2>
    <h2>{YAMLData.contact.phone}</h2>
  </div>
);

export default Contact;
