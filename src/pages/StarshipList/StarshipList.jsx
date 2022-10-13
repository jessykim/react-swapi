import { useState, useEffect } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'
import './StarshipList.css'

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
      <div className='page'>
        <div id='title'>
          <h3>STAR WARS STARSHIPS</h3>
        </div>
        <div className='all-ships'>
          {starships.map(starship => 
              <Link
                key={starship.name}
                to="/starship"
                state={{ starship }}
                className="ship-container"
              >
                <div key={starship.name}>
                  {starship.name} 
                </div>
              </Link> 
          )}
        </div>
      </div>
    </> 
  );
}

export default StarshipList;