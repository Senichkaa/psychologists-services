import React, { useState, useEffect } from 'react';
import { get, ref } from 'firebase/database';
import { db } from '../../firebase';
import PsychologistCard from './PsychologistCard/PsychologistCard';
import { nanoid } from 'nanoid';
import { LoadMoreButton } from './Psychologists.styled';

const Psychologists = ({ filterOption }) => {
  const [doctor, setDoctor] = useState([]);
  const [availableDoctors, setAvailableDoctors] = useState(3);
  const [error, setError] = useState(null);

  const loadMoreHandler = () => {
    setAvailableDoctors(prevAvailableDoctors => prevAvailableDoctors + 3);
  };

  const filterOptions = (doctorsArray, option) => {
    switch (option) {
      case 'A to Z':
        return doctorsArray.sort((a, b) => a.name.localeCompare(b.name));
      case 'Z to A':
        return doctorsArray.sort((a, b) => b.name.localeCompare(a.name));
      case 'Less than 10$':
        return doctorsArray.filter(person => person.price_per_hour < 10);
      case 'Greater than 10$':
        return doctorsArray.filter(person => person.price_per_hour > 10);
      case 'Popular':
        return doctorsArray.filter(person => person.rating > 4);
      case 'Non popular':
        return doctorsArray.filter(person => person.rating <= 4);
      default:
        return doctorsArray;
    }
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsRef = ref(db, '/');
        const doctorsSnapshot = await get(doctorsRef);

        if (doctorsSnapshot.exists()) {
          const doctorsData = doctorsSnapshot.val();
          const doctorsArray = Object.entries(doctorsData).map(
            ([id, data]) => ({
              id: nanoid(),
              ...data,
            })
          );

          let filteredDoctors = filterOptions(doctorsArray, filterOption);
          setDoctor(filteredDoctors.slice(0, availableDoctors));
        }
      } catch (error) {
        console.error('Firebase error:', error);
        setError(error.message);
      }
    };

    fetchDoctors();
  }, [filterOption, availableDoctors]);

  return (
    <section style={{ paddingBottom: 50 }}>
      {error && <div>Error: {error}</div>}
      <ul>
        {doctor.map(doctor => (
          <PsychologistCard key={doctor.id} doctor={doctor} />
        ))}
      </ul>
      {doctor.length >= 3 && (
        <LoadMoreButton onClick={loadMoreHandler}>Load more</LoadMoreButton>
      )}
    </section>
  );
};

export default Psychologists;
