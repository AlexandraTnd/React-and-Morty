function SeeLocation({ location }) {
    return (
        <div>
            <button data-testid="moreDetails" type="button" className="btn btn-info mt-auto fw-bold" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${location.id}`}>
                See details
            </button>
            <div data-testid="modal" className="modal fade" id={`staticBackdrop${location.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header bg-info-subtle">
                            <h1 className="modal-title fs-5 fw-bold" id="staticBackdropLabel">{location.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-column m-auto" style={{ width: "70%" }}>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="fw-bold">Dimension: </div>
                                    <div className="fw-bold text-primary-emphasis">{location.dimension}</div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="fw-bold">Type: </div>
                                    <div className="fw-bold text-primary-emphasis">{location.type}</div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="fw-bold">Residents: </div>
                                    <div className="fw-bold text-primary-emphasis">{location.residents.length}</div>
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

export default SeeLocation;