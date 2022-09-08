import Bill from './Bill';
import Tip from './Tip';
import People from './People';
import Total from './Total';

function Main () {
    return <>
    <form>
        <Bill />
        <Tip />
        <People />
    </form>
    <Total />
    </>
}

export default Main;