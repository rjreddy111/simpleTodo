import { StyleSheet } from "react-native";


export default StyleSheet.create({
    mainContainer: {
        
        display:"flex", 
        flexDirection:"column",
       
      
       
        height:"50vh", 
        alignItems:"center",
        width:"90%"

    },
    todoContainer:{
        height:200,
        width:"100%",
        borderRadius:15,
        padding:15,
        display:"flex", 
        flexDirection:"column", 
        justifyContent:"space-between",
        borderWidth:2, 
        borderColor:"#07b7f7",
        backgroundColor:"#ffffff",
      
    
        shadowColor: "red",
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation:5,
    

    },
    heading: {
        fontSize:28,
        fontWeight:"bold",
        alignSelf:"center",
        color:"red"
    },
    inputContainer: {
        height:40,
        outLineStyle:"none"
    },
    buttonStyle: {
        width:90,
        height:35,
        borderRadius:5,
        backgroundColor:"blue",
        display:"flex", 
        justifyContent:"center",
        alignItems:"center",
        borderColor:"none",
        padding:5

        
    },
    buttonTextColor: {
        color:"#ffffff"
    },
    flatListContainer : {
        width:"100%"
    }
})