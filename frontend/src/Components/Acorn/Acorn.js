import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import IncomeItem from '../IncomeItem/IncomeItem';
import AcornForm from './AcornForm';
// import { getSaving } from '../../../../backend/controllers/saving';

function Acorn() {
    const {addSaving ,savings,getSaving, totalSaving} = useGlobalContext()

    useEffect(() =>{
        getSaving()
    }, [])
    return (
        <SavingStyled>
            <InnerLayout>
                <h1>Saving through Acorn</h1>
                <h2 className="total-income">Total Saving: <span>Rs {totalSaving()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <AcornForm />
                    </div>
                    <div className="incomes">
                        {savings && savings.map((saving) => {
                            const {_id, amount, date} = saving;
                            console.log(saving)
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                amount={amount} 
                                date={date} 
                                indicatorColor="var(--color-green)"
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </SavingStyled>
    )
}

const SavingStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`;

export default Acorn