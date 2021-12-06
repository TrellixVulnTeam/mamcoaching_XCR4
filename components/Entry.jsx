import React from 'react';

function Entry(props){
    return (
        <div class="card">
            <div class="card-body">
                <img class="img-fluid" src={props.img} alt="" />
            </div>
            <div class="card-footer">
                <h2>{props.title}</h2>
                <p>
                    {props.description}  
                </p>
            </div>
        </div>
    )
}

export default Entry;