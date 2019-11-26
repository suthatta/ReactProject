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
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul className="Project-Lists">
      {data.items.map(item => (
        < li key={item.id} >
          Name :{item.name}
          <br></br>
          Description :{item.des}
        </li>
      ))
      }
    </ul >
  );
}

export default Hooks;