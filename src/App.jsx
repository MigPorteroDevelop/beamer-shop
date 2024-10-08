import { useEffect, useState } from 'react'
import Header from './components/Header'
import Beamer from './components/Beamer'
import { db } from './data/db'

function App() {

  //state
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(db)
  }, [])

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Our Collection</h2>

        <div className="row mt-5">
          {data.map((beamer) => (
            <Beamer 
              key={beamer.id}
              beamer = {beamer}
            />
          )
          )}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Visuamer - All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
