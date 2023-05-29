import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion';
import CardSubject from './components/Card';
import ComputerScience from './components/1course/compurterScience';
import ITsem1 from './components/1course/ITsem1'
import ITsem2 from './components/1course/ITsem2'
import LATM from './components/1course/LATM'
import ComputerAlgebra from './components/1course/computerAlgebra';
import Algorythms from './components/1course/Algorhythms';
import ITInMath from './components/1course/ITInMath';
import MathAnalysis from './components/1course/MathemicalAnalysis';
import Base from './components/2course/Base';
import ComputerPract from './components/2course/ComputerPract';
import PIT from './components/3course/PIT';
import PresInform from './components/3course/PresInform';
import ITMenegment from './components/3course/ITmenegment';
function App() {
  return (
    <div className="App">
      <header className="Header">
      </header>
      <main>
<section className='Description'>
<div className='Title'> 
<div className='Info'>
<div className='InfoPortfolio'>
<p>ПОРТФОЛИО </p>
<p className='Name'>МАЛЯР ДАРЬИ</p>
<p className='Data'> РГПУ им. Герцена, 4 курс</p>
</div>
</div>
</div>
<div className='BackgroundText'>
  <ul>
    <li>import React from 'react';</li>
    <li>import ReactDOM from 'react-dom/client';</li>
    <li>import './index.css';</li>
    <li>import App from './App';</li>
    <li>import reportWebVitals from './reportWebVitals';</li>
    <li>const root = ReactDOM.createRoot</li>
</ul> </div>
</section>
<section className='Photo'></section>
<section className='About'>

</section>
<section>
  <h3 className='Courses'>Работы 1 курс</h3>
  <Accordion >
      <Accordion.Item eventKey="0" variant="success">
        <Accordion.Header >1 семестр</Accordion.Header>
        <Accordion.Body>
          <div className='CardsOfSubjects'>
<CardSubject subject='Информатика' picture='../images/inf.jpg'  comp={<ComputerScience/>}/>
<CardSubject subject='Информационные технологии в математике ' comp={<ITInMath/>}/>
<CardSubject subject='Линейная алгебра и теория матриц'comp={<LATM/>}/>
<CardSubject subject='Информационные технологии' comp={<ITsem1/>}/>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2 семестр</Accordion.Header>
        <Accordion.Body>
        <div className='CardsOfSubjects'>
<CardSubject subject='Информационные технологии' comp={<ITsem2/>}/>
<CardSubject subject='Основы компьютерной алгебры' comp={<ComputerAlgebra/>}/>
<CardSubject subject='Алгоритмы и решение задач' comp={<Algorythms/>}/>
<CardSubject subject='Математический анализ' comp={<MathAnalysis/>}/>
</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</section>
<section>

<h3 className='Courses'>Работы 2 курс</h3>
  <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>1 семестр</Accordion.Header>
        <Accordion.Body>
   Здесь типа дисциплины
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2 семестр</Accordion.Header>
        <Accordion.Body>
        <CardSubject subject='Базы данных'  comp={<Base/>}/>
<CardSubject subject='Компьютерный практикум'  comp={<ComputerPract/>}/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</section>
<section>
<h3 className='Courses'> Работы 3 курс</h3>
  <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>1 семестр</Accordion.Header>
        <Accordion.Body>
        <CardSubject subject='Прикладные информационные технологии'  comp={<PIT/>}/>
        <CardSubject subject='Техника и технологии представления и публикации информации '  comp={<PresInform/>}/>
        <CardSubject subject='IT-менеджмент'  comp={<ITMenegment/>}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2 семестр</Accordion.Header>
        <Accordion.Body>
        Здесь типа дисциплины
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</section>
<section>
<h3 className='Courses'>Работы 4 курс</h3>
  <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>1 семестр</Accordion.Header>
        <Accordion.Body>
   Здесь типа дисциплины
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2 семестр</Accordion.Header>
        <Accordion.Body>
        Здесь типа дисциплины
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</section>
<section> Курсовые:

</section>
      </main>
      <nav></nav>
    </div>
  );
}

export default App;
