const authHandlers = (signId, logId, forgotpassId,associationVeri, none, block) => {

    const signele = document.getElementById(signId);
    const logle = document.getElementById(logId);
    const forgotele = document.getElementById(forgotpassId);
    const assVer=document.getElementById(associationVeri)
    

    const SignUpHandler = () => {
        signele.style.display = block;
        logle.style.display= none;
        forgotele.style.display = none;
        assVer.style.display = none;
    };


    const LogInHandler = () => {
        signele.style.display = none;
        logle.style.display= block;
        forgotele.style.display = none;
        assVer.style.display = none;
    };

    const ForgotPassHandler = () => {
        signele.style.display = none;
        logle.style.display= none;
        forgotele.style.display = block;
        assVer.style.display = none;
    };

    const AssociationVerHandler = () => {
        signele.style.display = none;
        logle.style.display= none;
        forgotele.style.display = none;
        assVer.style.display = block;
    }

    return {
        SignUpHandler, 
        LogInHandler,
        ForgotPassHandler,
        AssociationVerHandler
    }

 }

export default authHandlers;
