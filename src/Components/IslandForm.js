import { useState } from "react";

export default function IslandForm({ island, incrementVisitors }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        placeholder="Enter Full Name"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        placeholder="Enter Phone Number"
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{8}"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="book"
        onClick={() => {
          if (window.confirm(`Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${phone}`)) {
            alert("Booking confirmed");
            incrementVisitors(island)
          }
        }}
      >
        Book for today!
      </button>
    </div>
  );
}
