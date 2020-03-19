const {ipcRenderer} = require('electron');

const reload = document.getElementById('reload');
const portsSelect = document.getElementById('ports-select');
const connect = document.getElementById('connect');
const led = document.getElementById('led');

const reloadPorts =  async ()=>{
    const aPorts = await ipcRenderer.invoke('reload-ports');
    portsSelect.innerHTML = '';
    
    aPorts.forEach((aPort, index) =>{
        const option = document.createElement('option');
        option.setAttribute('value', aPort.path);
        option.innerText = aPort.path;
        portsSelect.appendChild(option);
    });
}

reload.addEventListener('click', reloadPorts);

connect.addEventListener('click', () => {
    const port_path = portsSelect.value;
    ipcRenderer.send('connect', port_path);
});

const up = document.getElementById('up');
const down = document.getElementById('down');
const center = document.getElementById('center');
const left = document.getElementById('left');
const right = document.getElementById('right');
    
let loop;
    
up.addEventListener('mousedown', ()=>{
    loop = setInterval(()=>{
        sendMessage('up')
    }, 200);
});

up.addEventListener('mouseup', ()=> clearInterval(loop));
    
down.addEventListener('mousedown', ()=>{
    loop = setInterval(()=>{
        sendMessage('down')
    }, 200);
});

down.addEventListener('mouseup', ()=> clearInterval(loop));

    
center.addEventListener('mousedown', ()=>{
    loop = setInterval(()=>{
        sendMessage('center')
    }, 200);
});

center.addEventListener('mouseup', ()=> clearInterval(loop));

    
left.addEventListener('mousedown', ()=>{
    loop = setInterval(()=>{
        sendMessage('left')
    }, 200);
});

left.addEventListener('mouseup', ()=> clearInterval(loop));

right.addEventListener('mousedown', ()=>{
    loop = setInterval(()=>{
        sendMessage('right')
    }, 200);
});

right.addEventListener('mouseup', ()=> clearInterval(loop));

function sendMessage(message){
    ipcRenderer.send('send-message', message);
}

reloadPorts();