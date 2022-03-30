import socketClient from "socket.io-client";


//SERVER
const herokuserver = "https://pacific-sierra-45747.herokuapp.com";
const SERVER = herokuserver;
   
   const configureSocket = () => {
        const _socket = socketClient(SERVER);
        _socket.on('channel', onSocketChannel);
        _socket.on('message', onSocketMessage);
        ThisComponentSocket = _socket;
    }


    const handleChannelSelect = id => {
        let channel = store.getState().channels.find(c => {
            return c.id === id;
        });

        // SET CHANNEL

        ThisComponentSocket.emit('channel-join', id, ack => {
        });      
    }


    const onSocketChannel = channel => {
        let channels = store.getState().channels;
        if (Array.isArray(channels)) {
            channels.forEach(c => {
                if (c.id === channel.id) {
                    c.participants = channel.participants;
                }
            });
            // SET ALL CHANNELs
        }
    };

    const onSocketMessage = message => {
        let channels = state.channels;
        if (Array.isArray(channels)) {
            channels.forEach(c => {
                if (c.id === message.channel_id) {
                    if (!c.messages) {
                        c.messages = [message];
                    } else {
                        c.messages.push(message);
                    }
                }
            });
            // SET ALL CHANNELs
        }
    };

    const handleSendMessage = (channel_id, text) => {
        refSocket.current.emit('send-message', { channel_id, text, senderName: username, id: Date.now() });
    }


    // APPEL AU BACK POUR CHANNELS:   
    fetch(`${SERVER}/getChannels`)
    .then(response => response.json())
    .then( async (responseJson) => {
        let data = responseJson;
            // SET ALL CHANNELs
    })
