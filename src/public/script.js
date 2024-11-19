const socket = io()

// Listen for messages 
socket.on('notif', (data) => {
    const li = document.createElement('li')
    li.textContent = data
    document.querySelector('ul').appendChild(li)
})