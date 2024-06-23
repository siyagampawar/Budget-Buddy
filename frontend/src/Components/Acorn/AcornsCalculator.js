import React, { useState } from 'react';
import styled from 'styled-components'

const AcornsCalculator = () => {
  const [amount, setAmount] = useState('');
  const [multiplier, setMultiplier] = useState('');
  const [roundOffValue, setRoundOffValue] = useState('');
  const [totalAcorns, setTotalAcorns] = useState(null);
  function isDecimal(num) {
    return (num % 1);
 }
  const roundNumber = (number, ndigits) => {
    debugger
    if (!isDecimal(number)) {
        return Math.ceil(number / 5) * 5;
    } else {
        return Math.ceil(number);
    }
    // if (ndigits === null) {
    //   return Math.round(number);
    // }
    // const factor = Math.pow(10, ndigits);
    // return Math.round(number * factor) / factor;/
    
  };

  const calculateAcorns = () => {
    debugger
    if (amount !== '' && multiplier !== '' && roundOffValue !== '') {
      const parsedAmount = parseFloat(amount);
      const parsedMultiplier = parseFloat(multiplier);
      const parsedRoundOffValue = parseFloat(roundOffValue);

      if (!isNaN(parsedAmount) && !isNaN(parsedMultiplier) && !isNaN(parsedRoundOffValue)) {
        // const total = parsedAmount * parsedMultiplier;
        const roundedTotal = roundNumber(parsedAmount, parseInt(parsedRoundOffValue));
        const acorns = roundedTotal - parsedAmount;
        setTotalAcorns(acorns*parsedMultiplier);
      } else {
        alert('Please enter valid numbers');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <AcornStyled>
    <div>
        
      <h2>Acorns Calculator</h2>
      
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="multiplier">Multiplier:</label>
        <input
          type="number"
          id="multiplier"
          value={multiplier}
          onChange={(e) => setMultiplier(e.target.value)}
        />
      </div>
      {/* <div>
        <label htmlFor="roundOffValue">Round-off Value:</label>
        <input
          type="number"
          id="roundOffValue"
          value={roundOffValue}
          onChange={(e) => setRoundOffValue(e.target.value)}
        />
      </div> */}
       <div>
  <label htmlFor="roundOffValue">Round-off Value:</label>
  <select
    id="roundOffValue"
    value={roundOffValue}
    onChange={(e) => setRoundOffValue(e.target.value)}
  >
    <option value="">Select Round-off Value</option>
    <option value="0">Ones</option>
    <option value="1">Tenths</option>
    <option value="2">Hundredths</option>
    <option value="3">Thousandths</option>
    {/* Add more options as needed */}
  </select>
</div>

      <button onClick={calculateAcorns}>Calculate Acorns</button>
      {totalAcorns !== null && (
        <div>
          <h3>Total Acorns: {totalAcorns}</h3>
        </div>
      )}
      
    </div>
    </AcornStyled>
    
  );
};


const AcornStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;
export default AcornsCalculator;