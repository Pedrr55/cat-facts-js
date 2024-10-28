// Add the event to the "Principal" button on the website.
document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector("#Principal").addEventListener("click", ()=> {
        getData();
    })
})

// Makes connection with the API and return a response based on the HTTP protocol.
async function getData() {
    replaceText("Loading...")
    try{
        const response = await fetch("https://catfact.ninja/fact")
        if(response.status == 200) {
            const data = await response.json()
            console.log(data.fact)
            replaceText(data.fact)
        }
        else {
            replaceText("Server error")
        }
    }
    catch(e){
        replaceText("Network error\n" + e)
    }
    
}

// Replaces the text get from the API to another.
function replaceText(text="Text") {
    document.querySelector("#Phrase").innerText = text;
}