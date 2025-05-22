import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// state 객체에 포함된 상태 변수를  Counter 컴포넌트에게 props로 전달합니다.
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

/* 액션 생성 함수를 사용하여 액션을 생성하고,
   해당 액션을 dispatch하는 함수를 만든 후, 
   함수의 property 이름을 Counter 컴포넌트에게 props로 전달합니다.
*/
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        //const color = 'red' // 임시 getRandomColor()를 작성하여 변경할 예정
        dispatch(actions.setColor(getRandomColor()));
    }
});

/*Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 합니다.*/
const CounterContainerOrg = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default CounterContainerOrg;
