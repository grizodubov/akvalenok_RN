import {Button, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Input } from '@/shared/Input/Input';

export default function Index() {
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/logo-akvalenok.png')}
                    resizeMode='contain'
                />
                <View style={styles.form}>
                    <Text style={styles.textStyle}>Аквалёнок</Text>
                    <Text style={styles.textStyle}>Войти</Text>
                    <Input placeholder='Введите номер телефона или Email'/>
                    <Button title="Войти" />
                    <Text>или войти через:</Text>
                    <View style={styles.socialButton}>
                        <Button title="Google" />
                        <Button title="Apple" />
                     </View>
                    <View style={styles.socialButton}>
                        <Button title="Вконтакте" />
                        <Button title="Сбер ID" />
                    </View>
                    <Text>Зарегистрироваться</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 55,
        backgroundColor: 'white',
    },
    content: {
        alignItems: 'center',
        gap: 50
    },
    form: {
        alignSelf: 'stretch',
        gap: 16
    },
    input: {
        backgroundColor: 'lightblue',
    },
    socialButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        alignSelf: 'stretch',
        width: 220,
    },
    textStyle: {color: '#2A4ECA', fontWeight: 'semibold', fontSize: 24},
});
