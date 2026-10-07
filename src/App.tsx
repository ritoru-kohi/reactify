import './assets/styles.css';
import { Card } from './components';
import { jsCoreGuideData } from './shared/docs';

export const App = () => {
  return (
    <>
    <div className="header">
      <h1>Hello from React!</h1>
      <h3>Its me, MAAAARIOOO rikooooooooo</h3>
    </div>
    <div className='block-1'>каждый</div>
    <div className='block-2'>охотник</div>
    <div className='block-3'>желает</div>
    <div className='block-4'>знать</div>
    <Card data={jsCoreGuideData[0]} />
    <Card data={jsCoreGuideData[1]} />
    </>
  );
};
