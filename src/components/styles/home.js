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
        height:"50%",
        width:"100%",
        backgroundColor:"", borderRadius:15,
        padding:10,
        display:"flex", 
        flexDirection:"column", 
        justifyContent:"space-between",
        borderWidth:2, 
        borderColor:"#07b7f7",
      
    
        shadowColor: "#7e8c91",
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation:5,
    

    },
    heading: {
        fontSize:28,
        fontWeight:"bold",
        alignSelf:"center"
    },
    inputContainer: {
        height:40,
        outLineStyle:"none"
    },
    buttonStyle: {
        width:80,
        height:35,
        borderRadius:5,
        backgroundColor:"blue",
        display:"flex", 
        justifyContent:"center",
        alignItems:"center",
        borderColor:"none"
        
    },
    buttonTextColor: {
        color:"#ffffff"
    },
    flatListContainer : {
        width:"100%"
    }
})