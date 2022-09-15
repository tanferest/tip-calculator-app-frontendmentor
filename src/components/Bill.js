import '../styles/Fieldset.scss';

function Bill () {
    return <fieldset className='fieldset'>
    <legend className='fieldset__legend'>Bill</legend>
    <input className='fieldset__input fieldset__input--bill' type="number" name="bill" placeholder="0.00"/>
    </fieldset>
}

export default Bill;