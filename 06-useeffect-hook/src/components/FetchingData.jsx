import React, { useEffect, useState } from 'react'
const FetchingData = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
      const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            const data = await response.json();

            if(data && data.length){
                setdata(data);
            }
        }

        getData()
    });
  return (
    <div>
      {
        data.map((data) => (
            data.length > 0 ? <h2>Body : {data[0].body}</h2> : ""
        ))
      }
    </div>
  )
}

export default FetchingData
