import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';

interface BaseScreenProps {
  message: string;
  tone?: 'home' | 'greeting';
  actionLabel?: string;
  onAction?: () => void;
}

export const BaseScreen = memo(function BaseScreen({
  message,
  tone = 'home',
  actionLabel,
  onAction,
}: BaseScreenProps) {
  return (
    <SafeAreaView
      style={[styles.screen, tone === 'greeting' ? styles.greetingScreen : null]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <View style={styles.content}>
        <Text style={styles.message}>{message}</Text>
        {actionLabel && onAction ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={actionLabel}
            onPress={onAction}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
          >
            <Text style={styles.buttonLabel}>{actionLabel}</Text>
          </Pressable>
        ) : null}
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  greetingScreen: {
    backgroundColor: theme.colors.greeting,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.screen,
    gap: theme.spacing.contentGap,
  },
  message: {
    color: theme.colors.text,
    fontSize: theme.typography.title,
    lineHeight: theme.typography.titleLineHeight,
    fontWeight: '700',
    textAlign: 'center',
    includeFontPadding: false,
  },
  button: {
    minHeight: theme.controls.minHeight,
    paddingHorizontal: theme.spacing.buttonHorizontal,
    paddingVertical: theme.spacing.buttonVertical,
    borderRadius: theme.radius.button,
    backgroundColor: theme.colors.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: theme.controls.pressedOpacity,
    transform: [{ scale: theme.controls.pressedScale }],
  },
  buttonLabel: {
    color: theme.colors.buttonText,
    fontSize: theme.typography.body,
    lineHeight: theme.typography.lineHeight,
    fontWeight: '600',
    includeFontPadding: false,
  },
});
