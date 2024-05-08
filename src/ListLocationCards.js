import LocationCard from "./LocationCard";

function ListCharCards({locations}) {
    return (
        <div className="d-flex flex-wrap justify-content-evenly mt-5">
            {locations.map((location) => (
                <LocationCard 
                    location={location}
                    key={location.id}
                />
            ))}
        </div>
    )
}

export default ListCharCards;