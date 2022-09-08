function Tip() {
  return (
    <fieldset>
      <legend>Select Tip %</legend>
      <ul>
        <li>
          <input type="radio" value="5" id="5" />
          <label htmlFor="5">5%</label>
        </li>
        <li>
          <input type="radio" value="10" id="10" />
          <label htmlFor="10">10%</label>
        </li>
        <li>
          <input type="radio" value="15" id="15" />
          <label htmlFor="15">15%</label>
        </li>
        <li>
          <input type="radio" value="25" id="25" />
          <label htmlFor="25">25%</label>
        </li>
        <li>
          <input type="radio" value="50" id="50" />
          <label htmlFor="50">50%</label>
        </li>
        <li>
          <input type="number" name="tip" id="tip" placeholder="Custom" />
        </li>
      </ul>
    </fieldset>
  );
}

export default Tip;
