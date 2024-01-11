


export function HandleRedirect () {
    
    const GoToSignIn = (history)=>{
        history.push("/SignIn");
    }
   
    const RedirectHome = (history)=>{
        history.push("/")
    }

    return {GoToSignIn, RedirectHome};
}
