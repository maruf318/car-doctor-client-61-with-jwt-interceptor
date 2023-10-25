const ServiceCard = ({ service }) => {
  const { title, img, price } = service || {};
  return (
    <div className="card p-2 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-xl text-[#FF3811] font-semibold ">Price: ${price}</p>
        <div className="card-actions">
          <button className="btn btn-outline btn-error text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
