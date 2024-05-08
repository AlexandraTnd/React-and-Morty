function SeeChar({ char }) {
    return (
        <div>
            <button data-testid="moreDetails" type="button" className="btn btn-info mt-auto fw-bold" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${char.id}`}>
                See
            </button>   
            <div data-testid="modal" className="modal fade" id={`staticBackdrop${char.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header bg-info-subtle">
                            <h1 className="modal-title fs-5 fw-bold" id="staticBackdropLabel">{char.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid border border-primary" src={char.image} alt={char.name} />
                            <div className="d-flex flex-column m-auto" style={{width: "70%"}}>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="fw-bold">Species: </div>
                                    <div className="fw-bold text-primary-emphasis">{char.species}</div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="fw-bold">Gender: </div>
                                    <div className="fw-bold text-primary-emphasis">{char.gender}</div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="fw-bold">Status: </div>
                                    <div className="fw-bold text-primary-emphasis">{char.status}</div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="fw-bold">Location: </div>
                                    <div className="fw-bold text-primary-emphasis">{char.location.name}</div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeChar;