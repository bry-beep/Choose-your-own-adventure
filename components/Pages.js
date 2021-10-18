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
    situation: 'You tuck $5 under the box and use the pen to log the sale.\nYou hear a howl - probably the wind.',
    pageId: 'D',
    url: require('../assets/D.png'),
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'Maybe... ...yeah, maybe.',
    pageId: 'E',
    url: require('../assets/E.png'),
    isWinner: false,
    isLoser: false
  },
  // {
  //   situation: 'SPOOKTACULAR! You got your pumpkin! Want to get some more?',
  //   pageId: 'F',
  //   isWinner: false,
  //   isLoser: false
  // },
  {
    situation: 'As you run away, screaming, a black cat crosses your path. You make it home safely but are super, ultra unlucky for the next 7 years.',
    pageId: 'G',
    url: require('../assets/G.png'),
    isWinner: false,
    isLoser: true
  },
  { // - $10
    situation: 'You log your pumpkin sale. You look up and there\'s a strange woman with a black, pointy hat staring at you excitedly. You contain your startled gasp. "Thank you for your purchase," she cackles. "Would you like a free treat?"',
    pageId: 'H',
    url: require('../assets/H.png'),
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'You let out a pretty decent howl - you\'re cool, you feel cool. A quiet moment passes. *leaves crunch* In your peripheral, you catch the moonlight reflecting off a set of wide, hungry eyes - whoops, you just called a warewolf!',
    pageId: 'I',
    url: require('../assets/I.png'),
    isWinner: false,
    isLoser: true
  },
  {
    situation: 'The green-faced woman grins while holding out both of her hands - one has a small red apple. The other has about 6 blueberries. "You may choose one, free!"',
    pageId: 'J',
    url: require('../assets/J.png'),
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'You wake up at your desk as a software engineer. You drooled a bit on your whiteboarding notebook. It\'s nearly 1pm! You rush to your meeting where your manager shares that your team is going to the pumpkin patch for a company paid team-bonding day this Saturday!',
    pageId: 'K',
    url: require('../assets/K.png'),
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'You blink and notice the tens of ghosts dancing over the pumpkin patch, some skeletons are laughing over apple cider to your right. You look up at the farm sign and read “Halloween City, you can head out any time you like, but you can never leave”. Halloween forever!',
    pageId: 'L',
    url: require('../assets/L.png'),
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'As you turn to leave. The witch mumbles something - you turn back to her. "Sorry, what?" She points at you and yells "ABACADABRA!" and suddenly you feel like your skin is uncomfortably tight. You look at your arms - oh man, you\'re a mummy now!',
    pageId: 'M',
    url: require('../assets/M.png'),
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'You say "AHHHH"...you\'re a mummy, you can\'t say anything besides "AH". The witch rides off on her broomstick and you are left to figure out your life as a mummy now. Good luck!',
    pageId: 'N',
    url: require('../assets/N.png'),
    isWinner: false,
    isLoser: false
  },
  { //show extra reward
    situation: 'Good thing you bought that knife! You pull it out, hand shaking. The tiny blade catches the moonlight and manages to accidentally blind the warewolf who then runs off. Nice work! You run to the car and make it home safely with your pumpkin. Go to another pumpkin patch near you?',
    pageId: 'O',
    isWinner: false,
    isLoser: false
  },
  {
    situation: 'You get eaten by the warewolf. No pumpkin for you.',
    pageId: 'P',
    url: require('../assets/P.png'),
    isWinner: false,
    isLoser: true
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
    pageId: 'Y',
    url: require('../assets/Y.png'),
    isWinner: false,
    isLoser: true
  },
  {
    situation: '*squish* *squish* You poke it and feel fine, except for the flesh-eating bacteria.',
    pageId: 'W',
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

  { text: 'Scary! Run back to the car without your perfect pumpkin.', optionId: 'D1', step: 'G' },
  { text: 'It\'s just the wind. Put $10 under the box to pay for your pumpkin so you can go home.', optionId: 'D2', step: 'H'},
  { text: 'Howl out loud - it\'s fun!', optionId: 'D3', step: 'I' },

  { text: 'Poke the "fake" arm.', optionId: 'E1', step: 'W' },
  { text: 'Definitely fake - it\s obviously a Halloween decoration. Forget about it.', optionId: 'E2', step: 'C' },

  { text: 'Free? Heck yeah!', optionId: 'H1', step: 'J' },
  // { text: 'Ask her what the treat is.', optionId: 'H2', step: '' },
  { text: 'Uh, she is a witch ?? Haven\'t you seen Snow White? Decline.', optionId: 'H3', step: 'M' },

  { text: 'Take the red apple.', optionId: 'J1', step: 'K' },
  { text: 'Take the blue berries.', optionId: 'J2', step: 'L' },

  { text: 'What!? A mummy?? Demand that she undoes this magic curse!', optionId: 'M1', step: 'N' },
  { text: 'Get some answers - ask her what and why.', optionId: 'M2', step: 'N' },

  { text: 'Pull out your pumpkin carving knife you bought to defend yourself!', optionId: 'I1', step: 'O' },
  { text: 'Accept your fate.', optionId: 'I2', step: 'P' },
]
