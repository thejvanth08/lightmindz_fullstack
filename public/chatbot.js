const sendBtn = document.getElementById("send");
const userMsg = document.getElementById("user-msg");
const chats = document.getElementById("chats");
const endChat = document.getElementById("end");

// it must async function to use await
sendBtn.addEventListener("click", async () => {
    const userData = (userMsg.value);
    // console.log(typeof userData); string

    // clearing the input field, after storing the data in another var
    userMsg.value="";
    appendChat(userData, "user");

    // if it's not empty string
    if(userData.trim()) {
        try {
            const rasaResponse = await axios.post("/bot", {
                msg: userData
            });
            // rasaResponse -> object
            // for(let key in rasaResponse) {
            //     console.log(rasaResponse[key]);
            // }
            const rasaData = rasaResponse.data; // actual required response from rasa bot
    
            // after resolving the promise -> appending the chats with rasa's response
            appendChat(rasaData, "rasa");
        } catch(error) {
            // when the promise is reject by the server which process this request or any error happens
            console.log(error);
        }
    } else {
        console.log("no input msg provided");
    }
});

function appendChat(data, who) {
    const div = document.createElement("div");
    const para = document.createElement("p");

    // insert data into para (text)
    para.textContent = data;
    // appending para within div
    div.appendChild(para);


    // adding appropriate class to div (text's or para's container)
    if(who === "user") {
        div.classList.add("right");
    } else {
        div.classList.add("left");
    }
    // finally appending to chats container 
    chats.appendChild(div);
}

// for ending the conversation to store the chats in database
endChat.addEventListener("click", async () => {

    try {

        await axios.post("/bot/end", {
            terminate: true
        });

    } catch(error) {
        console.log(error);
    }
});