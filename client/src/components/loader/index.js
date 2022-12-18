import FadeLoader from "react-spinners/FadeLoader"
import { Loader } from './style'

const Index = () => {
    return (
        <Loader>
            <FadeLoader loading="true" />
        </Loader>
    )
}

export default Index