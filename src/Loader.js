import { Backdrop, CircularProgress } from "@mui/material"
import { useSelector } from "react-redux"


export const Loader = () => {

    let sel = useSelector(e => e.loader)
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={sel}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

