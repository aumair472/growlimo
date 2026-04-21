import texasServices from './states/texas/index.js';
import californiaServices from './states/california/index.js';

const allServices = {
  ...texasServices,
  ...californiaServices
};

export default allServices;
