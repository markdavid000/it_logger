import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const Logs = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);

    const res = await fetch('/techs');
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4 className='center' style={{ color: '#1f2a48' }}>
          Technician List
        </h4>
        <ul className='collection'></ul>
        {!loading && techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
      </div>
    </div>
  );
};

export default Logs;
