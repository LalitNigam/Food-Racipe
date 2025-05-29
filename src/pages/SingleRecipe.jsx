import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { racipecontext } from '../context/RacipeContext';

const SingleRecipe = () => {
    const {data} = useContext(racipecontext);
    const params = useParams();
    const recipe = data.find
  return (
    <div>
      SingleRecipe
    </div>
  )
}

export default SingleRecipe
