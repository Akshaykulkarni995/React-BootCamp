import { API } from '../../backend'
// api means http://localhost:8000/api

// all api calls wrt to  auth 

export const signup = user => {
    //fetch api call
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    })

    // to get response 
        .then(response => {
            return response.json();
        })
        //catch if error
        .catch(err => console.log(err))
};

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
};

//setting our token 
export const authenticate = (data , next) => {
    if(typeof window !== "undefined "){
        localStorage.setItem("jwt" , JSON.stringify(data));
        next();
    }
}

export const signout = next => {
    if(typeof window !== "undefined "){
        localStorage.removeItem("jwt")
        next()
        return fetch (`$API/signout`,{
            method :"GET"
        })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err))
    }
};


export const isAuthenticated = () => {
    if(typeof window == "undefined "){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }else{
        return false
    }
}