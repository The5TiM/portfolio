import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { themeStyles } from './styles/theme'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import { infos } from './data/info'
import { GithubData } from './shared/github'
import Footer from './components/Footer'
import Projects from './pages/Projects'

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
      <Navbar username={githubData?.login || ''} />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home githubData={githubData} loading={loading} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<div>Contact</div>} />
          </Routes> 
        </div>
      <Footer name={githubData?.name || ''} />
    </main>
  )
}

export default App
