import onChange from 'on-change';
import calc from './calc';
import { render } from './render';

// controller

// watch switcher changes
const updateExclude = (form, watchedState) => {
  const excludesElements = form.querySelectorAll('.switcher');
  const { exclude } = watchedState.form;

  [...excludesElements].forEach((excludeItem) => {
    switch (excludeItem.checked) {
      case true:
        exclude[excludeItem.name] = excludeItem.value;
        break;
      case false:
        break;
      default:
        break;
    }
  });
};

const updateValues = (elements, watchedState) => {
  const { values } = watchedState.form;
  const { form } = elements;
  const formData = new FormData(form);

  // update values
  [...formData.entries()].forEach(([key, value]) => {
    if (key in values) {
      values[key] = value === '' ? 0 : +value;
    }
  });

  // update exclude list
  updateExclude(form, watchedState);
};

const init = () => {
  // MODEL
  const elements = {
    form: document.forms.calcHowMuch,
    // results detail
    resultMonthlyPI: document.querySelectorAll('[data-calc-result="monthly-pi"]'),
    resultMonthlyRealTaxes: document.querySelectorAll('[data-calc-result="monthly-real-taxes"]'),
    resultMonthlyInsurance: document.querySelectorAll('[data-calc-result="monthly-insurance"]'),
    resultLoanValRatio: document.querySelectorAll('[data-calc-result="loan-value-ratio"]'),
    resultMonthWithPMI: document.querySelectorAll('[data-calc-result="month-with-pmi"]'),
    resultMonthlyPMI: document.querySelectorAll('[data-calc-result="monthly-pmi"]'),

    // results detail in text
    resultAmount: document.querySelector('[data-calc-result="amount"]'),
    resultLengthYears: document.querySelector('[data-calc-result="length-years"]'),
    resultInterestRate: document.querySelector('[data-calc-result="interest-rate"]'),
    resultHomeValue: document.querySelector('[data-calc-result="home-value"]'),
    resultAnnualTaxes: document.querySelector('[data-calc-result="annual-taxes"]'),
    resultAnnualInsurance: document.querySelector('[data-calc-result="annual-insurance"]'),

    // total result
    resultMonthlyPayment: document.querySelectorAll('[data-calc-result="monthly-payment"]'),

    // switchers
    switchTaxes: document.querySelectorAll('[data-switch="switch-taxes"]'),
    switchInsurance: document.querySelectorAll('[data-switch="switch-insurance"]'),
    switchPmi: document.querySelectorAll('[data-switch="switch-pmi"]'),

    // pmi show if result
    showPmi: document.querySelectorAll('[data-exclude="no-pmi"]'),
  };
  // MODEL
  const state = {
    form: {
      values: {
        // input values
        amount: 0,
        'interest-rate': 0,
        'length-years': 0,
        'home-value': 0,
        'annual-tax': 0,
        'annual-insurance': 0,
        'annual-pmi': 0,
      },
      exclude: {
        'switch-taxes': '$',
        'switch-insurance': '$',
        'switch-pmi': '%',
      },
    },
    result: {
      // results
      'monthly-pi': null,
      'monthly-real-taxes': null,
      'monthly-insurance': null,
      'loan-value-ratio': null,
      'month-with-pmi': null,
      'monthly-pmi': null,
      // res details
      amount: null,
      'interest-rate': null,
      'length-years': null,
      'home-value': null,
      'annual-tax': null,
      'annual-insurance': null,
      'annual-pmi': null,
      // total
      'monthly-payment': null,
    },
  };

  // MODEL
  const watchedState = onChange(state, () => {
    calc(elements, watchedState);
  });

  // CONTROLLER
  const { form } = elements;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    render(elements, watchedState);
  });

  form.addEventListener('change', () => {
    updateValues(elements, watchedState);
    render(elements, watchedState);
  });

  // FIRST START
  updateValues(elements, watchedState);
  render(elements, watchedState);
};

init();
