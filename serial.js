const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

let serialPort;

module.exports = {
    async checkPorts() {
        const ports = await SerialPort.list();
        const avaliablePorts = ports.filter((port)=>{
            if(port.productId != undefined){
                return port;
            }
        });
        return avaliablePorts;
    },

    createSerial(port_path, baudRate){
        if(serialPort){
            this.closeSerial();
        }
        serialPort = new SerialPort(port_path, {baudRate});
    },

    sendMessage(message){
        if(serialPort){
            serialPort.write(message);
        }
    },

    closeSerial(){
        serialPort.close();
        serialPort = null;
    }
    
}

