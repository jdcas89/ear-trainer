import React, { useEffect, useState } from 'react';
import Choice from '../Choice';
import styled from 'styled-components';
import NotePlayer from '../NotePlayer';
import { getRandomNote, Note } from '../../utils/notes';
import media from 'styled-media-query';
import { keyHandler } from '../../utils/initializeKeyListeners';

const EarTrainer: React.FC<{ randomNote: Note }> = ({ randomNote }) => {
  const [currentNote, setCurrentNote] = useState(randomNote);

  const [referenceNote] = useState(getRandomNote());

  const [disabledNotes, setDisabledNotes] = useState<string[]>([]);

  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const [answer, setAnswer] = useState();

  useEffect(() => {
    window.addEventListener('keydown', prop =>
      keyHandler(prop, onChoiceClickedHandler),
    );
    return () => {
      window.removeEventListener('keydown', prop =>
        keyHandler(prop, onChoiceClickedHandler),
      );
    };
  }, [window]);

  const onChoiceClickedHandler = (note: string, sharp: boolean) => {
    setAnswer(note);
    if (note === currentNote.name.substring(0, sharp ? 2 : 1)) {
      setAnsweredCorrectly(true);
    } else {
      const newDisabledNotes =
        disabledNotes.length > 0 ? [...disabledNotes] : [];
      newDisabledNotes.push(note);
      setDisabledNotes(newDisabledNotes);
    }
  };

  const onClickNext = () => {
    setDisabledNotes([]);
    setAnsweredCorrectly(false);
    const newRandomNote = getRandomNote();
    setCurrentNote(newRandomNote);
  };

  return (
    <Card>
      <Heading>Pitch trainer</Heading>
      <Paragraph>
        Try to guess the note relative to the reference note
      </Paragraph>
      {!answeredCorrectly && (
        <>
          {referenceNote && (
            <NotePlayer
              note={referenceNote.name}
              audioFile={referenceNote.audioFile}
              label={`Reference: ${referenceNote.name}`}
            />
          )}
          {currentNote && (
            <NotePlayer
              note={currentNote.name}
              audioFile={currentNote.audioFile}
            />
          )}

          <ChoicesContainer>
            <Choice
              label="C"
              note="C"
              keyChar="A"
              disabledNotes={disabledNotes}
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="C# / Db"
              note="C#"
              keyChar="W"
              disabledNotes={disabledNotes}
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="D"
              keyChar="S"
              disabledNotes={disabledNotes}
              note="D"
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="D# / Eb"
              keyChar="E"
              disabledNotes={disabledNotes}
              note="D#"
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="E"
              keyChar="D"
              disabledNotes={disabledNotes}
              note="E"
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="F"
              keyChar="F"
              disabledNotes={disabledNotes}
              note="F"
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="F# / Gb"
              keyChar="T"
              disabledNotes={disabledNotes}
              note="F#"
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="G"
              keyChar="G"
              disabledNotes={disabledNotes}
              note="G"
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="G# / Ab"
              keyChar="Y"
              disabledNotes={disabledNotes}
              note="G#"
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="A"
              keyChar="H"
              disabledNotes={disabledNotes}
              note="A"
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="A# / Bb"
              keyChar="U"
              disabledNotes={disabledNotes}
              note="A#"
              onChoiceClicked={onChoiceClickedHandler}
            />
            <Choice
              label="B"
              keyChar="J"
              disabledNotes={disabledNotes}
              note="B"
              onChoiceClicked={onChoiceClickedHandler}
            />
          </ChoicesContainer>
        </>
      )}
      {answeredCorrectly && (
        <>
          <Paragraph>Good job! Your answer was {answer}.</Paragraph>
          <NextButton onClick={onClickNext}>Next</NextButton>
        </>
      )}
    </Card>
  );
};

const Card = styled.div`
  padding: 32px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const Heading = styled.p`
  font-size: 28px;
`;

const Paragraph = styled.p`
  font-size: 24px;
`;

const NextButton = styled.button`
  background-color: #2ecc71;
  min-width: 150px;
  border: none;
  color: white;
  font-size: 32px;
  padding: 4px;
  margin: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 4px;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  :focus {
    outline: none;
  }

  ${media.lessThan('medium')`
      min-width: 100px;
  `}
`;

const ChoicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: center;
  justify-content: center;

  ${media.lessThan('medium')`
     grid-template-columns: 1fr 1fr;
  `}
`;

export default EarTrainer;
