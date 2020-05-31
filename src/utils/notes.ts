const c2Note = require('../assets/audio/C2_note.mp3');
const cs2Note = require('../assets/audio/C#2_note.mp3');
const d2Note = require('../assets/audio/D2_note.mp3');
const ds2Note = require('../assets/audio/D#2_note.mp3');
const e2Note = require('../assets/audio/E2_note.mp3');
const f2Note = require('../assets/audio/F2_note.mp3');
const fs2Note = require('../assets/audio/F#2_note.mp3');
const g2Note = require('../assets/audio/G2_note.mp3');
const gs2Note = require('../assets/audio/G#2_note.mp3');
const a2Note = require('../assets/audio/A2_note.mp3');
const as2Note = require('../assets/audio/A#2_note.mp3');
const b2Note = require('../assets/audio/B2_note.mp3');

const c3Note = require('../assets/audio/C3_note.mp3');
const cs3Note = require('../assets/audio/C#3_note.mp3');
const d3Note = require('../assets/audio/D3_note.mp3');
const ds3Note = require('../assets/audio/D#3_note.mp3');

const e3Note = require('../assets/audio/E3_note.mp3');
const f3Note = require('../assets/audio/F3_note.mp3');
const fs3Note = require('../assets/audio/F#3_note.mp3');

const g3Note = require('../assets/audio/G3_note.mp3');
const gs3Note = require('../assets/audio/G#3_note.mp3');

const a3Note = require('../assets/audio/A3_note.mp3');
const as3Note = require('../assets/audio/A#3_note.mp3');

const b3Note = require('../assets/audio/B3_note.mp3');

const c4Note = require('../assets/audio/C4_note.mp3');
const cs4Note = require('../assets/audio/C#4_note.mp3');

const d4Note = require('../assets/audio/D4_note.mp3');
const ds4Note = require('../assets/audio/D#4_note.mp3');

const e4Note = require('../assets/audio/E4_note.mp3');
const f4Note = require('../assets/audio/F4_note.mp3');
const fs4Note = require('../assets/audio/F#4_note.mp3');

const g4Note = require('../assets/audio/G4_note.mp3');
const gs4Note = require('../assets/audio/G#4_note.mp3');

const a4Note = require('../assets/audio/A4_note.mp3');
const as4Note = require('../assets/audio/A#4_note.mp3');

const b4Note = require('../assets/audio/B4_note.mp3');

export interface Note {
  name: string;
  audioFile: string;
}

const notes: Note[] = [
  { name: 'C2', audioFile: c2Note },
  { name: 'C#2', audioFile: cs2Note },
  { name: 'D2', audioFile: d2Note },
  { name: 'D#2', audioFile: ds2Note },
  { name: 'E2', audioFile: e2Note },
  { name: 'F2', audioFile: f2Note },
  { name: 'F#2', audioFile: fs2Note },
  { name: 'G2', audioFile: g2Note },
  { name: 'G#2', audioFile: gs2Note },
  { name: 'A2', audioFile: a2Note },
  { name: 'A#2', audioFile: as2Note },
  { name: 'B2', audioFile: b2Note },

  { name: 'C3', audioFile: c3Note },
  { name: 'C#3', audioFile: cs3Note },
  { name: 'D3', audioFile: d3Note },
  { name: 'D#3', audioFile: ds3Note },
  { name: 'E3', audioFile: e3Note },
  { name: 'F3', audioFile: f3Note },
  { name: 'F#3', audioFile: fs3Note },
  { name: 'G3', audioFile: g3Note },
  { name: 'G#3', audioFile: gs3Note },
  { name: 'A3', audioFile: a3Note },
  { name: 'A#3', audioFile: as3Note },
  { name: 'B3', audioFile: b3Note },

  { name: 'C4', audioFile: c4Note },
  { name: 'C#4', audioFile: cs4Note },
  { name: 'D4', audioFile: d4Note },
  { name: 'D#4', audioFile: ds4Note },
  { name: 'E4', audioFile: e4Note },
  { name: 'F4', audioFile: f4Note },
  { name: 'F#4', audioFile: fs4Note },
  { name: 'G4', audioFile: g4Note },
  { name: 'G#4', audioFile: gs4Note },
  { name: 'A4', audioFile: a4Note },
  { name: 'A#4', audioFile: as4Note },
  { name: 'B4', audioFile: b4Note },
];

export const getRandomNote = () => {
  return notes[Math.floor(Math.random() * notes.length)];
};
