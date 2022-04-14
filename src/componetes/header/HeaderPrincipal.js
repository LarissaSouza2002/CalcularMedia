import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function HeaderPrincipal(){
    return (
      <LinearGradient style={styles.header} colors={["#ff8c00", "transparent"]}>
        <AntDesign style={styles.icon} name="calculator" />
        <Text style={styles.title}>Calculos</Text>
      </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header:{
        height:"15%",
        width:"100%",
        paddingTop:50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      },
      title:{
        textAlign: 'center',
        fontSize:30,
        fontWeight:'700',
        color:'black'
      },
      icon:{
        flex:1,
        fontSize:50,
        color:"black",
        textAlign:'center',
        marginBottom:0

        
      }
});
    