import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/sw-api'
import { Link } from 'react-router-dom'

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
      <div>
        {starshipDetails.name ?
        <>
          <h4>NAME: {starshipDetails.name}</h4>
          <h4>MODEL: {starshipDetails.model}</h4>
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
    </> 
  );
}

export default StarshipDetails;