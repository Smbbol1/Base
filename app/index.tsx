import { useCallback } from 'react';
import { useRouter } from 'expo-router';
import { BaseScreen } from '@/components/BaseScreen';

export default function IndexScreen() {
  const router = useRouter();
  const openGreetings = useCallback(() => {
    router.push('/saludos');
  }, [router]);

  return <BaseScreen message="Hola" actionLabel="Ver saludos" onAction={openGreetings} />;
}
