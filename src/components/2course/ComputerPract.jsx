
import React from "react";
import Button from 'react-bootstrap/Button';
function ComputerPract(){
return(
    <div>
        <h3 className='SubjTitle'>КОМПЬЮТЕРНЫЙ ПРАКТИКУМ</h3>
    <h3 className='WorkTitle'>Лабораторные работы</h3>
    <div></div>
    <div className='ButtonsSubject'>
<div className='Themes'> <div className='TextStyle'>Транспиляция. Babel. Компонентность</div>       
<Button> Лабораторная работа 3,4</Button></div>
<div className='Themes'> <div className='TextStyle'>Модульность в экосистеме JavaScript</div>     
<Button> Лабораторная работа 5,6</Button></div>
<div className='Themes'> <div className='TextStyle'>SVG и Canvas</div>     
<Button> Лабораторная работа 7,8</Button>
</div>
<div className='Themes'> <div className='TextStyle'>telnet и curl</div>     
<Button> Лабораторная работа 9,10</Button>
</div>
<div className='Themes'> <div className='TextStyle'>PHP. Методы POST и GET</div>     
<Button>Лабораторная работа 11</Button>
</div>
<div className='Themes'> <div className='TextStyle'>Калькулятор</div>     
<Button> Лабораторная работа 12</Button>
</div>
<div className='Themes'> <div className='TextStyle'>Логгер</div>     
<Button> Лабораторная работа 13</Button>
</div>
<div className='Themes'> <div className='TextStyle'>"Книга отзывов"</div>     
<Button> Лабораторная работа 14</Button>
</div>
<div className='Themes'> <div className='TextStyle'>"MongoDB"</div>     
<Button> Лабораторная работа 15</Button>
</div>

    </div>
    </div>
)
}
export default ComputerPract;