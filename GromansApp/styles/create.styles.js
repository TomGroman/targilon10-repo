import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from './Theme';

// Note: It is 'export const', NOT 'export default'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.xl,
    gap: 10,
    backgroundColor: COLORS.background
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    borderRadius: SPACING.md
  }
});