function App() {
  return (
    <div className="App">
      <header className="header | flex">
        <h1>Where in the world?</h1>
        <button className="btn btn-theme">
          <span></span>
          <span>Light Mode</span>
        </button>
      </header>

      <main>
        <form className="form | flex">
          <div className="input-group">
            <span>icon</span>
            <input type="text" name="search" id="search" />
          </div>
          <div className="input-group">
            <select name="region" id="region">
              <option value="0">Filter by Region</option>
              <option value="1">Africa</option>
              <option value="2">America</option>
              <option value="3">Asia</option>
              <option value="4">Europe</option>
              <option value="5">Oceania</option>
            </select>
          </div>
        </form>

        <section>
          <ul>
            <li>belgia</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
