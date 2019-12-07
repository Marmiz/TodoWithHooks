import React from 'react';
import "./row.css";


function Row(props: {children: React.ReactNode}) {
    return (<div className="row">
        {props.children}
    </div>)
}

export default Row;