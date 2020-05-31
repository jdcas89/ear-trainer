import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface NotePlayerProps {
  audioFile: any;
  note: string;
  label?: string;
}
const NotePlayer: React.FC<NotePlayerProps> = ({ audioFile, note, label }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const downHandler = (prop: any) => {
    if (prop.code === 'Space') {
      playAudio();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    // window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      // window.removeEventListener('keyup', upHandler);
    };
  }, [window]);

  const playAudio = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();

      var playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Automatic playback started!
            // Show playing UI.
            // console.log('audio played auto');
            // audioRef.current.pause();
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            console.log('playback prevented');
          });
      }
    }
  };

  return (
    <NoteContainer onClick={playAudio}>
      <p>{label ? label : 'Play note'}</p>
      <audio ref={audioRef} id={note}>
        <source src={audioFile} />
      </audio>
      {!label && <span>Space bar</span>}
    </NoteContainer>
  );
};

export const extraKeyStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    padding: 0;
  }
  span {
    font-size: 16px;
  }
`;

const NoteContainer = styled.button`
  ${extraKeyStyles};
  cursor: pointer;
  background-color: #9b59b6;
  width: 280px;
  border: none;
  color: white;
  font-size: 32px;
  padding: 4px;
  margin: 8px auto;
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
     width: 200px;
  `}
`;

export default NotePlayer;
