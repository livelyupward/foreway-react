export const getUser = async (credentialResponse: any) => {
  try {
    /**
     * send the credential that we saved to the server
     */
    const tokenSend = await fetch(`http://localhost:4000/api/auth?cred=${credentialResponse.credential}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const tokenResponse = await tokenSend.json();

    // set the credential response to a localStorage value
    localStorage.setItem('gg_token', JSON.stringify(credentialResponse));

    /**
     * query db for the user that was sent by successful Google auth
     */
    const userDbFetch: Response = await fetch(`http://localhost:4000/api/users/${tokenResponse.email}`);
    let userDbResponse: object[];

    if (userDbFetch.status === 404) {
      const newUser = await fetch(`http://localhost:4000/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: tokenResponse.email,
          name: tokenResponse.name,
        }),
      });
      const newUserFromDB = await newUser.json();

      userDbResponse = [newUserFromDB];
    } else {
      userDbResponse = await userDbFetch.json();
    }

    return userDbResponse;
    /**
     * set the user in the app state and push to the home route
     */
    // await setUser(userDbResponse[0]);
    // await router.push('/');
  } catch (error) {
    console.error('Google callback error: ', error);
    throw Error('Error during Google callback.');
  }
};
