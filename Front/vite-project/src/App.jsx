import { useEffect, useState } from 'react'
import dataFetch from './utils/dataFetch'
import './App.css'

function App() {
  const [dataAPI, setDataAPI] = useState({ dataInfo: null })

  useEffect(() => {
    const callFetch = async () => {
      const data = await dataFetch();
      setDataAPI({ dataInfo: data })


    }
    callFetch();
  }, [])

  const { dataInfo } = dataAPI


  return (
    <div className='container'>
      <div className='row'>

        {
          dataInfo?.results.map(item => (
            <div className='card col-4 mt-3 mb-3'>
              <img src={item.image} alt={item.name} />
              <p key={item.id}>
                {item.name}
              </p>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default App
