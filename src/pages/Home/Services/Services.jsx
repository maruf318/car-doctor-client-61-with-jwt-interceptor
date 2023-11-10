// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  // DRY --> Do not repeat yourself
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  const services = useServices(asc, search);
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/services?sort=${asc?"asc":"desc"}&search=${search}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setServices(res);
  //     });
  // }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    // console.log(searchtext);
    setSearch(searchText);
  };
  return (
    <div className="mt-4 space-y-4">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#FF3811]">Service</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
        <form onSubmit={handleSearch}>
          <input
            className="border-pink-500 border-2"
            type="text"
            name="search"
            id=""
          />
          <input type="submit" value="Search" className="btn" />
        </form>
        <button onClick={() => setAsc(!asc)} className="btn btn-secondary">
          {asc ? "Price: High to Low" : "Price: Low to High"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
