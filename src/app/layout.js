import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  title: "B Solutions",
  description: "Discover and inspire.",
};

export default function RootLayout({ children }) {
  // const setInitialTheme = process.env.noflash;
  return (
    <html lang="en">
      {/* <head>
      <meta charSet='utf-8' />
            <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.noflash}} />
      </head> */}
      <body  >
        <header>
          <Header/>
        </header>
        <main style={{ flex: '1 0 auto',backgroundColor: '#111827' }}>
          {children}
        </main>
        <footer style={{ margintop: 'auto' }}>
         <Footer/>
        </footer>
      </body>
    </html>
  );
}
// className="bg-gradient-to-r from-gray-800 to-gray-950"