const Stream = require('../../node_modules/stream-chat/dist/index.js')
const config = require('../Utils/config')

const { StreamChat } = Stream
const { BubbleTemplate } = config

const messsageText = document.getElementById('message-input')
const info = document.getElementById('info')

const { name, _id  } = JSON.parse(localStorage.getItem('user'))

const token = localStorage.getItem('token')
const apiKey =  localStorage.getItem('apiKey')
const id = _id

if (token){
    const client = new StreamChat(apiKey);

    //initialize user
    client.setUser(
        {
            id,
            name:`${name.first +" "+ name.last}`,
            image: 'https://image.flaticon.com/icons/svg/145/145867.svg',
        },
        token,
    );

    const channel = client.channel('messaging', 'General', {
        name: 'Awesome channel about traveling',
    });

    // fetch the channel state, subscribe to future updates
    const state = channel.watch();

    // sends an event typing.start to all channel participants
    const checkTyping = async (e) =>{
        if (e.type==="keypress"){
            // sends an event typing.start to all channel participants
            await channel.keystroke();
        }
    }

    // Send message to the channel
    messsageText.addEventListener("keypress", (e)=>{
        checkTyping(e)
        if ( e.keyCode==13 ){
            //check for internet connection before sending message
            channel.sendMessage({
                text: e.target.value
            })
            e.target.value = ""
        }
    })

    messsageText.addEventListener("keyup", (e)=> {
        checkTyping(e)
    })

    // Listen for new messages
    channel.on('message.new', event => {
        const message = channel.state.messages[channel.state.messages.length-1]
        singleMessageDisplay(message)
    });

    channel.on('typing.start', event => {
        if(event.user.name!==client.user.name){
            info.textContent = event.user.name + ' is typing..'
        }
    }); 

    channel.on('typing.stop', event => {
        setTimeout(()=>{
            info.textContent = ""
        }, 2000)    
    }); 


    // What is our current channel state? We get to know that from here
    async function getState(){
        return await state
    }

    // Get historical messages
    getState().then((data)=>{
        document.getElementById("loading").textContent = ""
        data.messages.map((message)=>{
            singleMessageDisplay(message)
            })
        })

    // Push single message to display. This function pushes a chat bubble to the UI when you hit enter and there is network connection
    const singleMessageDisplay = (message) => {
        if ( message.user.id===client.user.id){
            const div = document.createElement('div')
            div.className = "msg right-msg"        
            div.innerHTML = BubbleTemplate(message.user.name, message.user.id, message.text, message.created_at, client.user.image)
            document.getElementById('right-msg').appendChild(div)
        }

        if (message.user.id !== client.user.id){
            const div = document.createElement('div')
            div.className = "msg left-msg"
            div.innerHTML = BubbleTemplate(message.user.name, message.user.id, message.text, message.created_at, message.user.image)
            document.getElementById('left-msg').appendChild(div)
        }
    }

}else{
    window.location.href="/login.html"
}




