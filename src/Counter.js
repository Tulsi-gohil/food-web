// Counter.js
import React, { useEffect, useState } from 'react';

function Counter() {
  const [customers, setCustomers] = useState(0);
  const [dishes, setDishes] = useState(0);
  const [delivered, setDelivered] = useState(0);

  useEffect(() => {
    const customerTarget = 980;
    const dishTarget = 210;
    const deliveredTarget = 7000;
    const duration = 2000;
    const steps = 100;
    const intervalTime = duration / steps;

    const customerStep = Math.ceil(customerTarget / steps);
    const dishStep = Math.ceil(dishTarget / steps);
    const deliveredStep = Math.ceil(deliveredTarget / steps);

    let count = 0;
    const interval = setInterval(() => {
      count++;

      setCustomers((prev) => (prev + customerStep >= customerTarget ? customerTarget : prev + customerStep));
      setDishes((prev) => (prev + dishStep >= dishTarget ? dishTarget : prev + dishStep));
      setDelivered((prev) => (prev + deliveredStep >= deliveredTarget ? deliveredTarget : prev + deliveredStep));

      if (count >= steps) clearInterval(interval);
    }, intervalTime);
  }, []);

  return (
    <div className="counter-section text-white text-center py-5">
      <h4 className="section-title fw-bold mb-5">WE ARE ALWAYS HERE TO SERVE YOU.</h4>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 mx-3">
            <h2 className="counter-number text-warning fw-bold">{customers}+</h2>
            <p className="counter-label">Satisfied Customers</p>
          </div>
          <div className="col-md-3 mx-3">
            <h2 className="counter-number text-warning fw-bold">{dishes}+</h2>
            <p className="counter-label">Delicious Dishes</p>
          </div>
          <div className="col-md-3 mx-3">
            <h2 className="counter-number text-warning fw-bold">{delivered.toLocaleString()}+</h2>
            <p className="counter-label">Food Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
