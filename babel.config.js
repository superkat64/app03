module.exports = api => {
  const isTest = api.env('test');
  const returnObj = {};
  returnObj.presets = isTest
    ? [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript'
      ]
    : [];

  return returnObj;
};
