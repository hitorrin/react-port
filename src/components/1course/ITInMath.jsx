
import React from "react";
import Button from 'react-bootstrap/Button';
function ITInMath(){
return(
    <div>
        <h3 className='SubjTitle'>ИТ В МАТЕМАТИКЕ</h3>
    <h3 className='WorkTitle'>Работа в Maxima</h3>
    <div></div>
    <div className='ButtonsSubject'>
    <div className='Themes'>  <div className='TextStyle'>Основы Maxima</div>  
<Button> Тема 3</Button> </div>
<div className='Themes'><div className='TextStyle'>Матрицы</div>
<Button> Тема 4</Button></div>
<div className='Themes'><div className='TextStyle'>Уравнения</div>
<Button> Тема 5</Button></div>
<div className='Themes'><div className='TextStyle'>Математический анализ</div>
<Button> Тема 6</Button></div>
</div>
  
    </div>
)
}
export default ITInMath;