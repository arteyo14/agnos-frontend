import PatientInfoView from '@/core/modules/patient/patient-info/ui/patient-info-view';

const PatientInfoPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <PatientInfoView id={id} />;
};

export default PatientInfoPage;
