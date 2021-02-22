import { Layout } from 'antd'
import './App.scss'
import ApiProvider from './context/ApiContext'
import Routes from './routes'

const { Header, Content, Footer, Sider } = Layout

function App() {
  return (
    <Layout className='layout'>
      <Header>Header</Header>
          <Layout>
            <Content style={{ padding: '30px 30px', minHeight: 'calc(100vh - 134px)'}}>
              <main className='App'>
                <ApiProvider>
                  <Routes />
                </ApiProvider>
              </main>
            </Content>
            <Sider>Sider</Sider>
          </Layout>
      <Footer style={{ textAlign: 'center' }}>©2021 Created by <a href={'mailto:hnrq.assuncao@gmail.com'}>HnrqSs</a></Footer>      
    </Layout>
  )
}

export default App
