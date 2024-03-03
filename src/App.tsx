import { Button } from 'antd';
import clsx from 'clsx';
import FormComponent from './components/Form';
import LayoutComp from './layout/Layout';
import Heading from './common/Heading';

function App() {
  return (
    <div className="App">
     <LayoutComp>
      <Heading title='Login Page' size='2xl' />
      <FormComponent/>
     </LayoutComp>
    </div>
  );
}

export default App;
