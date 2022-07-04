import Banner from './components/Banner'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'

export default App = () => {
  return (
    <>
      <Header></Header>
    
      <div class="container">
    
        <Banner></Banner>
    
        <div class="row">
          <Card size={3}></Card>
    
          <Card size={6}></Card>
    
          <Card size={3}></Card>
    
          <Card size={3}></Card>
    
          <Card size={6}></Card>
    
          <Card size={3}></Card>
          
        </div>
      </div>
    
      <Footer></Footer>
    </>
  )
}
