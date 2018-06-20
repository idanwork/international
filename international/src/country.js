import React from 'react';

const country = (c) => {
    return(<div className="country"><img src={c.flagUri}/> {c.name}</div>);
}

export default country;
