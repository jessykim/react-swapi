import { useState, useEffect } from 'react'
import { getPilots } from '../../services/sw-api'
import './PilotList.css'

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
          <p key={pilot.name}>
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