import { useState } from 'react';
import GoalList from './components/GoalList';
import './App.css';

function App() {
  const [undoneGoals, setUndoneGoals] = useState([]);
  const [doneGoals, setDoneGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim()) {
      setUndoneGoals([...undoneGoals, { id: Date.now(), text: newGoal, done: false }]);
      setNewGoal('');
    }
  };

  const markDone = (id) => {
    const goal = undoneGoals.find(g => g.id === id);
    setUndoneGoals(undoneGoals.filter(g => g.id !== id));
    setDoneGoals([...doneGoals, { ...goal, done: true }]);
  };

  const undoDone = (id) => {
    const goal = doneGoals.find(g => g.id === id);
    setDoneGoals(doneGoals.filter(g => g.id !== id));
    setUndoneGoals([...undoneGoals, { ...goal, done: false }]);
  };

  const deleteGoal = (id, isDone) => {
    if (isDone) {
      setDoneGoals(doneGoals.filter(g => g.id !== id));
    } else {
      setUndoneGoals(undoneGoals.filter(g => g.id !== id));
    }
  };

  return (
    <div className="App">
      <h1>Goal Manager</h1>
      <div className="input-section">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Enter a new goal"
        />
        <button onClick={addGoal}>Add</button>
      </div>
      <div className="lists">
        <div className="list-section">
          <h2>Undone Goals</h2>
          <GoalList goals={undoneGoals} onDone={markDone} onDelete={(id) => deleteGoal(id, false)} />
        </div>
        <div className="list-section">
          <h2>Goal done by me</h2>
          <GoalList goals={doneGoals} onUndo={undoDone} onDelete={(id) => deleteGoal(id, true)} />
        </div>
      </div>
    </div>
  );
}

export default App;
