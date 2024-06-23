import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';

function AcornForm() {
    const { addSaving, error, setError } = useGlobalContext();
    const [inputState, setInputState] = useState({
        amount: '',
        date: '',
    });
    const { amount, date } = inputState;
    const [multiplier, setMultiplier] = useState('');
    // const [roundOffValue, setRoundOffValue] = useState('');
    const [totalAcorns, setTotalAcorns] = useState(null);
    // roundOffValue = 0
    const calculateAcorns = () => {
        debugger
        if (amount !== '' && multiplier !== '' ) {
            const parsedAmount = parseFloat(amount);
            const parsedMultiplier = multiplier;
            // const parsedRoundOffValue = parseFloat(roundOffValue);
            const parsedRoundOffValue = 0;

            if (!isNaN(parsedAmount) && !isNaN(parsedMultiplier) && !isNaN(parsedRoundOffValue)) {
                const roundedTotal = roundNumber(parsedAmount, parseInt(parsedRoundOffValue));
                const acorns = roundedTotal - parsedAmount;
                setTotalAcorns(acorns * parsedMultiplier);
            } else {
                alert('Please enter valid numbers');
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    const roundNumber = (number, ndigits) => {
        debugger
        if (!(number % 1)) {
            return Math.ceil(number / 5) * 5;
        } else {
            return Math.ceil(number);
        }
    };

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('');
    };

    const handleSubmit = e => {
        calculateAcorns();
        e.preventDefault();
        addSaving({ ...inputState, amount: totalAcorns }); // Assuming totalAcorns is the correct amount to add
        setInputState({
            amount: '',
            date: '',
        });
    };

    return (
        <SavingFormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input
                    value={amount}
                    type="text"
                    name={'amount'}
                    placeholder={'Expense Amount'}
                    onChange={handleInput('amount')}
                />
            </div>
            <div>
                <label htmlFor="multiplier" className='input-control'>Multiplier:</label>
                <input
                    type="number"
                    id="multiplier"
                    value={multiplier}
                    onChange={(e) => setMultiplier(e.target.value)}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date })
                    }}
                />
            </div>
            <div className="submit-btn">
                <Button
                    name={'Add Saving'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </SavingFormStyled>
    );
}

const SavingFormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 2rem;
input, textarea, select{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder{
        color: rgba(34, 34, 96, 0.4);
    }
}
.input-control{
    input{
        width: 100%;
    }
}

.selects{
    display: flex;
    justify-content: flex-end;
    select{
        color: rgba(34, 34, 96, 0.4);
        &:focus, &:active{
            color: rgba(34, 34, 96, 1);
        }
    }
}

