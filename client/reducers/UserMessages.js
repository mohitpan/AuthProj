import shortid from 'shortid';

export default (state=[],action={}) => {
        
        switch(action.type){
            case 'ADD_USER_MESSAGE':
                console.log("action aaya");
                return (Object.assign({},state,{
                    type:action.message.type,
                    text:action.message.text,
                    user: action.message.user,
                    id: shortid.generate()
                }));
            default:
             return state;
        }
    }