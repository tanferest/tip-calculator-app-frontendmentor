import '../styles/Fieldset.scss';

function Bill(props) {

  return (
    <fieldset className="fieldset">
      <legend className="fieldset__legend">Bill</legend>
      <p className={`number-ad ${props.hidden}`}>{`Please, use only valid numbers!`}</p>
      <input
        className={`fieldset__input fieldset__input--bill ${props.error}`}
        type="text"
        name="bill"
        placeholder="0.00"
        onChange={props.handleBill}
        value={props.billValue}
      />
    </fieldset>
  );
}

export default Bill;
