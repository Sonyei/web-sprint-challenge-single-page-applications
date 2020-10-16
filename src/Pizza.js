import React from 'react'



export default function Form(props) {

const { values, disabled, change, submit, errors } = props


const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
}

const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
}


return (
    <div>
    
        <form onSubmit={onSubmit}>
        <h2>Create-A-Pizza Order Form</h2>
        <div>{errors.name}</div>

        <label> Name:
            <input
            name='name'
            type='text'
            value={values.name}
            placeholder='Name goes here.'
            onChange={onChange} />
        </label>


          <div>{errors.size}</div>
        <label> Size 
            <select
            name='size'
            value={values.size}
            onChange={onChange}>
                <option value="">--Choose a Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="el">Extra Large</option>
            </select>
       </label>
        <br />

        <div>
        <h3>Choose your Toppings:</h3>
       <label>
            <input
            name='cheese'
            type='checkbox'
            checked={values.cheese}
            onChange={onChange}
            />Cheese
       </label>
       <br />

              <label>
            <input
            name='pepp'
            type='checkbox'
            checked={values.pepp}
            onChange={onChange}
            />Pepperoni
       </label>
       <br />

              <label>
            <input
            name='olive'
            type='checkbox'
            checked={values.olive}
            onChange={onChange}
            />Olives
       </label>
       <br />

              <label>
            <input
            name='tomat'
            type='checkbox'
            checked={values.tomat}
            onChange={onChange}
            />Tomatoes
       </label>
       <br />
       </div>

       <label> Special Instructions
       <input
       name='specInstruct'
       type='text'
       value={values.specInstruct}
       onChange={onChange}
       />
       </label>

       <button disabled={disabled}>Place order</button>

        </form>

    </div>
)


}