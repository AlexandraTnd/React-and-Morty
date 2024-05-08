import SeeLocation from "./SeeLocation";

function LocationCard({location}) {
    return (
        <div className="card m-2 text-center border border-dark" style={{ width: "250px" }}>
            <div className="card-body d-flex flex-column ">
                <h5 className="card-title bg-info-subtle p-1">{location.name}</h5>
                <p className="card-text mt-auto">Type: {location.type}</p>
                <SeeLocation location={location}/>
            </div>
        </div>
    )
}

export default LocationCard;