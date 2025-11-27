'use client';

import { useEffect } from 'react';

interface IProps {
  id: string;
}

const PatientInfoView = ({ id }: IProps) => {
  useEffect(() => {
    console.log(id);
  }, [id]);

  return <div>Patient Info View Component</div>;
};

export default PatientInfoView;
