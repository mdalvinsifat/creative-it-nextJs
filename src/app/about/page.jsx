import React from 'react';
import LayOut from '../Layout/LayOut';
import Section from './Section';
import Section1 from './Section1';
import Section2 from './Section2';

const page = () => {
    return (
        <LayOut>
           <Section></Section>
           <Section1></Section1>
           <Section2></Section2>
        </LayOut>
    );
};

export default page;