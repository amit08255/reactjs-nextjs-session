import React from 'react';
import Link from 'next/link';
import { useStoreon } from 'storeon/react';

const Homepage = () => {
    const { session } = useStoreon('session');

    return (
        <div>
            <h1>Home Page</h1>
            <b>Session: </b><i>{session}</i>
            <br/>
            <Link href="/about"><a>About Page</a></Link>
        </div>
    );
};

export default Homepage;
