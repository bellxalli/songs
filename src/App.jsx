import Header from "./components/Header"
import Footer from "./components/Footer"
import Song from "./components/Song"
import Songs from "./songData.json"


function App() {
  const songElements = [];

  Songs.songs.forEach((s, index) => {
    songElements.push(<Song key={index} {...s}/>)
  })

  return (
  
    <div>
      
      <Header />
      {songElements}
      <Footer />

    </div>

  )
}

export default App
