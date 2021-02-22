import './App.scss'
import ApiProvider from './context/ApiContext'
import Routes from './routes'

function App() {
  return (
    <main className='App'>
      <ApiProvider>
        <Routes />
      </ApiProvider>
    </main>
  )
}

export default App
