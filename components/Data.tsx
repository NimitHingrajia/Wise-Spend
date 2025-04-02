"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
// import getUsersInfoAdmin from "@/app/models/Data";

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const result = await getUsersInfoAdmin();
        const response = await axios.get("/api/route");
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <h1>Users</h1>
      {/* <ul>
        {data.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Data;
