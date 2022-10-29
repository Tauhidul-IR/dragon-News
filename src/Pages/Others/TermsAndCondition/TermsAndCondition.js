import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here is out Terms and conditions</h3>
            <p>Do back to <Link to={'/register'}>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;