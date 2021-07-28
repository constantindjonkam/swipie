import colors from '../config/colors';

export default {
  bottom: {
    title: 'Save',
    style: {
      label: {
        borderColor: colors.green,
        color: colors.green,
        borderWidth: 1,
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 160,
      },
    },
  },
  left: {
    title: 'NOPE',
    style: {
      label: {
        borderColor: colors.red,
        color: colors.red,
        borderWidth: 1,
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30,
      },
    },
  },
  right: {
    title: 'LIKE',
    style: {
      label: {
        borderColor: colors.blue,
        color: colors.blue,
        borderWidth: 1,
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 30,
      },
    },
  },
  top: {
    title: 'SUPER LIKE',
    style: {
      label: {
        borderColor: colors.yellow,
        color: colors.yellow,
        borderWidth: 1,
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: -160,
      },
    },
  },
};
