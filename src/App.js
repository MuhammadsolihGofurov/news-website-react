import { Route, Routes } from "react-router-dom";
import { Home } from './pages/'
import { Navbar , Footer, Modal } from './components/'
import './index.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/> 
      </Routes>
      <Modal />
      <Footer />
    </div>
  );
}
// i have not a single new information . So , i must to use array index. this problem is not my. because nytimes.com web site have not single information

export default App;
