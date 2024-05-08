import Card from "./Card";


function ListCards({characters}) {
    return (
        <div className="d-flex flex-wrap justify-content-evenly mt-5">
            {characters.map((char, index) => (
                <Card 
                    char={char}
                    key={index}
                />
            ))}
        </div>
    )
}

export default ListCards;