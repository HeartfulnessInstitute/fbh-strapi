import { mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, {
    server: {
      host: '0.0.0.0',
      allowedHosts: [
        'fbh-alb-1810952166.ap-south-1.elb.amazonaws.com',
        '13.233.196.187',
        'localhost',
      ],
    },
  });
};
