import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import goalService from './goalService'

//initial state, it will be used to set the initial state of the slice. It contains an array of goals, and flags for error, success, loading, and a message.
const initialState = {
    goals:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''

}

//create goalSlice using createSlice from @reduxjs/toolkit. It takes an object with name, initialState, and reducers as properties. The name is 'goal', the initialState is the one defined above, and the reducers contain a reset function that resets the state to the initial state.
export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        //create new goal
            .addCase(createGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })
            .addCase(createGoal.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            //get user goals

            .addCase(getGoals.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGoals.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            .addCase(getGoals.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            //delete user goal
            .addCase(deleteGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteGoal.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = state.goals.filter((goal) => goal._id !== action.payload._id)
            })
            .addCase(deleteGoal.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
    }
)

//create new goal
export const createGoal = createAsyncThunk('goal/create', async (goalDatat ,thunkAPI) =>{
    try {
       const token = thunkAPI.getState().auth.user.token
       return await goalService.createGoal(goalDatat, token) 
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)  
    }
})

//get user goals 
export const getGoals = createAsyncThunk('goal/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await goalService.getGoals(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//delete user goal
//create new goal
export const deleteGoal = createAsyncThunk('goal/delete', async (Id, thunkAPI) =>{
    try {
       const token = thunkAPI.getState().auth.user.token
       return await goalService.deleteGoal(Id, token) 
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)  
    }
})


export const {reset} = goalSlice.actions

export default goalSlice.reducer

