import React from 'react';

const GoalItem = ({ goal, onDone, onUndo, onDelete }) => {
  const isDone = goal.done;
  return (
    <li className={isDone ? 'done' : ''}>
      <span>{goal.text}</span>
      {!isDone && onDone && <button onClick={() => onDone(goal.id)}>Done</button>}
      {isDone && onUndo && <button onClick={() => onUndo(goal.id)}>Undo</button>}
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </li>
  );
};

export default GoalItem;