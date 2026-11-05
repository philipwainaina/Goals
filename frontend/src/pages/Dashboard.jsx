import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import GoalItem from '../components/GoalItem'
import {getGoals, reset} from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  //get user from the auth slice
  const {user} = useSelector((state) => state.auth)
  //get goals from the goal slice
  const {goals, isLoading, isError, message} = useSelector((state) => state.goals)
 
//if user is not logged in, redirect to login page
  useEffect(() => {
    if (isError){
      console.log(message);
    }
    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }


  }, [user, navigate,isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <><section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>Time to set Goals</p></section>

      <GoalForm/>

      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <p>You have not set any goals yet.</p>
        )}
      </section>
    </>
  )
}

export default Dashboard