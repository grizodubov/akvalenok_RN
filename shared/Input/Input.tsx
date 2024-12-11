import {StyleSheet, TextInput, TextInputProps} from "react-native";

export function Input(props: TextInputProps) {
    return <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}
        {...props}/>;
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'lightblue',
        height: 50,
        borderColor: 'lightgray',
        paddingHorizontal: 16,
        borderRadius: 4,
        borderWidth: 1,
        fontSize: 16,
    },
});