import { useContext } from 'react';
import {Context} from '../context/Context';
import PhotoCard from './PhotoCard';
import { useNavigate } from "react-router-dom";
import './stytles.css';

export default function PhotoList() {
    const {allPhotos} = useContext(Context);
    console.log(allPhotos);
    const navigate = useNavigate();
    const toComponentB=()=>{
      navigate('/about',{state:allPhotos});
    }

  return (
    <>
    <button onClick={toComponentB}>Go to My Favorite</button>

    <div className='photo-container'>

      {allPhotos.map((data) => {
          // eslint-disable-next-line react/jsx-key
          return <PhotoCard data={data} />
        })
      }

    </div>
  </>
  );
}
