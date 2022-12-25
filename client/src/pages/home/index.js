import React from 'react';
import Hero from './Hero';
import WhyDonate from './WhyDonate';
import Work from './Work';
import Header from '../../components/header';
import Footer from '../../components/footer';

const index = () => {

    return (
        <React.Fragment>
            <Header />
            <Hero />
            <WhyDonate />
            <Work />
            <Footer />
        </React.Fragment>
    )
}

export default index