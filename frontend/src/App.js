import './App.css';
import NavBar from './components/NavBar/NavBar'
import SiteHeader from './components/SiteHeader/SiteHeader'
import Spacer from './components/Spacer/Spacer'
import About from './components/About/About'
import Layout from './components/Layout/Layout'
import Projects from './components/Projects/Projects'
import ContactForm from './components/Contact/ContactForm'

function App() {
  return (
    <div className="App">
      <Layout>
        <NavBar />  
        <SiteHeader />
        <Spacer className="top-layer spacer"/>
        <About />
        <Spacer className="bottom-layer spacer"/>
        <Projects />
        <Spacer className="top-layer spacer"/>
        <ContactForm />
      </Layout>
    </div>
  );
}

export default App;
