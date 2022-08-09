import Header from './header/Header';
import Banner from './banner/Banner';
import Top from './section/Top'
import Work from './section/Work'
import Footer from '../footer/Footer'
import './section/style.css'

const home = () => {

    return (
        <>
            <Header />
            <Banner />
            <Top />
            <Work />
            <Footer />
        </>
    )
}

export default home