import React from "react";

function Vedio({ item }) {
    return (
        <div className="vedio">
            <iframe width="400" height="250" src={item.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    )
}

export default Vedio;