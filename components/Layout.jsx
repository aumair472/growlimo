import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-dark overflow-x-hidden">
      <Navbar />
      <main className="flex-grow min-w-0">
        {children}
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
