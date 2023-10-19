import React, { Component } from 'react';
import './Faq.css';

const faqItems = [
  {
    idOne: 'faqItem1',
    dataBsTarget: '#collapseItem1',
    ariaControls: 'collapseItem1',
    title: 'FAQ 1: What is the purpose of PEMDAS in mathematics?',
    idTwo: 'collapseItem1',
    ariaLabelledBy: 'faqItem1',
    show: true,
    answer: ' PEMDAS is an acronym that stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right). Its purpose is to establish a clear order of operations when solving mathematical expressions. Following PEMDAS ensures that expressions are evaluated consistently and accurately, allowing mathematicians to arrive at the same correct answer when working with complex equations.',
  },
  {
    idOne: 'faqItem2',
    dataBsTarget: '#collapseItem2',
    ariaControls: 'collapseItem2',
    title: 'FAQ 2: Can the order of operations in mathematics be changed?',
    idTwo: 'collapseItem2',
    ariaLabelledBy: 'faqItem2',
    show: false,
    answer: 'The order of operations, as represented by PEMDAS, is a fundamental and standardized convention in mathematics. Changing this order can lead to incorrect results. While there are other conventions, such as BODMAS (Brackets, Orders, Division and Multiplication, Addition and Subtraction), the principle remains the same: to ensure that mathematical expressions are evaluated systematically and uniformly.',
  },
  {
    idOne: 'faqItem3',
    dataBsTarget: '#collapseItem3',
    ariaControls: 'collapseItem3',
    title: 'FAQ 3: Why is understanding PEMDAS important for students?',
    idTwo: 'collapseItem3',
    ariaLabelledBy: 'faqItem3',
    show: false,
    answer: 'Understanding PEMDAS is crucial for students because it provides a structured approach to solving mathematical expressions. It helps them avoid errors and confusion when working with complex equations. Proficiency in PEMDAS is foundational for mathematics, as it forms the basis for more advanced concepts and problem-solving skills. It is particularly valuable when solving equations, simplifying algebraic expressions, and evaluating numerical expressions in a consistent and accurate manner.',
  },
  
];

class Faq extends Component {
  displayAccordionItems = () => {
    return faqItems.map((item) => (
      <div className="accordion-item" key={item.idOne}>
        <h2 className="accordion-header" id={item.idOne}>
          <button
            className="accordion-button text-capitalize"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={item.dataBsTarget}
            aria-expanded={item.show ? 'true' : 'false'}
            aria-controls={item.ariaControls}
          >
            {item.title}
          </button>
        </h2>
        <div
          id={item.idTwo}
          className={`accordion-collapse collapse ${item.show ? 'show' : ''}`}
          aria-labelledby={item.ariaLabelledBy}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {item.answer}
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <section className="faq py-5" id="faq">
        <div className="container">
          <div className="title py-5 text-md-start text-center">
            <h4 className="sub-title text-capitalize">frequently asked <span>questions</span></h4>
          </div>

          <div className="accordion shadow-lg" id="accordionExample">
            {this.displayAccordionItems()}
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
