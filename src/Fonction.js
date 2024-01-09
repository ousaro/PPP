const authHandlers = (signId, logId, forgotpassId, none, block) => {

    const signele = document.getElementById(signId);
    const logle = document.getElementById(logId);
    const forgotele = document.getElementById(forgotpassId);
    

    const SignUpHandler = () => {
        signele.style.display = block;
        logle.style.display= none;
        forgotele.style.display = none;
    };


    const LogInHandler = () => {
        signele.style.display = none;
        logle.style.display= block;
        forgotele.style.display = none;
    };

    const ForgotPassHandler = () => {
        signele.style.display = none;
        logle.style.display= none;
        forgotele.style.display = block;
    }

    return {
        SignUpHandler, 
        LogInHandler,
        ForgotPassHandler
    }

 }

export default authHandlers;
