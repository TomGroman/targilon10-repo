import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name = "login" option= {{headerShown: false}} />
            <Stack.Screen name = "(tabs)" option= {{headerShown: false}} />
        </Stack>
    )
}