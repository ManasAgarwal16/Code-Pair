import React, { useState } from 'react';
import Client from '../components/Client';
const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: 'Manas Agarwal' },
    { socketId: 2, username: 'Anant Agarwal' },
  ]);
  return (
    <div className='mainWrap'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'>
            <img className='logoImage' src='/code-sync.png' alt='logo' />
          </div>
          <h3>Connected</h3>
          <div className='clientsList'>
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
      </div>
      <div className='editorWrap'>editor here.....</div>
    </div>
  );
};

export default EditorPage;
