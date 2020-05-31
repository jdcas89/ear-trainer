export const keyHandler = (
  prop: any,
  callbackFn: (note: string, sharp: boolean) => void,
) => {
  switch (prop.key) {
    case 'a': {
      callbackFn('C', false);
      break;
    }
    case 'w': {
      callbackFn('C#', true);
      break;
    }
    case 's': {
      callbackFn('D', false);
      break;
    }
    case 'e': {
      callbackFn('D#', true);
      break;
    }
    case 'd': {
      callbackFn('E', false);
      break;
    }
    case 'f': {
      callbackFn('F', false);
      break;
    }
    case 't': {
      callbackFn('F#', true);
      break;
    }
    case 'g': {
      callbackFn('G', false);
      break;
    }
    case 'y': {
      callbackFn('G#', true);
      break;
    }
    case 'h': {
      callbackFn('A', false);
      break;
    }
    case 'u': {
      callbackFn('A#', true);
      break;
    }
    case 'j': {
      callbackFn('B', false);
      break;
    }
  }
};
