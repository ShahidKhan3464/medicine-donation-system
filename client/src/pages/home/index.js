import React from 'react'
import Hero from './Hero'
import WhyDonate from './WhyDonate'
import Work from './Work'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

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