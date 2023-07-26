import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';

export default function App() {
  return (
    <div className='app'>
      <Header title='Phone Book' />
      <Main />
      <Footer></Footer>
    </div>
  );
}
