import generalServices from './general';
import healthcareServices from './healthcare';
import dentistServices from './dentist';

const texasServices = {
  ...generalServices,
  ...healthcareServices,
  ...dentistServices
};

export default texasServices;
