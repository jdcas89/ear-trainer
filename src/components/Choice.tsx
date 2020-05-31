import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { extraKeyStyles } from './NotePlayer';

const Choice: React.FC<{
  note: string;
  keyChar: string;
  label: string;
  onChoiceClicked: (note: string, sharp: boolean) => void;
  disabledNotes: string[];
}> = ({ note, onChoiceClicked, disabledNotes, label, keyChar }) => {
  return (
    <ChoiceContainer
      disabled={!!disabledNotes.find(s => s === note)}
      onClick={() => onChoiceClicked(note, note.length > 1)}
    >
      {label}
      {keyChar && <span>{keyChar}</span>}
    </ChoiceContainer>
  );
};

const ChoiceContainer = styled.button`
  ${extraKeyStyles};
  background-color: #3498db;
  min-width: 150px;
  border: none;
  color: white;
  font-size: 32px;
  padding: 4px;
  margin: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 4px;
  cursor: pointer;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  :focus {
    outline: none;
  }
  &:disabled {
    background: red;
  }

  ${media.lessThan('medium')`
      min-width: 100px;
  `}
`;

export default Choice;
