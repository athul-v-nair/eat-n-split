import { useState } from 'react'
import Button from '../Button/Button'
import { SplitPropType } from './types'

const Split = ({selected, handleSplitBill}: SplitPropType) => {
  const [bill, setBill] = useState<number|string>('')
  const [userExpense, setUserExpense] = useState<number|string>('')
  const [paymentBy, setPaymentBy] = useState<string>('user')
  const friendExpense: number|string = bill ? Number(bill) - Number(userExpense) : '';

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(!bill || !userExpense) return
    handleSplitBill(paymentBy === 'user' ? Number(friendExpense) : -userExpense)
  }
  return (
    <>
        <form className='form-split-bill' onSubmit={(e) =>handleFormSubmit(e)}>
            <h2>Split a bill with {selected.name}</h2>

            <label>Bill Value</label>
            <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
            
            <label>Your Expense</label>
            <input type="text" value={userExpense} onChange={(e) => Number(e.target.value) > Number(bill) ? userExpense : setUserExpense(Number(e.target.value))}/>
            
            <label>{selected.name}'s Expense</label>
            <input type="text" disabled value={friendExpense}/>

            <label>Who is paying the Bill</label>
            <select value={paymentBy} onChange={(e) => setPaymentBy(e.target.value)}>
                <option value="you">You</option>
                <option value="friend">{selected.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form> 
    </>
  )
}

export default Split
