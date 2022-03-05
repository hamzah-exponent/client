import { Routes, Route } from "react-router-dom";
import './App.css';
import List from './component/list';
import AddEdit from './component/maintain-transaction-page';

const App = () => {
  return (
    <div>
      <Routes>
      {/* <Route path="/list" element={<List />} /> */}
        <Route path="/" element={<AddEdit />} />
      </Routes>
    </div>
  );
};

export default App;
