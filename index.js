
function refreshScreen() {
    let screen = document.getElementById("GPS")
    let LP = document.getElementById("FIRST")
    let bar = document.getElementById("BAR1")

    LP.style.display = "none"
    bar.style.display = "flex"

}
async function fetchuserInfo() {
    let response;
    let USER = document.getElementById("display").value

    url = (`https://api.github.com/users/${USER}`)

    response = await fetch(url)
    
    try {
        const json = await response.json();

        if (json.name === undefined && json.login === undefined || USER === " " || USER === "null" ) {
            window.alert("Please input a github username!")        
        }
        else {
            document.getElementById("user-bio").textContent = `Bio : ${json.bio}`
            document.getElementById("user-followers").textContent = `No of followers : ${json.followers}`
            document.getElementById("user-name").textContent = `Name : ${json.name}`
            document.getElementById("user-web").textContent = `Website : ${json.blog}`
            document.getElementById("user-link").textContent = `Users Github : ${json.html_url}`
            document.getElementById("user-repos").textContent = `Users number of Repositories : ${json.public_repos}`
            document.getElementById("user-image").src = json.avatar_url
            document.getElementById("users-twitter").textContent =  `Users Twitter : ${json.twitter_username}`    
            document.getElementById("user-joined").textContent =  `User Joined on : ${json.created_at}`
        }
    }
    catch (error) {
        window.alert("Error while fetching user.")
    }


}

