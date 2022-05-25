import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'



function GoalForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createGoal({text}));
        setText('');
    } 
    
  
  return (
    <section>
        <form onSubmit ={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" className="form-control" id="text" 
                value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Goal" />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='sumbit'>
                    Add Goal
                </button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm