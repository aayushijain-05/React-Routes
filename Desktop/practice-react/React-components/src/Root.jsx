
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Carousel } from './components/Carousel';

import { CardComponent } from './components/CardComponent';
import { Label } from './components/Label';

const Root = () => (
  <div>
    <Header />
    <main>
      <Carousel />
      <Label 
  type={"Book Your Travel"} 
  className="text-3xl ml-10 justify-center items-center font-bold bg-gradient-to-r from-slate-400 to-slate-600 text-transparent bg-clip-text"
/>


      <CardComponent/>
    </main>
    <Footer />
  </div>
);

export default Root;
