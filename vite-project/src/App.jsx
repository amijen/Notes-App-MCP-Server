import './App.css'
import {StytchLogin, IdentityProvider, useStytchUser, OAuthProviders, Products} from "@stytch/react"

function App() {
  const {user: user} = useStytchUser();

  const config = {
    products: [Products.oauth, Products.passwords],

    oauthOptions: {
      providers: [
        {
          type: OAuthProviders.Google,
        },
      ],
      loginRedirectURL: "http://localhost:5173/authenticate",
      signupRedirectURL: "http://localhost:5173/authenticate",
    },

    passwordOptions: {
      loginRedirectURL: "http://localhost:5173/authenticate",
      resetPasswordRedirectURL:
        "http://localhost:5173/reset-password",
    },

    sessionOptions: {
      sessionDurationMinutes: 60,
    },
  };

  return (
    <div>
      {!user ? <StytchLogin config={config}/> : <h1>Logged in!</h1>}
    </div>
  )
}

export default App
