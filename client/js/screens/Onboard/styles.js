import { StyleSheet } from 'react-native';
import {
  container,
  center,
  margin,
  colors,
  contain,
  body2
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, backgroundColor: colors.black },
  imgBgWrapper: { position: 'absolute' },
  imgBg: { ...center },
  onboardWrapper: {
    ...container,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    marginVertical: margin.xl * 5
  },
  logoWrapper: { ...center },
  imgLogo: { ...contain },
  welcomeWrapper: { ...center },
  welcome: { ...body2, color: colors.white }
});

export default styles;
