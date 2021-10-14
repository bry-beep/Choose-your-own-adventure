export const Pages = [
  {
    situation: `It\'s ${new Date(Date.now()).toDateString()}. You just finished your Toy Problem and realize you ran out of pumpkins! You go to the local pumpkin patch. You find a nice pumpkin... but realize no one is around.`,
    pageId: 'A',
    url: require('../assets/A.png'), //must do this outside of main
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'No one answers, no one is around.',
    pageId: 'B',
    url: require('../assets/B.png'),
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'The sales stand is covered with worn, plaid fabric. You see a box of carving knives for sale, a pen, a "fake" severed arm, and a sales log book.',
    pageId: 'C',
    url: require('../assets/C.png'),
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'You tuck $5 under the box and use the pen to log the sale.',
    pageId: 'D',
    url: require('../assets/D.png'),
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'Maybe...',
    pageId: 'E',
    url: require('../assets/E.png'),
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'You speed-walk back to your car but trip and die.',
    pageId: 'Z',
    url: require('../assets/Z.png'),
    isWinner: false,
    isLoser: true
  },
  {
    situation: 'You yelled too much and caught the attention of a zombie and it ate your brains!',
    pageId: 'X',
    url: require('../assets/X.png'),
    isWinner: false,
    isLoser: true
  },
  {
    situation: 'A vampire caught you stealing and drained all your blood.',
    endId: 'Y',
    url: require('../assets/Y.png'),
    isWinner: false,
    isLoser: true
  },
  {
    situation: 'TBD',
    endId: 'V',
    url: '',
    isWinner: false,
    isLoser: true
  },
  {
    situation: '*squish* *squish* You poke it and feel fine, except for the flesh-eating bacteria.',
    endId: 'W',
    url: require('../assets/W.png'),
    isWinner: false,
    isLoser: true
  },
]

export const Options = [
  { text: 'Yell out for someone.', optionId: 'A1', step: 'B' },
  { text: 'Steal the pumpkin!', optionId: 'A2', step: 'Z' },
  { text: 'Check out the sales stand.', optionId: 'A3', step: 'C' },

  { text: 'Yell again.', optionId: 'B1', step: 'X' },
  { text: 'Yeah, just take the pumpkin.', optionId: 'B2', step: 'Z' },
  { text: 'Go check out that sales stand.', optionId: 'B3', step: 'C' },

  { text: 'Pay $5 for a pumpkin carving knife.', optionId: 'C1', step: 'D' },
  { text: 'Is the arm really fake?', optionId: 'C2', step: 'E' },
  { text: 'Steal the pen.', optionId: 'C3', step: 'Y' },

  { text: '', optionId: 'D1', step: ''},
  { text: '', optionId: 'D2', step: '' },

  { text: 'Poke the "fake" arm.', optionId: 'E1', step: 'W' },
  { text: '', optionId: 'E2', step: '' },

  // { text: 'Time to go. Leave.', optionId: 8 },
  // { text: 'Yell again.', optionId: 14 },
  // { text: 'Yell again.', optionId: 15 },
]

