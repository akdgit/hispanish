import React, { useState } from "react";
import Verbo from "./Verbo";
import "./styles/Conjugaciones.css";

function Conjugaciones(props) {

    const[showVerb, setShowVerb] = useState(false);

    const toggleVerb = () => {
        setShowVerb(!showVerb);
    };

    return (
        <div className="cont-tiempo">
            <h1 onClick={toggleVerb} className="tiempo">{props.tiempo}</h1>
            {showVerb && (   
                 <div className="contenido-tiempo">
                    <p className="concepto">{props.concepto}</p>

                    <div className="conjugaciones">
                        {props.verbos.map((verbo, index) => (
                            <Verbo key={index} {...verbo} />
                        ))}
                    </div>
                </div>
            )} 
        </div>
    );
}

export default Conjugaciones;
