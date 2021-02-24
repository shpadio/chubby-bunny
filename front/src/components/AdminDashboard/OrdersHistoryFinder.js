import React, { useEffect, useRef } from 'react';

function OrdersHistoryFinder() {
  const search = useRef();

  useEffect(() => {
    search.current.focus();
  }, []);

  return (
    <nav style={{ width: '500px', marginLeft: '200px', backgroundColor: 'white' }} >
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input ref={search} id="search" type="search" />
            <label className="label-icon" htmlFor="search"><i className="fas fa-search"></i></label>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default OrdersHistoryFinder;
