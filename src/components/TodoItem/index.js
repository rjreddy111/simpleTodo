import {View,TouchableOpacity,Text} from "react-native" 

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
                <TouchableOpacity onPress={editTodoOPtion}>
                    <Text>Edit</Text>
                </TouchableOpacity>
           
                <TouchableOpacity onPress={deleteTodoTask}>
                    <Text style = {styles.deleteButton}>X</Text>
                </TouchableOpacity>
            </View>
        </View> 


    )
}



export default TodoItem