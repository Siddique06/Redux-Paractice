import Home from "../Components/Home";
import { addToCartA , RemoveToCartA} from "../Services/Actions/action";
import { connect } from 'react-redux'

const mapStateToProps = state =>({//yeh data stroe sy pkrky props ky zariye components  ko dety hai
    Data:state.AddCartR
})
const mapDispatchToProps = dispatch =>({//yeh data components sy uthaky store m save krta hai 
    addToCartHandler:data=>dispatch(addToCartA(data)),
    remToCartHandler:data=>dispatch(RemoveToCartA(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
// export default Home;