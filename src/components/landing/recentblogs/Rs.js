import React, { Component } from 'react';
import './Rs.css';

const cardsData = [
  {
    title: 'Parentheses',
    description: 'Learn how to handle expressions enclosed in parentheses first, addressing the most specific parts of equations.',
    date: 'January 13, 2023',
  },
  {
    title: 'Exponents',
    description: 'Understand how to deal with exponents, which involve raising numbers to a power or extracting square roots.',
    date: 'November 1, 2023',
  },
  {
    title: 'Multiplication',
    description: 'Master the rules for multiplication and working through the multiple operations  solving them from left to right.',
    date: 'October 21, 2023',
  },
  {
    title: 'Division',
    description: 'Explore the order of division operations, solving them from left to right.',
    date: 'October 1, 2023',
  },
  {
    title: 'Addition',
    description: 'Learn the sequencing for addition, addressing multiple addition operations in an equation.',
    date: 'November 30, 2021',
  },
  {
    title: 'Subtraction',
    description: 'Finally, understand the process for subtraction, working through multiple subtraction operations',
    date: 'November 30, 2021',
  },
];

class Rs extends Component {
  displayCards = () => {
    return cardsData.map((item, index) => (
      <div className="c col-lg-4 col-md-6 col-12" key={index}>
        <div className="card mx-auto shadow-lg mb-5 mb-5" key={index}>
          <div className="card-body p-4" style={{ height: '220px' }}> {/* Adjust the height as needed */}
            <h5 className="card-img-top card-title mb-">{item.title}</h5>
            <p className="card-text mb-4">{item.description}</p>
            <div className="_footer d-flex flex-wrap justify-content-between align-items-center">
             
            
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="sections blogs _rs py-5 mb-5">
        <div className="container">
          <div className="container">
            <div className="title py-5 text-md-start text-center">
              <h4 className="sub-title text-capitalize">Featured <span>Lessons</span></h4>
            </div>
            <div className="_s row justify-content-start">{this.displayCards()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rs;
