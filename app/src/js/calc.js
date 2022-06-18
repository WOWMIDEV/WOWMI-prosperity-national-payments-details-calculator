// Set format for results
const setFormatNumber = (dataFormat) => {
  return +dataFormat.toFixed(2)
};


const getInterestRate = (interestRate) => {
    const result = (interestRate / 100) / 12;
    return +result;
};
const getAmount = (amount) => {
    return setFormatNumber(amount);
};
const getResMonthlyPI = (amountResult, interestRateResult, paymentsMonthResult) => {
  const result = amountResult * interestRateResult * (Math.pow(1 + interestRateResult, paymentsMonthResult)) / (Math.pow(1 + interestRateResult, paymentsMonthResult) - 1);
  return setFormatNumber(result);
};

const getAnnualTax = (annualTax, switchTaxes, amountResult) => {
  if(switchTaxes === '$') {
    return setFormatNumber(annualTax);
  } else if(switchTaxes === '%'){
    const result = amountResult * (annualTax / 100);
    return setFormatNumber(result);
  }
};
const getAnnualInsurance = (annualInsurance, switchInsurance, amountResult) => {
  if(switchInsurance === '$') {
    return setFormatNumber(annualInsurance);
  } else if(switchInsurance === '%'){
    const result = amountResult * (annualInsurance / 100);
    return setFormatNumber(result);
  }
};
const getMonthlyTax = (annualTaxResult, switchTaxes) => {
  if(switchTaxes === '$') {
    const result = annualTaxResult / 12;
    return setFormatNumber(result);
  } else if(switchTaxes === '%'){
    const result = annualTaxResult / 12;
    return setFormatNumber(result);
  }
};
const getMonthlyInsurance = (annualInsuranceResult, switchInsurance) => {
  if(switchInsurance === '$') {
    const result = annualInsuranceResult / 12;
    return setFormatNumber(result);
  } else if(switchInsurance === '%'){
    const result = annualInsuranceResult / 12;
    return setFormatNumber(result);
  }
};

// value ratio
const getValueRatio = (amountResult, homeValue) => {
  const result = (amountResult * 100) / homeValue;
  return setFormatNumber(result);
};
// PMI Monthly
const getMonthlyPMI = (amountResult, annualPMI) => {
  const result = (amountResult * annualPMI / 100) / 12;
  return setFormatNumber(result);
};


// total monthly payment
const getResMonthlyPayment = (amountResult, interestRateResult, paymentsMonthResult, monthlyTaxResult, monthlyInsuranceResult, monthlyPMIResult) => {
  const result = amountResult * interestRateResult * (Math.pow(1 + interestRateResult, paymentsMonthResult)) / (Math.pow(1 + interestRateResult, paymentsMonthResult) - 1) + monthlyTaxResult + monthlyInsuranceResult + monthlyPMIResult;
  return setFormatNumber(result);
};

/*---*/

const calc = (elements, watchedState) => {
  const { form, result } = watchedState;
  const { values, exclude } = form;

// input values
  const amount = values['amount'];
  const interestRate = values['interest-rate'];
  const lengthYears = values['length-years'];
  const homeValue = values['home-value'];
  const annualTax = values['annual-tax'];
  const annualInsurance = values['annual-insurance'];
  const annualPMI = values['annual-pmi'];
  // switchers
  const switchTaxes = exclude['switch-taxes'];
  const switchInsurance = exclude['switch-insurance'];
  const switchPmi = exclude['switch-pmi'];


// results
  const paymentsMonthResult = lengthYears * 12;

// results calc
  const interestRateResult = getInterestRate(interestRate);
  const amountResult = getAmount(amount);

  const annualTaxResult = getAnnualTax(annualTax, switchTaxes, amountResult);
  const annualInsuranceResult = getAnnualInsurance(annualInsurance, switchTaxes, amountResult);

  const monthlyTaxResult = getMonthlyTax(annualTaxResult, switchTaxes, amountResult);
  const monthlyInsuranceResult = getMonthlyInsurance(annualInsuranceResult, switchInsurance, amountResult);

  const loanValueRatioResult = getValueRatio(amountResult, homeValue);

  const monthlyPMIResult = getMonthlyPMI(amountResult, annualPMI, switchPmi);

  const monthlyPIResult = getResMonthlyPI(amountResult, interestRateResult, paymentsMonthResult);
  const monthlyPaymentResult = getResMonthlyPayment(amountResult, interestRateResult, paymentsMonthResult, monthlyTaxResult, monthlyInsuranceResult, monthlyPMIResult);




  // values output / details
  result['interest-rate'] = interestRate;
  result['length-years'] = lengthYears;
  result['home-value'] = homeValue;

  result['annual-tax'] = annualTaxResult;
  result['annual-insurance'] = annualInsuranceResult;

  result['monthly-real-taxes'] = monthlyTaxResult;
  result['monthly-insurance'] = monthlyInsuranceResult;

  result['loan-value-ratio'] = loanValueRatioResult;
  result['annual-pmi'] = annualPMI;

  result['amount'] = amountResult;
  // ежемесячный платеж
  result['monthly-pmi'] = monthlyPMIResult;
  result['monthly-pi'] = monthlyPIResult;
  result['monthly-payment'] = monthlyPaymentResult;

};

export default calc;
