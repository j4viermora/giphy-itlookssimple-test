import { useEffect, useState } from "react";
import { Buttom } from "../components/Buttom/";
import { CardGif } from "../components/CardGif/";
import { Navbar } from "../components/Navbar/";
import { getRandomGif } from "../utils/getGifRadom";
import './style.css';

const Home = () => {

    const [ gifs, updateGifs ] = useState([])

    const handleClick = () => {
       
        getRandomGif()
            .then(updateGifs)

    }

    useEffect( () => {
        getRandomGif().then( updateGifs )
    }, [] );
    

    return (
        <>
            <Navbar/>
            <section className="mb" >
                <Buttom onClick={ handleClick } />

                <div className="col">    
                     { 
                             gifs?.map( ( item ) => (
                                    <CardGif                        
                                        key={ item.id }
                                        title={ item.title }
                                        image_url={ item.url }
                                    />))   
                    }
                </div>
            </section>
        </>
    )
}

export default Home