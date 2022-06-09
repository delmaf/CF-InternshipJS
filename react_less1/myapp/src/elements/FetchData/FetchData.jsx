/* eslint-disable no-unused-vars */
import React from "react";

import { useState, useEffect } from "react";

export const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/phoneNumbers`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          {data.city} {data.number}
        </li>
      ))}
    </ul>
  );
};

export default FetchData;
