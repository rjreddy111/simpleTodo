import { StyleSheet } from "react-native";


export default StyleSheet.create({
    buttonsContainer: {
       
        flexDirection:"row",
        width:"20%",
        justifyContent:"space-between"
    },
    deleteButton :{
        color:"red"
    },
    eachTaskDisplay: {
         display:"flex",flexDirection: "row" ,justifyContent: "space-between", padding: 10,
         borderBottomColor:"grey",
         borderBottomWidth:2
    }
})