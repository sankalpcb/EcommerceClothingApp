import { Grid } from "@mui/material";
import Signup from "../components/SignupForm";
import  Login  from "../components/LoginForm";

function SignUpPage() {
    return (<>
    <Grid container sx={{marginTop:10}}>
        <Grid item md={6}>
            <Login/>
        </Grid>
        <Grid item md={6}>
            <Signup />
        </Grid>
    </Grid>
       
       
    </>);
}

export default SignUpPage;