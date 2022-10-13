import { useState, useEffect } from 'react'
import { getPilots } from '../../services/sw-api'

const PilotList = (props) => {
  const [pilots, setPilots] = useState([])
  const pilotUrls = props.starship.pilots

  useEffect(() => {
    const fetchPilots = async () => {
      const pilotsData = await getPilots(pilotUrls)
      setPilots(pilotsData)
    }
    fetchPilots()
  }, [pilotUrls])

  return ( 
    <>
      {pilots.length ?
      <>
        {pilots.map(pilot => 
          <p>
            {pilot.name}
          </p>
        )}
      </>
      :
      <>
        <p>No Pilots</p>
      </>
      }
    </>
  );
}

export default PilotList;