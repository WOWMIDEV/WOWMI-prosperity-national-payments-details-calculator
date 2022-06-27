// Set format for results
const setFormatNumber = (dataFormat) => +dataFormat.toFixed(2);

const getInterestRate = (interestRate) => {
  const result = interestRate / 100;
  return +result;
};
const getInterestRateMonthly = (interestRate) => {
  const result = interestRate / 100 / 12;
  return +result;
};

const getAmount = (amount) => setFormatNumber(amount);

const getResMonthlyPI = (amountResult, interestRateMonthlyResult, paymentsMonthResult) => {
  if (interestRateMonthlyResult !== 0) {
    const result = (amountResult * interestRateMonthlyResult * (1 + interestRateMonthlyResult) ** paymentsMonthResult)
        / ((1 + interestRateMonthlyResult) ** paymentsMonthResult - 1);

    return setFormatNumber(result);
  }
  return 0;
};

const getResMonthlyInterest = (amountResult, interestRateResult) => {
  const result = (amountResult * interestRateResult) / 12;
  return setFormatNumber(result);
};

const getAnnualTax = (annualTax, switchTaxes, amountResult) => {
  if (switchTaxes === '$') {
    return setFormatNumber(+annualTax);
  }
  const result = amountResult * (annualTax / 100);
  return setFormatNumber(result);
};

const getAnnualInsurance = (annualInsurance, switchInsurance, amountResult) => {
  if (switchInsurance === '$') {
    return setFormatNumber(+annualInsurance);
  }
  const result = amountResult * (annualInsurance / 100);
  return setFormatNumber(result);
};

const getAnnualPMI = (annualPmi, switchPMI, amountResult) => {
  if (switchPMI === '$') {
    return setFormatNumber(+annualPmi);
  }
  const result = amountResult * (annualPmi / 100);
  return setFormatNumber(result);
};

const getMonthlyTax = (annualTaxResult, switchTaxes) => {
  if (switchTaxes === '$') {
    return setFormatNumber(annualTaxResult / 12);
  }
  return setFormatNumber(annualTaxResult / 12);
};

const getMonthlyInsurance = (annualInsuranceResult, switchInsurance) => {
  if (switchInsurance === '$') {
    return setFormatNumber(annualInsuranceResult / 12);
  }
  return setFormatNumber(annualInsuranceResult / 12);
};

const getMonthlyPMI = (annualPMIResult, switchPMI, loanValueRatioResult, interestRateResult) => {
  if (interestRateResult !== 0 && loanValueRatioResult > 80) {
    if (switchPMI === '$') {
      return setFormatNumber(annualPMIResult / 12);
    }
    return setFormatNumber(annualPMIResult / 12);
  }
  return 0;
};

// value ratio
const getValueRatio = (amountResult, homeValue) => {
  const result = (amountResult * 100) / homeValue;
  return setFormatNumber(result);
};

// month with PMI
const getInterestNew = (amountResultNew, interestRateResult) => {
  if (interestRateResult !== 0) {
    const result = (amountResultNew * interestRateResult) / 12;
    return setFormatNumber(result);
  }
  return 0;
};
const getMonthPMI = (
  loanValueRatioResult,
  amountResult,
  homeValue,
  monthlyPIResult,
  monthlyInterestResult,
  monthlyPMIResult,
  paymentsMonthResult,
  interestRateResult,
) => {
  if (interestRateResult !== 0) {
    let countMonth = 0;
    let loanValueResNew = loanValueRatioResult;
    let amountResultNew = amountResult;

    while (loanValueResNew > 80) {
      countMonth += 1;
      const interestRateMonthlyResultNew = getInterestNew(amountResultNew, interestRateResult);
      const interest = interestRateMonthlyResultNew ?? 0;
      amountResultNew -= (monthlyPIResult - interest);
      loanValueResNew = (amountResultNew * 100) / homeValue;
      loanValueResNew = Math.floor(loanValueResNew * 10) / 10;
    }

    return countMonth;
  }
  return 0;
};

