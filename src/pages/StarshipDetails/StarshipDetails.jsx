import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/sw-api'
import { Link } from 'react-router-dom'
import PilotList from '../PilotList/PilotList'
import './StarshipDetails.css'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return ( 
    <>
      <div className='page'>
        <div id='title'>
          <h3>STARSHIP DETAILS</h3>
        </div>
        <div className='details-container'>
          {starshipDetails.name ?
          <>
            <h4><span>NAME: </span>{starshipDetails.name}</h4>
            <h4><span>MODEL: </span>{starshipDetails.model}</h4>
            <h4><span>PILOTS: </span><PilotList starship={starshipDetails} /></h4>
            <Link
              to="/"
            >
              <p>RETURN</p>
            </Link>
          </>
          :
          <>
            <p>Loading starship details... please hold</p>
          </>
          }
        </div>
      </div>
    </> 
  );
}

export default StarshipDetails;