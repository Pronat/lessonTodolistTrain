import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import {useAppSelector} from "../../app/store";
import {useDispatch} from "react-redux";
import {setAppErrorAC} from "../../features/TodolistsList/app-reducer";



const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export const ErrorSnackbar = () => {
    // const [open, setOpen] = useState(true)
    let error = useAppSelector(state => state.app.error)
    const dispatch = useDispatch()



    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        // setOpen(false)
        dispatch(setAppErrorAC(null))
    }
    return (
        <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity='error' sx={{width: '100%'}}>
                {error}
            </Alert>
        </Snackbar>
    )
};
