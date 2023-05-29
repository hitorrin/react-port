
import React from "react";
import Button from 'react-bootstrap/Button';
function ITMenegment(){
return(
    <div>
        <h3 className='SubjTitle'>IT-МЕНЕДЖМЕНТ</h3>
    <h3 className='WorkTitle'>Лабораторные работы</h3>
    <h3 className='WorkTitle'>Тема 1</h3>
    <div className='ButtonsSubject'>
<Button>Задание 1</Button> 
<Button>Задание 2</Button> 
<Button>Задание 3</Button> 
   </div>
   <h3 className='WorkTitle'>Тема 2</h3>
   <div className='ButtonsSubject'>
   <Button>Задание 1</Button> 
<Button>Задание 2</Button> 
<Button>Задание 3</Button> 
</div>
<h3 className='WorkTitle'>Тема 3</h3>
   <div className='ButtonsSubject'>
   <Button>Задание 1</Button> 
<Button>Задание 2</Button> 
<Button>Задание 3</Button> 
</div>
<div className="d-grid gap-2">

<Button link='info'  disabled> Реферат</Button>
</div>
   </div>
)
}
export default ITMenegment;