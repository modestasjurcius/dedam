import React, { useState } from 'react';
import './App.css';
import Layout from './components/Containers/Layout/Layout';
import Dedam from './components/Containers/Dedam/Dedam';
import Notification from 'react-notify-bootstrap';

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('main');

  return (
    <Layout
      onChangePage={page => setPage(page)}
      onChangeUser={user => setUser(user)}
      user={user}
    >
      <Dedam
        onChangePage={page => setPage(page)}
        onChangeUser={user => setUser(user)}
        page={page}
        user={user}
      />

      <Notification options={{ animation: true }} />
    </Layout>
  );
}

export default App;
