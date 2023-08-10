import React from 'react';
import '../index.css';

function Calucaltor() {
  return (
    <div className="parentdiv">
      <div className="nav">
        <p className="nav-p">0</p>
      </div>
      <MathRight />
      <MathTop />
      <MathNumbers />
    </div>
  );
}
function MathRight() {
  return (
    <div className="math-opertion-right">
      <p className="math-o-right">÷</p>
      <p className="math-o-right">*</p>
      <p className="math-o-right">-</p>
      <p className="math-o-right">+</p>
      <p className="math-o-right">=</p>
    </div>
  );
}

function MathTop() {
  return (
    <div className="math-opertion-top">
      <p className="math-o-top">AC</p>
      <p className="math-o-top">+/-</p>
      <p className="math-o-top">%</p>
    </div>
  );
}

function MathNumbers() {
  return (
    <div className="math-numbers-con">
      <p className="math-number">1</p>
      <p className="math-number">2</p>
      <p className="math-number">3</p>
      <p className="math-number">4</p>
      <p className="math-number">5</p>
      <p className="math-number">6</p>
      <p className="math-number">7</p>
      <p className="math-number">8</p>
      <p className="math-number">9</p>
      <p className="math-number">0</p>
      <p className="math-number">.</p>
    </div>
  );
}

export default Calucaltor;
