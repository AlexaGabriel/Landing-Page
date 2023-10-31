import celular from './assets/illustration-phones.svg'
import logo from './assets/logo.svg'
import burguer from './assets/icon-hamburger.svg'
import { useState } from 'react'
import "./styles/style.scss"

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //Html
    return(
    <>
      {/* parte superior da pagina */}
        <div className='container'>
        <header>
          <img className="logo" src={logo} alt="logo Blogr" />
          <img className="mobile-Menu"  onClick={toggleMenu} src={burguer} alt="" />
          <div className={`nav-List  ${isMenuOpen ? 'open' : ''}`}>
            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                <li className='dropdown_1'>Product
                  <ul className='submenu'>
                    <li><a href="">Overview</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Marketplace</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Integrations</a></li>
                  </ul>
                </li>
                <li className='dropdown_2'>Company
                  <ul className='submenu'>
                    <li><a href="">About</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Careers</a></li>
                  </ul>
                </li>
                <li className='dropdown_3'>connect
                  <ul className='submenu'>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Newsletter</a></li>
                    <li><a href="">LinkedIn</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <form className='headform' action="">
              <input type="button" name="login" id="login" value="Login" />
              <input type="button" name="sing-up" id="sing" value="Sing Up"/>
            </form>
          </div>
        </header>
        <article className='top'>
                <h1>A modern publishing platform</h1>
                <p className='p-top'>Grow your audience and build your online brand</p>
                <form className='topform' action="">
                  <input type="button" name="sing-up" id="start" value="Start for Free"/>
                  <input type="button" name="sing-up" id="learn" value="Learn More"/>
                </form>
              </article>
</div>
        {/* parte central da pagina */}
        <main>
          <section>
            <div className='editortodo'> 
              <h2 className='title2'>Designed for the future</h2>
              <div className='flex1'>
                <article className='editor'>
                  <h3 className='linha1'> Introducing an extensible editor</h3>
                  <p className='pag1'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                  change the looks of a blog.</p>
                  <h3 className='linha2' id='subtitle2'>Robust content management</h3>
                  <p className='pag2'>Flexible content management enables users to easily move through posts. Increase the usability of your blog
                  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                  </p>
                </article>
                <figure className='pagemain'>
                </figure>
              </div>
            </div>  
            <article className='container2'>
              <div className='text'>
                <img src={celular} className='celular' width= "450px" height="450px" alt="imagem de um celular" />
                <h2>State of the Art Infrastructure</h2>
                <p>
                  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                </p>
              </div>
            </article>
            <article className='flex2'>
              <figure>
              </figure>
              <div className='container3'>
                <h3 className='h1'> Free, open, simple</h3>
                <p className='p1'>
                  Blogr is a free and open source application backed by a large community of helpful developers. It supports
                  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                </p>
                <h3 className='h2'>Powerful tooling</h3>
                <p className='p2'>
                  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </div>
            </article>
          </section>
        </main>
        
        <footer>
          <div className='liss'>
            <img src={logo}  className='logof' width="100px" height="35px" alt="logo blogr" />
            <ul className='ula'>
              <h3>Product</h3>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
            <ul className='ulb'>
              <h3>Company</h3>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
            <ul className='ulc'>
              <h3>Connect</h3>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </footer>
          </>
    )
  }

export default App
