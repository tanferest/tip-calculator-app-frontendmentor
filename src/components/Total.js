import '../styles/Total.scss';

function Total () {
    return <section className="total">
        <div className="total__section">
            <p className="total__text">Tip Amount <span className="total__text--span">/ person </span></p>
            <p className="total__amount">$4.27</p>
        </div>
        <div className="total__section">
            <p className="total__text">Total <span className="total__text--span">/ person </span></p>
            <p className="total__amount">$32.79</p>
        </div>
        <button className="total__btn">Reset</button>
    </section>
}


export default Total;