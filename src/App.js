import React from "react";

function App() {
  const name = "Anus";
  const obj = { name: "Hello World Object" };
  const data = ["We", "Are", "United"];
  const list = [
    {
      Name: "Anas",
    },
    {
      Email: "abc@gmail.com",
    },
    {
      Address: "Karachi",
    },
  ];

  const complex = [
    {
      companay: "XYZ",
      jobs: ["javascript", "react"],
    },
    {
      companay: "ABC",
      jobs: ["AnugularJs", "Iconic"],
    },
  ];

  return (
    <div className="App">
      <h3>{name}</h3>
      <p>{obj.name}</p>
      <ol>
        {data.map(function (item) {
          return <li>{item}</li>;
        })}
      </ol>
      {/* {list.map(function (item, index) {
        return <h2 key={index}>{item}</h2>;
      })} */}

      {list.map(function (item) {
        return (
          <>
            <h1>{item.Name}</h1>
            <p>{item.Email}</p>
            <p>{item.Address}</p>
          </>
        );
      })}

      <table border={1.5}>
        <tr>
          <th>companay</th>
          <th>jobs</th>
        </tr>
        <>
          {complex.map(function (item) {
            return (
              <tr>
                <td>{item.companay}</td>
                <td>{item.jobs}</td>
              </tr>
            );
          })}
        </>
      </table>
    </div>
  );
}

export default App;
