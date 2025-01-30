import { Component } from "react";
import {View,Text, TextInput, Button, FlatList, TouchableOpacity} from "react-native"
import {v4 as uuidv4} from "uuid";

import TodoItem from "../TodoItem";
import styles from "../styles/home"



class Home extends Component {
    state = {
        tasks:[], 
        inputTask:"",
        editId:null
    }

    onChangeInput = (text)=> {
        this.setState({inputTask:String(text)})
    }

    handleTaskAdd = (task)=> {
        this.setState((prevState)=> ({
            tasks:[...prevState.tasks,task]
        }))
    };

    handleOrUpdateTask=()=> {
        const{inputTask,editId,tasks} = this.state 
        const trimmedInputText = inputTask.trim()
        if (trimmedInputText ==="") return 
        if (editId !==null) {
            const updatetask = tasks.map((eachtask)=> eachtask.id===editId ? {...eachtask,title:trimmedInputText}: eachtask)
            this.setState({tasks:updatetask, editId:null,inputTask:""})
        } 
        else {
            const newTask = {id : uuidv4(), title :trimmedInputText}; 
            this.setState((prevState)=> ({
                tasks:[...prevState.tasks,newTask], 
                inputTask:""
            }))
        }
    }
    deleteTodo= (id)=> {
        const updatedTasks = this.state.tasks.filter((task)=>task.id !==id)
        this.setState({tasks:updatedTasks})
    }

    editTodoTaskDetails = (id,title)=> {

        this.setState({editId:id, inputTask:title})

    }

    render(){

        const {tasks,inputTask} = this.state 
        console.log(tasks)

        return (
            <View style = {styles.mainContainer}> 
            <View style = {styles.todoContainer}>
                <Text style={styles.heading}>Todo App</Text> 
                <TextInput value = {inputTask} placeholder="Enter a task" onChangeText={this.onChangeInput} style={styles.inputContainer} /> 
                <TouchableOpacity style={styles.buttonStyle}  onPress={this.handleOrUpdateTask}><Text style ={styles.buttonTextColor}>{this.state.editId ? "Update Task" : "Add Task"}</Text></TouchableOpacity> 
            </View>
                <FlatList style={styles.flatListContainer}
                    data={tasks} 
                    keyExtractor = {(item)=> item.id} 
                    renderItem = {({item})=> (
                        <TodoItem eachTask = {item} editTodoTask={this.editTodoTaskDetails} deleteTodo = {this.deleteTodo} />
                    )}
                />
            </View>

        )
    }
}


export default Home