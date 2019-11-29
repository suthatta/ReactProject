import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Hooks.css'

export const Hooks = () => {

  const [data, setData] = useState({ items: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://portfolio-d23d4.firebaseio.com/projects.json',
      );
      setData({ items: result.data });
    };
    fetchData();
  }, []);
  return (
    <div className="wrapper"><h3>Hooks</h3>
      <ul className="hooks-items">
        {data.items.map(item => (
          < li key={item.id} >
            <p>Name :{item.name}</p>
            <p>Description :{item.des}</p>
          </li>
        ))}
      </ul >
    </div>

  );
}

