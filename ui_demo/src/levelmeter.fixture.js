import LevelMeter from './levelMeterComponent';

export default [
  {
    component: LevelMeter,
    name: 'Level Meter',
    props: {
      value: 3,
      max: 11,
    },
  },

  {
    component: LevelMeter,
    name: 'Level Half full',
    props: {
      value: 5,
      max: 10,
    },
  },

  {
    component: LevelMeter,
    name: 'Level  full',
    props: {
      value: 10,
      max: 10,
    },
  },
];
