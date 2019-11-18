module.exports = function combineFileConfig(type) {
  let files = {
    binEntry: require(`./files/${type}/bin_entry`),
    configHandleErrs: require(`./files/${type}/config_handleErrs`),
    configMiddlewares: require(`./files/${type}/config_middlewares`),

  };


};
