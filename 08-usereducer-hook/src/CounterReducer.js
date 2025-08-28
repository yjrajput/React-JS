const initialState = {count : 0};

const CounterReducet = (state, action) =>{
    switch(action.type){
        case "increment":{
            return {count: state.count + 1}
        }
        case "decrement":{
            return {count: state.count - 1}
        }
        case "incrementByAmmount":{
            return {count : state.count + action.payload}
        }
        case "decrementByAmmount":{
            return {count: state.count - action.payload}
        }
        default:{
            return state
        }
    }
}

export {initialState, CounterReducet}