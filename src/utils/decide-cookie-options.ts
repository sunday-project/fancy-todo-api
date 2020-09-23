export default (optionName: 'httpOnly' | 'secure' | 'sameSite'): any => {
  const nodeEnv: string | any = process.env.NODE_ENV;

  switch (optionName) {
    case 'secure':
      return nodeEnv !== 'production' ? false : true;

    case 'sameSite':
      return nodeEnv !== 'production' ? 'lax' : 'none';

    default:
      return true;
  }
};
