import '../App.css'
import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

const  CakeComponent = (props) => {
    return(
        <div className="Cake">
            <h1>Number of cakes - {props.NumOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        NumOfCakes: state.NumOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:() => dispatch(buyCake())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(CakeComponent);