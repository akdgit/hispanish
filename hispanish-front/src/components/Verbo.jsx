import React from "react";
import "./styles/Verbos.css";

function Verbo(props) {
    return (
        <div className="cont-verbo">
            <h2 className="verbo">{props.verbo}</h2>
            <ul>
                <li className="pri-persona">{props["pri-persona"]}</li>
                <li className="seg-persona">{props["seg-persona"]}</li>
                <li className="ter-persona">{props["ter-persona"]}</li>
                <li className="priplu-persona">{props["priplu-persona"]}</li>
                <li className="segplu-persona">{props["segplu-persona"]}</li>
                <li className="terplu-persona">{props["terplu-persona"]}</li>
            </ul>
            <div className="cont-ek">
                <p className="ejemplo" dangerouslySetInnerHTML={{ __html: props.ejemplo }} />
            </div>
            
        </div>
    );
}

export default Verbo;
