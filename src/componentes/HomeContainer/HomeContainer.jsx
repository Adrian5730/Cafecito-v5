import './HomeContainer.css'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'

const HomeContainer = () => {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}

export default HomeContainer