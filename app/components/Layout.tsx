import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }:any) => {
  return (
    <div className="content">
      
        <title>Mangadana</title>
     
      <Navbar />
      { children }
      {/* <Footer /> */}
    </div>
  );
}
 
export default Layout;