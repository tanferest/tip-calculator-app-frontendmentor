function Tip() {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset__legend">Select Tip %</legend>
      <ul className="fieldset__tip">
        <li>
          <input name="tip" className="radio" type="radio" value="5" id="5" />
          <label className="fieldset__tip--option" htmlFor="5">5%</label>
        </li>
        <li>
          <input name="tip" className="radio" type="radio" value="10" id="10" />
          <label className="fieldset__tip--option" htmlFor="10">10%</label>
        </li>
        <li>
          <input name="tip" className="radio" type="radio" value="15" id="15" />
          <label className="fieldset__tip--option" htmlFor="15">15%</label>
        </li>
        <li>
          <input name="tip" className="radio" type="radio" value="25" id="25" />
          <label className="fieldset__tip--option" htmlFor="25">25%</label>
        </li>
        <li>
          <input name="tip" className="radio" type="radio" value="50" id="50" />
          <label className="fieldset__tip--option" htmlFor="50">50%</label>
        </li>
        <li>
          <input className="fieldset__input fieldset__input--custom" type="number" name="tip" id="tip" placeholder="Custom" />
        </li>
      </ul>
    </fieldset>
  );
}

export default Tip;
