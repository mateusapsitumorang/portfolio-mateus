import { Routes, Route } from 'react-router-dom';
import Homepage from '../HomePage/HomePage';
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/home2" element={<HomePage2 />} />
      <Route path="/home3" element={<HomePage3 />} />
    </Routes>
  );
};

export default AllRoute;