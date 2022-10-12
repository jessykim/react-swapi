import { useState, useEffect } from 'react'
import { getAllStarships } from '../../services/sw-api'

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return ( 
    <>
      <h3>Starship List</h3>
      <div className='ship-container'>
        {starships.map(starshipName => 
          <div>
            {starshipName.name}  
          </div>
        )}
      </div>
    </> 
  );
}

export default StarshipList;