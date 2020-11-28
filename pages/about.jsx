import React from 'react';
import Link from 'next/link';
import { useStoreon } from 'storeon/react';

const Aboutpage = () => {
    const { session } = useStoreon('session');

    return (
        <div>
            <h1>About Page</h1>
            <b>Session: </b><i>{session}</i>
            <br/>
            <Link href="/contact"><a>Contact Page</a></Link>
        </div>
    );
};

export default Aboutpage;
