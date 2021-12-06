import React from "react"
import coreValues from "../values";
import Entry from "../components/Entry";

function App(){
    return(
        <div>
            {coreValues.map((valueTerm) =>(
                <Entry
                key={valueTerm.id}
                title={valueTerm.title}
                img={valueTerm.img}
                description={valueTerm.description}
                />
            ))}
        </div>
    );
}

export default App;