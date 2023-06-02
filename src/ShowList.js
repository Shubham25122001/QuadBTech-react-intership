import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/shows');
        setShows(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      {shows.map((show) => (
        <div key={show.id}>
          <h2>
            <Link to={`/shows/${show.id}`}>{show.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ShowList;
