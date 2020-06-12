import React from 'react';
import './App.css';
import Done from './components/Done';
import Task from './components/Task';
// <
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      todo: ['make dinner', 'go to bed on time'],
      done: ['program', 'drink coffee']
    }
  }

  handleChange = (e) => {
    this.setState({inputVal: e.target.value})
  }

  handleClick = () => {
    const newTask = this.state.inputVal;
    this.setState({
      todo: [...this.state.todo, newTask]
    }, () => console.log(this.state.todo))
  }

  removeTask(indexToRemove) {
    const filteredTasks = [...this.state.todo].filter((task, i) => i !== indexToRemove);
    this.setState({
      todo: filteredTasks
    })
  }

  removeDone(indexToRemove) {
    const filteredDones = [...this.state.done].filter((task, i) => i !== indexToRemove)
    this.setState({
      done: filteredDones
    })
  }

  done(indexToRemove) {
    const done = this.state.todo[indexToRemove];
    const filteredTasks = [...this.state.todo].filter((task, i) => i !== indexToRemove);
    this.setState({
      todo: filteredTasks,
      done: [...this.state.done, done]
    }, () => console.log(done))
  }

  notDone(indexToRemove) {
    const filteredDones = [...this.state.done].filter((task, i) => i !== indexToRemove)
    this.setState({
      todo: [...this.state.todo, this.state.done[indexToRemove]],
      done: filteredDones
    })
  }

  render() {
    const tasks = this.state.todo.map((task, i) => {
      return <Task description={task} done={this.done.bind(this, i)} remove={this.removeTask.bind(this, i)} key={i} />
    })
    const dones = this.state.done.map((task, i) => {
      return <Done description={task} notDone={this.notDone.bind(this, i)} remove={this.removeDone.bind(this, i)} key={i}/>
    })
    return (
      <div className="App">
        <header className="App-header">
          Todo Application
        </header>
        <input onChange={this.handleChange} value={this.state.inputVal} />
        <button onClick={this.handleClick}>Add</button>
        <div style={{display: 'flex', justifyContent: 'space-around', width: '100vw'}}>
          <div style={{backgroundColor: 'lightgrey', borderRadius: '5px'}}>
            <b><u>Todos</u></b>
            {tasks.slice()}
          </div>
          <div style={{backgroundColor: 'lightgrey', borderRadius: '5px'}}>
            <b><u>Done</u></b>
            {dones.slice()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
