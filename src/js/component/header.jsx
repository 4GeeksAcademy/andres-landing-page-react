import React from "react";

const Header = () => {
    return (
            <div className= "container-fluid text-bg-secondary border rounded-3 py-5 m-3">
                <h1 className="container-fluid fw-bold">Jumbotron Substitute</h1>
                <p className="col-md 8 fs-4">
                    Bootstrap, a partir de la version 5, no tiene ningun component llamado 'Jumbotron', aqui habra un substituto.
                </p>
                <button className="btn btn-primary btn-lg d-flex justify-content-start" type="button">Call to action!</button>
            </div>
    );
}
export default Header;