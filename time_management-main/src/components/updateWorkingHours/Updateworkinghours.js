import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import {updateworkinghours } from '../../../redux/actions/userActions'

import styles from './Updateworkinghours.module.css'

const Updateworkinghours = () => {
    

    const [workingHours,setWorkingHours] = useState('')
    
    const dispatch = useDispatch()
    const history = useHistory()

    const handelSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateworkinghours(workingHours))
        history.push('/')
        console.log(workingHours);
        
    
        
    }
    return (
        <div className={styles.form_wrapper}>
            <form onSubmit={handelSubmit}>
                <h2 className={styles.title}>Update Working Hours</h2>
                <input type="workingHours" placeholder="workingHours" name="workingHours" value={workingHours} onChange={(e)=>{setWorkingHours(e.target.value)}}/>
                <button className={styles.update_working_hours_btn}>Update Working Hours</button>
                
            </form>

        </div>
    )
}

export default Updateworkinghours

