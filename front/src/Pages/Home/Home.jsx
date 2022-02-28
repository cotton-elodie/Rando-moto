// import react
import React from 'react'
import Content from "../../Components/ContentHome/Content";
// import style
import '../Home/home.scss'
import ContentItinerary from "../../Components/ContentItinerary/ContentItinerary";
import {Link} from "react-router-dom";

const Home = () =>{
    return (
        <>
            <Content />
            <h2 className='home__title'>Des balades motos à couper le souffle</h2>
            <ContentItinerary />
            <Link to="#" className='btn-createItinerary'>Créer votre itineraire</Link>
            <div className='home__content'>
                <div className='home__content-text'>
                    <h3>DÉCOUVREZ DE NOUVELLES ROUTES</h3>
                    <p>Où que vous soyez, trouvez de nouvelles balades moto à faire seul ou à plusieurs.
                        Celles-ci comportent des photos pour vous donner un aperçu mais également des points d'intérêt.
                    </p>
                </div>
                <div className='home__content-text'>
                    <h3>PARTAGEZ VOS BALADES À MOTO</h3>
                    <p>En quelques instants, depuis le site internet ou en important depuis votre GPS, partagez votre balade moto.
                        Vous en gardez la trace et en faite profiter les membres.
                    </p>
                </div>
            </div>
        </>
    )
}



export default React.memo(Home)
