import Bill from './Bill';
import Tip from './Tip';
import People from './People';
import Total from './Total';
import '../styles/Main.scss';

function Main () {
    return <section className='section-form'>
    <form className='form'>
        <Bill />
        <Tip />
        <People />
    </form>
    <Total />
    </section>
}

export default Main;