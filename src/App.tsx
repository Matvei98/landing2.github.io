import { Navbar } from './components/Header/NavBar/NavBar';
import { Aboutweb } from './components/Header/AboutWeb/AboutWeb';
import { Articles } from './components/Articles/Article';
import { Sendingemail } from './components/SendingEmail/SendingEmail';
import { Footer } from './components/Footer/Footer';
import { Downheader } from './components/DownHeader/DownHeader';
import './index.css';
import './App.css';
function App() {
  return (
    <>
      <header>
        <Navbar />
        <Aboutweb />
      </header>
      <Downheader />
      <Articles />
      <Sendingemail />
      <Footer />
    </>
  );
}
export default App;