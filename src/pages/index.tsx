import styled from 'styled-components'
import Body from '../components/Body'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <Container>
      <Header pageName="Dashboard" />
      <Body>
        <h1 style={{ color: '#000', fontSize: 100 }}>OI</h1>
      </Body>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
