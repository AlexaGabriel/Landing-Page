import editor from './assets/illustration-editor-desktop.svg'
import celular from './assets/illustration-phones.svg'
import "./styles/style.scss"

function App() {

  //Html
  return(
    <>
     <body>
     
        <div className='container'>
          <header>
            <h1>Blogr</h1>
            <nav>
              <ul>
                <li>Product
                  <ul>
                    <li>alex</li>
                  </ul>
                </li>
                <li>Company</li>
                <li>connect</li>
              </ul>
            </nav>
            <form action="">
              <input type="button" name="sing-up" id="sing" value="Sing Up"/>
              <input type="button" name="login" id="login" value="Login" />
            </form>
          </header>
              <article className='top'>
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
                <form action="">
                  <input type="button" name="sing-up" id="sing" value="Start for Free"/>
                  <input type="button" name="sing-up" id="sing" value="Learn More"/>
                </form>
              </article>
        </div>

        <main>
          <section>   
            <article>
              <h2>Designed for the future</h2>
              <h3> Introducing an extensible editor</h3>
              <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
              change the looks of a blog.</p>
              <h3>Robust content management</h3>
              <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
              </p>
              <figure>
                <img src={editor} alt="" />
              </figure>
            </article>
            <article>
              <figure>
                  <img src={celular} alt="" />
              </figure>
              <h2>State of the Art Infrastructure</h2>
              <p>
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
              </p>
            </article>
            <article>
              <figure>
              </figure>
              <h3> Free, open, simple</h3>
              <p>
              Blogr is a free and open source application backed by a large community of helpful developers. It supports
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
              </p>
              <h3>Powerful tooling</h3>
              <p>
              Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.
              </p>
            </article>
          </section>
        </main>
        <footer>
        </footer>
     </body>
    </>
  )
}

export default App
