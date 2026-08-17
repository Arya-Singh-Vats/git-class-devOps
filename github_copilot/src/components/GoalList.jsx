import React from 'react';
import GoalItem from './GoalItem';

const GoalList = ({ goals, onDone, onUndo, onDelete }) => {
  return (
    <ul>
      {goals.map(goal => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onDone={onDone}
          onUndo={onUndo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default GoalList;