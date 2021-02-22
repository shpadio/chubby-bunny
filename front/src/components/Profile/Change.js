import React from 'react';

function Change() {
  const changeHandler = () => {


  };
  return (
      <div>
           <form onSubmit={changeHandler}>
               <input placeholder="Изменить имя"/>
              <input placeholder="Изменить почту"/>
               <button>Записать</button>
           </form>
      </div>

  );
}

export default Change;
