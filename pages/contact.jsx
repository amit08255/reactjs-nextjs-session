import React from 'react';
import { useStoreon } from 'storeon/react';

const Aboutpage = () => {
    const { session } = useStoreon('session');

    return (
        <div>
            <h1>Contact Page</h1>
            <b>Session: </b><i>{session}</i>
            <br/>
        </div>
    );
};

export default Aboutpage;
