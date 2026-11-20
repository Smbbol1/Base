import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/constants/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AlertProvider } from '@/template';

export default function RootLayout() {
  return (
    // ⚠️ PRESET: AlertProvider enables showAlert() - DO NOT REMOVE
    <AlertProvider>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.background } }}>
          <Stack.Screen name="index" />
          <Stack.Screen
            name="saludos"
            options={{
              headerShown: true,
              title: '',
              headerBackTitle: 'Volver',
              headerStyle: { backgroundColor: theme.colors.greeting },
              headerTintColor: theme.colors.text,
              headerShadowVisible: false,
              contentStyle: { backgroundColor: theme.colors.greeting },
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </AlertProvider>
  );
}