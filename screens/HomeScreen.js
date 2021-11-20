import React,{useState} from "react";
import { FlatList, View,Text ,StyleSheet, SafeAreaView } from "react-native";
import {TextInput, Button, Chip} from 'react-native-paper';

function HomeScreen(){
    const [currentNumber,setCurrenNumber] = useState();
    const [startGame,setStartGame] = useState(false);
    const [mensage,setMensage] = useState('');
    const [logsTentatives,setLogsTentatives] = useState([]);
    const [increment_static,setIncrement_static] = useState(0)

    return(
        <View style={styles.container}>
            <Text style={styles.textH1}>Escolha entre 0 e 10 : </Text>
            <View style={styles.inputs}>
                <TextInput
                    style={styles.textInput}
                    value={currentNumber}
                    onChangeText={(text)=>{setCurrenNumber(text)}}
                    mode="flat"
                    label="Digite seu número da sorte"
                    keyboardType='numeric'
                />
                <Button
                    style ={styles.btInput}
                    mode='contained'
                    onPress={sortedNumber}
                >
                    Tente a sorte
                </Button>
            </View>
            {/* resultados das ações */}
            <View style={styles.resultData}>
                {startGame
                ?  
                <Text style={styles.messageResult}>{mensage}</Text>
                : <></>
                }
                <View style={{flex: 1,flexGrow:1}}>
                    <FlatList
                    style={{marginTop:20}}
                    data={logsTentatives}
                    renderItem ={({item})=>(
                        <Chip style={styles.listContent}>
                            <Text style={styles.listItem}>{`${item.value} : ${item.mensage} `}</Text>
                        </Chip>
                    )}
                    />
                </View>
            </View>
        </View>
    )

    function sortedNumber(){
        const sortedNumber = getRandomInt(0,10)
        setIncrement_static(increment_static+1)
        if(sortedNumber == currentNumber){
            setMensage("Você acertou desta vez 🎉 🥳")
            setLogsTentatives(()=>[{value:currentNumber,mensage:'você acertou! : ✅',key:increment_static},...logsTentatives])
        }else{
            setMensage("Você errou, mas sempre pode tentar novamente 😔")
            setLogsTentatives(()=>[{value:currentNumber,mensage:'você Errou! : ❌',key:increment_static},...logsTentatives])
        }

        console.log(logsTentatives)
        setStartGame(true)
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        marginTop:100,
    },
    textH1:{
        fontSize:23,
        fontWeight:"800",
        marginLeft:20,
        marginBottom:20,
        color:'#B255F2'
    },
    inputs:{
        flexDirection:'row',
        flexGrow:1,
        alignItems: 'flex-start',
        justifyContent:'space-between'
    },
    textInput:{
        width:200,
        fontSize:14,
        marginLeft:10
    },
    btInput:{
        marginTop:12,
        width:150,
        height:40,
        marginRight:10
    },
    resultData:{
        display:'flex',
        alignSelf:'flex-start',
        marginTop:30,
        marginLeft:30,
    },
    messageResult:{
        fontSize:25,
        color:'#B255F2',
    },
    listItem:{
        marginLeft:50,
        fontSize:21,
        
    },

    listContent:{
        backgroundColor:'#B255F2',
        marginTop:10,
        alignItems:'center'
    }

}) 

export default HomeScreen;


