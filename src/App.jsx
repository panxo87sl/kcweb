import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <section>
        <div className="heroWidth">
          <h1>Hero</h1>
        </div>
      </section>

      <main>
        <div className="contentWidth">
          <h2>Content</h2>
        </div>
      </main>

      <footer>
        <div className="footerWidth">Footer</div>
      </footer>
    </>
  );
}
