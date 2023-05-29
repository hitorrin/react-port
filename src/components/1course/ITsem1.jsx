import React from "react";
import Button from 'react-bootstrap/Button';
function IT1(){
    return(
  <div>
            <h3 className='SubjTitle'>ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ</h3>
            <h4 className='Semester'>Первый семестр</h4>
    <h3 className='WorkTitle'>Лабораторные работы</h3>
    <div></div>
    <div className='ButtonsSubject'>
    <div className='Themes'><div className='TextStyle'>Логотип</div>
<Button> Лабораторная работа 1</Button>
</div>
<div className='Themes'> <div className='TextStyle'>Облачные хранилища</div>
<Button> Лабораторная работа 1.5</Button>
</div>
<div className='Themes'> <div className='TextStyle'>Правовые аспекты ПО</div>
<Button> Лабораторная работа 2</Button>
</div>
<div className='Themes'> <div className='TextStyle'>История развития PowerPoint</div>
<Button> Лабораторная работа 3</Button>
</div>
<div className='Themes'> <div className='TextStyle'>Презентация в Shower</div>
<Button>Лабораторная работа 4 </Button>
</div>
</div>

<div className="d-grid gap-2">

<Button link='info'  disabled> Cертификат HTML Academy</Button>
</div>
    </div>
 
    )}

export default IT1;