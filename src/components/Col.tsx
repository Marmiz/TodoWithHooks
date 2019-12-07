import React from 'react';


export type ColProps = {
    size: number,
    children: React.ReactNode,
};

function Col({children, size}: ColProps) {
    return (<div style={{flex: `${size}`}}>
        {children}
    </div>)
}

export default Col;