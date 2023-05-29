
import React from "react";
import Button from 'react-bootstrap/Button';
function Base(){
return(
    <div>
        <h3 className='SubjTitle'>БАЗЫ ДАННЫХ </h3>
    <h3 className='WorkTitle'>Лабораторные работы</h3>
    <div></div>
    <div className='ButtonsSubject'>
<Button>Лабораторная работа 2</Button>
<Button> Лабораторная работа 3</Button>
<Button>Инвариантная работа 3 </Button>
<Button> Вариативная работа 3 </Button>
<Button> Инвариантная работа 4 </Button>
<Button>Вариативная работа 4 </Button>
<Button> Инвариантная работа 5</Button>
    </div>
    <Button>Проект</Button>
    </div>
)
}
export default Base;