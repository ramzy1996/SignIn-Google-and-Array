function onSignIn(userProfile) {
  console.log(userProfile);

  const profile = userProfile.getBasicProfile();
  console.log(profile);
  const name = profile.getName();
  console.log(name);
  const email = profile.getEmail();
  console.log(email);
  const { id_token } = userProfile.getAuthResponse();
  console.log(id_token);
}

function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
}

function onFailure(err) {
  console.log(err.error);
}

function renderButton() {
  gapi.signin2.render("signInBtn", {
    height: 50,
    width: 300,
    theme: "dark",
    onsuccess: onSignIn,
    onfailure: onFailure,
    longtitle:true
  });
}
window.onload=function(){
    renderButton();
}
