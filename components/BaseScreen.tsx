import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';

interface BaseScreenProps {
  message: string;
}

export const BaseScreen = memo(function BaseScreen({ message }: BaseScreenProps) {
  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom', 'left', 'right']}>
      <View style={styles.content}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.screen,
  },
  message: {
    color: theme.colors.text,
    fontSize: theme.typography.body,
    lineHeight: theme.typography.lineHeight,
    fontWeight: '400',
    textAlign: 'center',
    includeFontPadding: false,
  },
});
