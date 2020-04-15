import React, { useState, useEffect } from 'react';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };
  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <ul classNAme='collection-with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className='center'>Logs unavailable...</p>
        ) : (
          logs.map((log) => <li>{log.message}</li>)
        )}
      </ul>
    </div>
  );
};

export default Logs;
