import { View, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/login.styles';
import AppButton from '../components/MainButton';
export default function Login() {
    const router = useRouter();
    return(
    <View style={styles.container}>
        <Text style={styles.logo}>Groman News</Text>
        <Text style={styles.subtitle}>Stay update to date with the latest foo</Text>
        <TextInput placeholder="Email address" style={styles.input} placeholderTextContext />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry placeholderTextContext />
        <AppButton
        title="Let's go!"
        onPress={() => router.replace('/(tabs)')}
        />
    </View>
    )
}