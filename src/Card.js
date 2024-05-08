import SeeChar from "./SeeChar"

function Card({ char }) {
    return (
        <div className="card m-2 text-center border border-dark" style={{ width: "250px" }}>
            <img src={char.image} className="card-img-top img-fluid" alt={char.name} />
            <div className="card-body d-flex flex-column ">
                <h5 className="card-title bg-info-subtle p-1">{char.name}</h5>
                <p className="card-text mt-auto">{char.species}</p>
                <SeeChar char={char}/>
            </div>
        </div>
    )
}

export default Card;