
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import useWindowDimensions from '../../hooks/useWindowSize'
import MobileBackNavigate from '../../components/general/MobileBackNavigate'

import Container from '../../assets/containers/NotFound'

const NotFound = () => {

    const { width } = useWindowDimensions()

    return (
        <Container>
            <Helmet>
                <title>
                    Page not found | Ankrom
                </title>
            </Helmet>
            {width <= 562 &&
                <MobileBackNavigate text={"not found"} />
            }
            <div className="wrapper">
                <div className='img-wrapper'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/question-mark.jpg?alt=media&token=9125e5d4-e144-4b23-810b-7e9f6c5715a4" alt="" />
                </div>
                <p>Hmm...this page doesn’t exist. Try searching for something else.</p>
                <Link to="/">Homepage</Link>
            </div>
        </Container >
    )
}

export default NotFound