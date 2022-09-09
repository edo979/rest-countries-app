function App() {
  return (
    <>
      <header className="header | container flex">
        <h1>Where in the world?</h1>
        <button className="btn btn-theme">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
          </svg>
          <span>Dark Mode</span>
        </button>
      </header>

      <main className="container">
        <form className="form | flex">
          <div className="input-group">
            <label htmlFor="search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
              </svg>
            </label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a country..."
            />
          </div>

          <select name="region" id="region">
            <option value="0">Filter by Region</option>
            <option value="1">Africa</option>
            <option value="2">America</option>
            <option value="3">Asia</option>
            <option value="4">Europe</option>
            <option value="5">Oceania</option>
          </select>
        </form>

        <section>
          <ul className="countries-list | grid-container">
            <li className="card">belgia</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
