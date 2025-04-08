import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { themeStyles } from './styles/theme'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import { infos } from './data/info'

interface GithubData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

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
      <div className="container mx-auto px-8">
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