.submit-btn{
    button{
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
            background: var(--color-green) !important;
        }
    }
}
`;

export default AcornForm;
// import React, { useState } from 'react'
// import styled from 'styled-components'
// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";
// import { useGlobalContext } from '../../context/globalContext';
// import Button from '../Button/Button';
// import { plus } from '../../utils/Icons';


// function AcornForm() {
//     const {addSaving, error, setError} = useGlobalContext()
//     const [inputState, setInputState] = useState({
//         amount: '',
//         date: '',
//     })
//     const { amount, date} = inputState;
//     const [amount1, setAmount] = useState('');
//   const [multiplier, setMultiplier] = useState('');
//   const [roundOffValue, setRoundOffValue] = useState('');
//   const [totalAcorns, setTotalAcorns] = useState(null);
//   function isDecimal(num) {
//     return (num % 1);
//  }
//   const roundNumber = (number, ndigits) => {
//     debugger
//     if (!isDecimal(number)) {
//         return Math.ceil(number / 5) * 5;
//     } else {
//         return Math.ceil(number);
//     }
//     // if (ndigits === null) {
//     //   return Math.round(number);
//     // }
//     // const factor = Math.pow(10, ndigits);
//     // return Math.round(number * factor) / factor;/
    
//   };

//   const calculateAcorns = () => {
//     debugger
//     if (amount1 !== '' && multiplier !== '' && roundOffValue !== '') {
//       const parsedAmount = parseFloat(amount1);
//       const parsedMultiplier = parseFloat(multiplier);
//       const parsedRoundOffValue = parseFloat(roundOffValue);

//       if (!isNaN(parsedAmount) && !isNaN(parsedMultiplier) && !isNaN(parsedRoundOffValue)) {
//         // const total = parsedAmount * parsedMultiplier;
//         const roundedTotal = roundNumber(parsedAmount, parseInt(parsedRoundOffValue));
//         const acorns = roundedTotal - parsedAmount;
//         setTotalAcorns(acorns*parsedMultiplier);
//       } else {
//         alert('Please enter valid numbers');
//       }
//     } else {
//       alert('Please fill in all fields');
//     }
//   };
    

//     const handleInput = name => e => {
//         setAmount(e.target.value)
//         setInputState({...inputState, [name]: e.target.value})
//         setError('')
//     }

//     const handleSubmit = e => {
//         calculateAcorns()
//         setAmount({totalAcorns})
//         e.preventDefault()
//         // setInputState({...inputState, [name]: e.target.value})
//         addSaving(inputState)
//         setInputState({
//             amount: '',
//             date: '',
//         })
//     }

//     return (
//         <SavingFormStyled onSubmit={handleSubmit}>
//             {error && <p className='error'>{error}</p>}
//             {/* <div className="input-control">
//                 <input 
//                     type="text" 
//                     value={title}
//                     name={'title'} 
//                     placeholder="Expense Title"
//                     onChange={handleInput('title')}
//                 />
//             </div> */}
//             <div className="input-control">
//                 <input value={amount1}  
//                     type="text" 
//                     name={'amount'} 
//                     placeholder={'Expense Amount'}
//                     onChange={handleInput('amount')} 
//                 />
//             </div>
//             <div>
//         <label htmlFor="multiplier">Multiplier:</label>
//         <input
//           type="number"
//           id="multiplier"
//           value={multiplier}
//           onChange={(e) => setMultiplier(e.target.value)}
//         />
//       </div>
//             <div className="input-control">
//                 <DatePicker 
//                     id='date'
//                     placeholderText='Enter A Date'
//                     selected={date}
//                     dateFormat="dd/MM/yyyy"
//                     onChange={(date) => {
//                         setInputState({...inputState, date: date})
//                     }}
//                 />
//             </div>
//             {/* <div className="selects input-control">
//                 <select required value={category} name="category" id="category" onChange={handleInput('category')}>
//                     <option value="" disabled >Select Option</option>
//                     <option value="education">Education</option>
//                     <option value="groceries">Groceries</option>
//                     <option value="health">Health</option>
//                     <option value="subscriptions">Subscriptions</option>
//                     <option value="takeaways">Takeaways</option>
//                     <option value="clothing">Clothing</option>  
//                     <option value="travelling">Travelling</option>  
//                     <option value="other">Other</option>  
//                 </select>
//             </div>
//             <div className="input-control">
//                 <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
//                 </div>*/}
//             <div className="submit-btn">
//                 <Button 
//                     name={'Add Saving'}
//                     icon={plus}
//                     bPad={'.8rem 1.6rem'}
//                     bRad={'30px'}
//                     bg={'var(--color-accent'}
//                     color={'#fff'}
//                 /> 
//             </div>
//         </SavingFormStyled>
//     )
// }


// const SavingFormStyled = styled.form`
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     input, textarea, select{
//         font-family: inherit;
//         font-size: inherit;
//         outline: none;
//         border: none;
//         padding: .5rem 1rem;
//         border-radius: 5px;
//         border: 2px solid #fff;
//         background: transparent;
//         resize: none;
//         box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//         color: rgba(34, 34, 96, 0.9);
//         &::placeholder{
//             color: rgba(34, 34, 96, 0.4);
//         }
//     }
//     .input-control{
//         input{
//             width: 100%;
//         }
//     }

//     .selects{
//         display: flex;
//         justify-content: flex-end;
//         select{
//             color: rgba(34, 34, 96, 0.4);
//             &:focus, &:active{
//                 color: rgba(34, 34, 96, 1);
//             }
//         }
//     }

//     .submit-btn{
//         button{
//             box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//             &:hover{
//                 background: var(--color-green) !important;
//             }
//         }
//     }
// `;
// export default AcornForm