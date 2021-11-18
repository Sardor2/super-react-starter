const isIOS = () => {
  const { platform } = window.navigator;
  const iosPlatforms = [
    'iPhone',
    'iPad',
    'iPod',
    'Macintosh',
    'MacIntel',
    'MacPPC',
    'Mac68K',
  ];
  let isIos = false;
  if (iosPlatforms.indexOf(platform) !== -1) {
    isIos = true;
  }

  return isIos;
};

export default isIOS;
