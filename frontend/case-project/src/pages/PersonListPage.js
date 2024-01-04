// PersonListPage.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import './PersonListPage.css'; // Stil dosyasını import et

const PersonListPage = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get('/api/users');
        setPersons(response.data);
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    };

    fetchPersons();
  }, []);

  return (
    <div className="person-list-container">
      <h1>Person List</h1>
      <div className="grid-container">
        <div className="grid-item">ID</div>
        <div className="grid-item">Username</div>
        <div className="grid-item">Password</div>
        <div className="grid-item">Email</div>
        <div className="grid-item">City</div>
        <div className="grid-item">District</div>

        {persons.map((person) => (
          <React.Fragment key={person.id}>
            <div className="grid-item">{person.id}</div>
            <div className="grid-item">{person.username}</div>
            <div className="grid-item-password">{person.password}</div>
            <div className="grid-item">{person.email}</div>
            <div className="grid-item">{person.city}</div>
            <div className="grid-item">{person.district}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PersonListPage;