// total monthly payment
const getResMonthlyPayment = (
  amountResult,
  interestRateMonthlyResult,
  paymentsMonthResult,
  monthlyTaxResult,
  monthlyInsuranceResult,
  monthlyPMIResult,
) => {
  if (interestRateMonthlyResult !== 0) {
    const calcDetailsForMonthly = monthlyTaxResult + monthlyInsuranceResult + monthlyPMIResult;
    const result = (amountResult * interestRateMonthlyResult * (1 + interestRateMonthlyResult) ** paymentsMonthResult)
        / ((1 + interestRateMonthlyResult) ** paymentsMonthResult - 1) + calcDetailsForMonthly;
    return setFormatNumber(+result);
  }

  return 0;
};

const calc = (elements, watchedState) => {
  const { form, result } = watchedState;
  const { values, exclude } = form;

  // input values
  const { amount } = values;
  const interestRate = values['interest-rate'];
  const lengthYears = values['length-years'];
  const homeValue = values['home-value'];
  const annualTax = values['annual-tax'];
  const annualInsurance = values['annual-insurance'];
  const annualPMI = values['annual-pmi'];
  // * switchers
  const switchTaxes = exclude['switch-taxes'];
  const switchInsurance = exclude['switch-insurance'];
  const switchPMI = exclude['switch-pmi'];

  // results
  const paymentsMonthResult = +lengthYears * 12;

  // results calc
  const interestRateResult = getInterestRate(interestRate);
  const interestRateMonthlyResult = getInterestRateMonthly(interestRate);
  const amountResult = getAmount(amount);
  const loanValueRatioResult = getValueRatio(amountResult, homeValue);
  const annualTaxResult = getAnnualTax(annualTax, switchTaxes, amountResult);
  const annualInsuranceResult = getAnnualInsurance(annualInsurance, switchInsurance, amountResult);
  const annualPMIResult = getAnnualPMI(annualPMI, switchPMI, amountResult, loanValueRatioResult);
  const monthlyTaxResult = getMonthlyTax(annualTaxResult, switchTaxes, amountResult);
  const monthlyInsuranceResult = getMonthlyInsurance(annualInsuranceResult, switchInsurance, amountResult);
  const monthlyPMIResult = getMonthlyPMI(annualPMIResult, switchPMI, loanValueRatioResult, interestRateResult);
  const monthlyPIResult = getResMonthlyPI(amountResult, interestRateMonthlyResult, paymentsMonthResult);
  const monthlyPaymentResult = getResMonthlyPayment(
    amountResult,
    interestRateMonthlyResult,
    paymentsMonthResult,
    monthlyTaxResult,
    monthlyInsuranceResult,
    monthlyPMIResult,
  );
  const monthlyInterestResult = getResMonthlyInterest(amountResult, interestRateResult);
  const monthPMIResult = getMonthPMI(
    loanValueRatioResult,
    amountResult,
    homeValue,
    monthlyPIResult,
    monthlyInterestResult,
    monthlyPMIResult,
    paymentsMonthResult,
    interestRateResult,
    interestRateMonthlyResult,
  );
  // values output / details
  result['interest-rate'] = interestRate;
  result['length-years'] = lengthYears;
  result['home-value'] = homeValue;
  result['annual-tax'] = annualTaxResult;
  result['annual-insurance'] = annualInsuranceResult;
  result['annual-pmi'] = annualPMIResult;
  result['monthly-real-taxes'] = monthlyTaxResult;
  result['monthly-insurance'] = monthlyInsuranceResult;
  result['monthly-pmi'] = monthlyPMIResult;
  result['month-with-pmi'] = monthPMIResult;
  result['loan-value-ratio'] = loanValueRatioResult;
  result.amount = amountResult;
  result['monthly-pi'] = monthlyPIResult;
  result['monthly-payment'] = +monthlyPaymentResult;
};

export default calc;
