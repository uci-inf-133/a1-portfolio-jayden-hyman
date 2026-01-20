import './App.css'
import profilePhoto from './assets/pfp.jpeg'
import resume from './assets/resume.jpg'
import Footer from './footer/footer';
function App() {

  return (
    <div className="container">
      <header>
        <div className="left-side">
          <h1 className="name">Jayden Hyman</h1>
          <nav className="links">
            <a href="https://github.com/jayden-hyman" target="_blank" rel="noopener noreferrer" className="linkText">GitHub</a>
            <a href="https://www.linkedin.com/in/jayden-hyman-a17123262/" target="_blank" rel="noopener noreferrer" className="linkText">LinkedIn</a>
            <a href="mailto:jaydenhyman42@gmail.com" className="linkText">Email</a>
          </nav>
        </div>
        <div className="right-side">
          <img src={profilePhoto} alt="Jayden Hyman's Profile Photo" className="pfp" />
        </div>
      </header>
      <main>
        <img src={resume} alt="Jayden Hyman's Resume" className="resume" />
      </main>

      <Footer />
    </div>

  )
}

export default App
