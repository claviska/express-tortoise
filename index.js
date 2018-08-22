module.exports = options => {
  options = Object.assign({
    enabled: true,
    log: 'Response delayed to simulate production (%s ms)',
    min: 250,
    max: 750
  }, options);

  return (req, res, next) => {
    if (options.enabled) {
      const min = Math.min(options.min, options.max);
      const max = Math.max(options.min, options.max);
      const delay = Math.floor(Math.random() * (max - min + 1)) + min;
      const send = res.send;

      if (options.log) {
        console.log(options.log, delay);
      }

      res.send = function() {
        const args = arguments;
        setTimeout(() => send.apply(res, args), delay);
      };
    }

    next();
  };
};
