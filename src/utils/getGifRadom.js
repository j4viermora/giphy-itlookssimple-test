import { URL } from "../constants/constants";
import axios from "axios";

const getGif = async () => { 
    try{
        const { data } = await axios.get( URL );
        const resp = data.data ;
        return resp
    }catch(err){
        console.log(err)
    }
}

export const getRandomGif = async () => {
    const gifs1 = [ ...Array(10) ].map( () => {          
            return getGif();
    } );
    const data = await Promise.all( gifs1 ) ;

    return data;
 
}
