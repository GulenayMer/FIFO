import Navigation from '../Navigation'
import Main from './Main'
import Footer from './Footer'


const DefaultLayout = ({children}) => {
  return (
	<>
	<Navigation></Navigation>
	<Main> {children} </Main>
	<Footer></Footer>
	</>
  )
}

export default DefaultLayout