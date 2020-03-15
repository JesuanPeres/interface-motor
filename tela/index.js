const {ipcRenderer} = require('electron');

const reload = document.getElementById('reload');
const portsSelect = document.getElementById('ports-select');
const connect = document.getElementById('connect');
const led = document.getElementById('led');

const up = document.getElementById('up');
const down = document.getElementById('down');
const center = document.getElementById('center');
const left = document.getElementById('left');
const right = document.getElementById('right');


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

// led.addEventListener('click', (e)=>{
//     ipcRenderer.send('send-message', '1');
// });

function sendMessage(message){
    console.log(message);
    ipcRenderer.send('send-message', message);
}

reloadPorts();