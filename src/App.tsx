import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { themeStyles } from './styles/theme'
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
      <Navbar githubData={githubData} />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home githubData={githubData} loading={loading} />} />
          <Route path="/projects" element={<Projects loading={loading} />} />
          <Route path="/contact" element={<Contact githubData={githubData} loading={loading} />} />
        </Routes> 
      </div>
      <Footer githubData={githubData} />
    </main>
  )
}

export default App
