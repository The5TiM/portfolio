import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { themeStyles } from './styles/theme'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import { infos } from './data/info'
import { GithubData } from './shared/github'

function App() {
  const [githubData, setGithubData] = useState<GithubData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/user/${infos.githubId}`)
        const data = await response.json()
        setGithubData(data)
        setLoading(false)
      } catch (err: any) {
        console.error(err.message)
      }
    }

    fetchGithubData()
  }, [])

  return (
    <main className={`h-full ${themeStyles.main} ${themeStyles.text.primary}`}>
      <div className="container mx-auto">
        <Navbar username={githubData?.login || ''} />
        <Routes>
          <Route path="/" element={<Home githubData={githubData} loading={loading} />} />
          <Route path="/projects" element={<div>Projects</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes> 
      </div>
    </main>
  )
}

export default App
