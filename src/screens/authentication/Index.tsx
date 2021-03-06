import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Text, VStack } from 'native-base';
import React from 'react';
import { Logo } from '~/components';
import { AuthenticationStackParamList } from '~/navigation';

export function Index({
  navigation,
}: NativeStackScreenProps<AuthenticationStackParamList, 'authentication.index'>) {
  return (
    <Box justifyContent="center" p={4} flex={1}>
      <VStack space={8}>
        <Logo />
        <VStack space={4}>
          <Button
            rounded={32}
            h={12}
            w="100%"
            onPress={() => navigation.navigate('authentication.register')}
          >
            Cadastro
          </Button>
          <Text textAlign="center" color="gray.500">
            Já tem uma conta?
          </Text>
          <Button
            rounded={32}
            h={12}
            w="100%"
            onPress={() => navigation.navigate('authentication.login')}
          >
            Login
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
