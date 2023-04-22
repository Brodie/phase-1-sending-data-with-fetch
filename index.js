// Add your code here
function submitData(userName, eMail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: eMail,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const identity = data.id;
      document.querySelector("body").append(identity);
    })
    .catch(() => document.querySelector("body").append("Unauthorized Access"));
}

submitData("joe", "joemail");
