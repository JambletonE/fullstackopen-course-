import React from 'react';

const DeleteButton = ({ personId, onDelete }) => {
  const handleDelete = () => {
    onDelete(personId);
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;