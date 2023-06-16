import {useContext} from 'react';
import {Context} from '../context/Context';
/* eslint-disable react/prop-types */
const PhotoCard = (props) => {
    const {setAllPhotos, allPhotos} = useContext(Context);
    
    
    
    
    const addFav = () => {

        const photosListAfterFav= allPhotos.map((item) => {

            if(item.id === props.data.id){
                item.isFavorite = !item.isFavorite;
                
                
                }
                return item;
            })
        
        setAllPhotos(photosListAfterFav);

        
  
        };
        

    // eslint-disable-next-line react/prop-types
    return( 

        <div style ={{boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px', padding:'2px'}}>
        <img width={200} src={props.data.image} />
        <p>{props.data.description}</p>
        <button onClick={addFav}>
            {
                props.data.isFavorite ? 'Remove Favorite' : 'Add Favorite'
            }
        </button>
        </div> 
    ) 
};

export default PhotoCard;