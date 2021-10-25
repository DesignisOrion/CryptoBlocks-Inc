const serverUrl = "https://f2sieotb2933.moralishost.com:2053/server";
const appId = "FWiojOYpBOA8PMcsF1XI8gaNbMdCRn5axry07ths";
Moralis.start({ serverUrl, appId });
/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}
document.getElementById("mmLogin").onclick = login;
document.getElementById("mmSignout").onclick = logOut;