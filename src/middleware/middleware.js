const logCreateRequest = (req, res, next) => {
    next();
  };
  
  const logReadRequest = (req, res, next) => {
    console.log('Fetching all tasks');
    next();
  };
  
  const logFindRequest = (req, res, next) => {
    console.log(`Found Tasks with ID: ${req.params.id}`);
    next();
  }

  const logUpdateRequest = (req, res, next) => {
    next();
  };
  
  const logDeleteRequest = (req, res, next) => {
    next();
  };
  
  module.exports = {
    logCreateRequest,
    logReadRequest,
    logFindRequest,
    logUpdateRequest,
    logDeleteRequest,
  };