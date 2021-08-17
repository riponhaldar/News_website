import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
export default function Layout({ children }) {
  return (
    <>
      <div className='container'>
        <div className='full'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
