/* eslint-disable react/jsx-key */
import { useContext } from 'react';
import {Context} from '../context/Context';
import '../components/stytles.css';
import { Link } from 'react-router-dom'
import PhotoCard from '../components/PhotoCard';

export default function Myfavorite() {
    const {allPhotos} = useContext(Context);
    console.log(allPhotos);


  return (
    <>

    <Link to='/'>Go Back</Link>
    <div className='photo-container'>

      {allPhotos.map((data) => {
          // eslint-disable-next-line react/jsx-key
          if(data.isFavorite){
            return <PhotoCard data={data} />
          }
          
        })
      }

    </div>
  </>
  );
}


// const MyFavorite = () => {
//     const {state} = useLocation();
//     const[allPhotos, setAllPhotos] = useState(state);
//     console.log(allPhotos);
//     const addFav = () => {
//         const photosListAfterFav= allPhotos.map((item) => {
//             if(item.isFavorite){
//                 item.isFavorite = false;
//                 }
//                 return item;
//             })
//         setAllPhotos(photosListAfterFav);
//         };
    


//     return (
//         <div className='photo-container'>
//             {allPhotos.map((item) => {
//                 if(item.isFavorite){
//                     return (
//         <div style ={{background: item.isFavorite? 'red' : '#fff', boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px', padding:'2px'}}>
//         <img width={200} src={item.image} />
//         <p>{item.description}</p>
//         <button onClick={addFav}>
//             {
//                 item.isFavorite ? 'Remove Favorite' : 'Add Favorite'
//             }
//         </button>
//         </div> 
//                     )
//                 }
//             })
//             }
//         </div>
//     )
// }
// export default MyFavorite;
