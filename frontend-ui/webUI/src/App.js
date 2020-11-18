import React, {useEffect, useState} from 'react';
import './App.css';
import {authCheck} from "./utils/WebAuth";

function App() {

    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    useEffect(() => {
        onLoad();
    });

    async function onLoad() {
        try {
            var a1 = await authCheck()
            userHasAuthenticated(a1)
        } catch {
            console.log("error")
        }
        setIsAuthenticating(a1)
    }

    if (isAuthenticating ) {
        if (!isAuthenticated) {
            return <main>
                <h1>Code-A-Thon Front WebSite - Not Auth</h1>
            </main>
        } else {
            return <main>
                <h1>Yes I am in Auth</h1>
            </main>
        }
    } else {
        return <h1>Not Auth</h1>
    }
}

export default App;
