
import React from "react";
import Button from 'react-bootstrap/Button';
function ITLanguages(){
return(
    <div>
        <h3 className='SubjTitle'>БИЗНЕС-ИНФОРМАТИКА</h3>
    <h3 className='WorkTitle'>Отчеты</h3>
    <div className='ButtonsSubject'>
<Button>Лабораторная работа 1</Button> 
<Button>Лабораторная работа 2</Button> 
<Button>Лабораторная работа 3</Button> 
<Button>Лабораторная работа 4</Button> 
<Button>Лабораторная работа 5</Button> 
<Button>Лабораторная работа 6</Button> 
<Button>Лабораторная работа 7</Button> 
   </div>
   <h3 className='WorkTitle'>Файлы</h3>
   <div className='ButtonsSubject'>
<Button>Лабораторная работа 1</Button> 
<Button>Лабораторная работа 2</Button> 
<Button>Лабораторная работа 3</Button> 
<Button>Лабораторная работа 4</Button> 
<Button>Лабораторная работа 5</Button> 
<Button>Лабораторная работа 6</Button> 
<Button>Лабораторная работа 7</Button> 
   </div>
   <div className="d-grid gap-2">
<Button link='info'  disabled> Самостоятельные работы </Button>
</div>
   </div>
)
}
export default ITLanguages;