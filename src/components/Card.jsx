export default function Card(props) {
  return (
    <div className="w-[70%] mx-auto">
      <div className="shadow hover:shadow-lg duration-500 rounded-xl flex md:flex-row lg:flex-row  gap-10">
        <img src={props.image} alt="image of moutain" width={270} />
        <div className="w-full flex flex-col gap-10 p-10">
          <div className="flex items-center justify-start gap-5">
            <img src="/pin.png" alt="location icon" width={20} />
            <p className="font-semibold">{props.location.toUpperCase()}</p>
            <a
              href={props.googleMapsUrl}
              target="_blank"
              className="text-gray-500 underline underline-offset-2"
            >
              View on Google Maps
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">{props.title}</h1>
            <p className="font-bold">
              <span>{props.startDate}</span> - <span>{props.endDate}</span>
            </p>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
