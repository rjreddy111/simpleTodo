import {View,TouchableOpacity,Text} from "react-native" 
import FontAwesome from "react-native-vector-icons/FontAwesome"

import styles from "../styles/todoItemStyles"


const TodoItem = (props)=> {

    const {deleteTodo,editTodoTask,eachTask} = props 

    const editTodoOPtion = ()=> (
        editTodoTask(eachTask.id,eachTask.title)
    )
    const deleteTodoTask = ()=> {
        deleteTodo(eachTask.id)
    }

    return (
        <View style={styles.eachTaskDisplay}>
            <Text >{eachTask.title}</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={editTodoOPtion} style={styles.editButtonAdjust}>
                    <Text><FontAwesome name = "pencil" color ="grey" size ={15}/></Text>
                </TouchableOpacity>
           
                <TouchableOpacity onPress={deleteTodoTask}>
                    <Text style = {styles.deleteButton} size={20}>X</Text>
                </TouchableOpacity>
            </View>
        </View> 


    )
}



export default TodoItem