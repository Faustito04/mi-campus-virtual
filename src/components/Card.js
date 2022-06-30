export default Card = (size) => {
    return(<div className={`col-md-${size} col-sm-12 my-2`}>
        <div className="card box-shadow campus-boxes">
            <div className="card-header">
                Inscripción ciclo lectivo 2021 - Nivel Secundario
            </div>
            <div className="card-body">
                <img className="img-fluid mb-3" src="img/inscipcion.jpeg" alt="Inscripcion"></img>
                <p>Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo
                    2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
                </p>
            </div>
        </div>
    </div>)
}