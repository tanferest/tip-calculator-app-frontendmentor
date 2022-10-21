import Bill from './Bill';
import Tip from './Tip';
import People from './People';
import Total from './Total';
import '../styles/Main.scss';

function Main (props) {
    return <section className='section-form'>
    <form className='form'>
        <Bill handleBill={props.handleBill} hidden={props.hidden} error={props.error} billValue={props.billValue}/>
        <Tip />
        <People />
    </form>
    <Total />
    </section>
}

export default Main;