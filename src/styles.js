import { Title } from './component';
import Bootstrap from './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css'

function styles () {
    return (
        <div className="App">
      <header className="App-header">
        <Bootstrap />
        <Title>Selamclar</Title>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editdgit  e <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ee
        </a>
      </header>
      <Bootstrap />
    </div>
    )
}
export default styles