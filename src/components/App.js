import React from "react";
import CardList from "./CardList.js"


function App() {

  const cardList = [
    {
      image: "https://picsum.photos/200/300",
      name: "John Doe",
      function: "Software Engineer",
      phone: "+1 123-456-7890",
      email: "john.doe@example.com",
      website: "https://example.com"
    },
    {
      image: "https://picsum.photos/200/301",
      name: "Jane Smith",
      function: "Graphic Designer",
      phone: "+1 987-654-3210",
      email: "jane.smith@example.com",
      website: "https://example.com"
    },
    {
      image: "https://picsum.photos/200/302",
      name: "Michael Johnson",
      function: "Project Manager",
      phone: "+1 555-555-5555",
      email: "michael.johnson@example.com",
      website: "https://example.com"
    },
    {
      image: "https://picsum.photos/200/303",
      name: "Emily Davis",
      function: "Marketing Specialist",
      phone: "+1 111-222-3333",
      email: "emily.davis@example.com",
      website: "https://example.com"
    },
    {
      image: "https://picsum.photos/200/304",
      name: "Alex Wilson",
      function: "UX Designer",
      phone: "+1 999-888-7777",
      email: "alex.wilson@example.com",
      website: "https://example.com"
    }
  ];
  return (
    <div className="container">
      <div className="card-container">
        <CardList Data={cardList} />
      </div>
    </div>
  );
}

export default App;