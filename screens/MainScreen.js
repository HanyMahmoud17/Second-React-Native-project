import { TextInput ,View,StyleSheet} from "react-native";
// import {  } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function MainScreen(){
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )    

}

const styles = StyleSheet.create({
    inputContainer:{
        // flex: 1,
        marginTop:100,
        marginHorizontal:24,
        padding:16,
        backgroundColor:'#3b021f',
        borderRadius:8,
        // this for andriod boxShadow
        elevation:20,
        // this is for ios
        shadowColor:'balck',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        alignItems:'center',
        justifyContent:'center'
    },
    numberInput:{
        height:50,
        width:50,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        fontWeight:'bold',
        fontSize:32,
        color:'#ddb52f',
        textAlign:'center',
        marginVertical:8
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }

})

export default MainScreen;

