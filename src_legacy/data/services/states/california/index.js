import generalServices from './general';
import healthcareServices from './healthcare';
import dentistServices from './dentist';

const californiaServices = {
  ...generalServices,
  ...healthcareServices,
  ...dentistServices
};

export default californiaServices;
