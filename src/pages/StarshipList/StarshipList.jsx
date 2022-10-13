import { useState, useEffect } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipData()
  }, [])

  return ( 
    <>
      <h3>STAR WARS STARSHIPS</h3>
      <div className='ship-container'>
        {starships.map(starship => 
          <Link
            key={starship.name}
            to="/starship"
            state={{ starship }}
          >
            <div key={starship.name}>
              {starship.name}  
            </div>
          </Link> 
        )}
      </div>
    </> 
  );
}

export default StarshipList;