import { createLevel } from './curriculum_helper';

export const BIOME2_LEVELS = [
  createLevel(11, "Modal Verbs", 
    {
      rule: "Modal verbs (Can, Should, Must) show ability, advice, or necessity.",
      example: "She can swim.",
      tip: "The main verb always stays in its base form.",
      visualType: 'formula',
      steps: [
        { label: 'Subject', icon: '👤', color: 'border-emerald-400' },
        { label: 'Modal', icon: '⭐', color: 'border-purple-400' },
        { label: 'Verb', icon: '⚡', color: 'border-amber-400' }
      ]
    }, 
    [
      "He can swim fast.", "You should drive carefully.", "She will come tomorrow.", 
      "We must leave now.", "Could you help me?", "I can hear the music.", 
      "He should eat more vegetables.", "You must wear a seatbelt.", "She might come later.", 
      "Would you like some tea?", "May I sit here?", "We could go for a walk.", 
      "They won't stay long.", "You must speak clearly.", "I cannot find my keys.",
      "She should study harder.", "We might see a movie.", "You can do it.",
      "He must be tired.", "They could be at home.", "I will call you soon.",
      "You shouldn't smoke.", "May I ask a question?", "She can play the piano.",
      "We must respect elders.", "It might rain today.", "You should take a break.",
      "Can you open the door?", "I would love to go.", "He will fix the car.",
      "They must pay the bill.", "We can solve this problem.", "You should listen to him.",
      "She might know the answer.", "I could run faster then.", "May I leave early?",
      "You must not touch that.", "He can speak three languages.", "We should clean the room.",
      "It may take some time.", "You could try again.", "I will help you.",
      "She must finish her work.", "They can win the game.", "We should arrive early.",
      "He might be sleeping.", "You must stop here.", "Can I borrow a pen?",
      "I would buy that car.", "She will learn quickly."
    ]
  ),
  
  createLevel(12, "Present Perfect", 
    {
      rule: "Use 'Have' or 'Has' + Past Participle for actions with no specific time.",
      example: "I have finished.",
      tip: "Use 'Has' for He, She, or It.",
      visualType: 'formula',
      steps: [
        { label: 'Subject', icon: '👤', color: 'border-emerald-400' },
        { label: 'Have/Has', icon: '➕', color: 'border-white/20' },
        { label: 'Participle', icon: '🏁', color: 'border-sky-400' }
      ]
    }, 
    [
      "I have finished my work.", "She has read the book.", "We have visited Paris many times.", 
      "He has already eaten breakfast.", "They have completed their homework.", "I have seen this movie before.", 
      "She has lived here for ten years.", "They have traveled to many countries.", "We have just finished lunch.", 
      "He has never been to Japan.", "Have you ever seen a whale?", "I have lost my wallet.", "The sun has set.",
      "I have visited London twice.", "She has bought a new car.", "We have cleaned the house.",
      "He has broken his leg.", "They have won the match.", "I have forgotten your name.",
      "She has written a letter.", "It has stopped raining.", "We have known him for years.",
      "He has lost his keys.", "They have sold their house.", "I have made a mistake.",
      "She has found a job.", "We have walked a long way.", "He has cut his finger.",
      "They have arrived safely.", "I have already paid.", "She has cooked dinner.",
      "The train has left.", "We have seen that bird.", "He has grown tall.",
      "They have built a wall.", "I have locked the door.", "She has chosen a dress.",
      "We have heard the news.", "He has fallen asleep.", "It has been a long day.",
      "I have kept my promise.", "She has met the President.", "They have changed their plans.",
      "We have run out of milk.", "He has caught a cold.", "I have understood the lesson.",
      "She has drawn a picture.", "They have moved to a new city.", "The flower has bloomed.",
      "I have washed my hands."
    ]
  ),
  
  createLevel(13, "Passive Voice", 
    {
      rule: "Focus on the thing receiving the action using 'Be' + Past Participle.",
      example: "The book was read.",
      tip: "The doer of the action often comes after the word 'by'.",
      visualType: 'flow',
      steps: [
        { label: 'Receiver', icon: '📦', color: 'border-sky-400' },
        { label: 'Be Verb', icon: '⚖️', color: 'border-white/20' },
        { label: 'Participle', icon: '✍️', color: 'border-amber-400' }
      ]
    }, 
    [
      "The letter was written by her.", "English is spoken here.", "This house was built in 1990.", 
      "The books are read by the students.", "The cake was baked by my mother.", "The window was broken by the wind.", 
      "This song was composed by Mozart.", "The plants are watered every day.", "A new school is being built.", 
      "The treasure was found in the cave.", "Mistakes were made.", "The letter has been sent.",
      "The car was washed by Dad.", "The game was won by our team.", "Dinner is served at six.",
      "The thief was caught by police.", "The room is cleaned daily.", "The story was told by him.",
      "The apple was eaten by the worm.", "My bike was stolen yesterday.", "The work was finished on time.",
      "The song is sung by everyone.", "The picture was painted by an artist.", "The rule was broken.",
      "The homework must be done.", "The message was delivered.", "The computer is used by me.",
      "The trees were planted last year.", "The question was answered.", "The building was destroyed.",
      "The money was saved.", "The problem was solved.", "The news was heard by all.",
      "The floor was swept.", "The clothes were washed.", "The email was sent.",
      "The bridge was closed.", "The food is cooked fresh.", "The tickets were sold out.",
      "The dog was fed.", "The baby was named John.", "The car was repaired.",
      "The lights were turned off.", "The secret was kept.", "The phone was answered.",
      "The invite was accepted.", "The walls were painted blue.", "The glass was filled.",
      "The boxes were moved.", "The solution was found."
    ]
  ),
  
  createLevel(14, "Conditionals", 
    {
      rule: "Conditional sentences use 'If' to show that one thing depends on another.",
      example: "If it rains, we stay.",
      tip: "Use a comma after the 'If' clause if it comes first.",
      visualType: 'flow',
      steps: [
        { label: 'Condition', icon: '❓', color: 'border-amber-400' },
        { label: 'Result', icon: '🎯', color: 'border-emerald-400' }
      ]
    }, 
    [
      "If it rains, we will stay home.", "If you work hard, you will succeed.", "If I were rich, I would travel.", 
      "If you eat too much, you will feel sick.", "If she studies, she will pass.", "If you freeze water, it becomes ice.", 
      "If I win the lottery, I will buy a house.", "If she calls, tell her I am busy.", "If you study hard, you get good grades.", 
      "If I were you, I would take the job.", "If he had more time, he would visit us.", "If you eat your vegetables, you can have dessert.",
      "If you touch fire, you get burned.", "If I wake up late, I miss the bus.", "If the sun sets, it gets dark.",
      "If you mix red and blue, you get purple.", "If he runs fast, he will win.", "If it snows, we will build a snowman.",
      "If you help me, I will help you.", "If the alarm rings, wake up.", "If she cooks, I wash the dishes.",
      "If you drop glass, it breaks.", "If he asks, tell the truth.", "If I have money, I will buy it.",
      "If you are tired, go to sleep.", "If the car breaks, we will walk.", "If you smile, I will smile.",
      "If it is hot, drink water.", "If you lose, try again.", "If she sings, everyone listens.",
      "If I knew the answer, I would tell you.", "If we leave now, we will be early.", "If the dog barks, let him in.",
      "If you plant seeds, they grow.", "If he apologizes, forgive him.", "If I see him, I will say hello.",
      "If you practice, you improve.", "If the wind blows, leaves fall.", "If you are hungry, eat an apple.",
      "If the light is red, stop.", "If you read, you learn.", "If he invites me, I will go.",
      "If it is cold, wear a jacket.", "If you press the button, it starts.", "If I find the key, I will open it.",
      "If you shout, they will hear.", "If the baby cries, feed him.", "If we run, we catch the train.",
      "If you wait, I will come."
    ]
  ),
  
  createLevel(15, "Relative Clauses", 
    {
      rule: "Use 'Who', 'Which', or 'That' to add information about a noun.",
      example: "The boy who won...",
      tip: "The relative word must follow the noun it describes.",
      visualType: 'formula',
      steps: [
        { label: 'Noun', icon: '👤', color: 'border-emerald-400' },
        { label: 'Relative', icon: '🔍', color: 'border-sky-400' },
        { label: 'Info', icon: '📜', color: 'border-white/20' }
      ]
    }, 
    [
      "The boy who won the prize is happy.", "The book which I bought is interesting.", "The man who lives here is a doctor.", 
      "The house where I was born is old.", "The girl whose sister is my friend is kind.", "The woman who lives next door is a teacher.", 
      "The car that I bought is used.", "This is the park where we met.", "The man whose car was stolen is at the police station.", 
      "I like the gift which you gave me.", "The pen that is on the table is mine.", "The dog which barked is gone.",
      "The teacher who helped me is nice.", "The city where I live is big.", "The movie that we watched was funny.",
      "The friend who called me is sick.", "The cake which she made is sweet.", "The boy whose bag is lost is crying.",
      "The road that leads to town is long.", "The place where we play is fun.", "The actor who played the hero is famous.",
      "The song that she sang is beautiful.", "The phone which I broke is expensive.", "The artist who painted this is talented.",
      "The team that won is celebrating.", "The garden where flowers grow is pretty.", "The lady whose hat blew away laughed.",
      "The computer that I use is fast.", "The shoes which I wear are comfortable.", "The student who studies hard passes.",
      "The village where he lives is quiet.", "The bird that flew away was blue.", "The key which opens the door is small.",
      "The doctor who treated him is young.", "The restaurant where we ate is new.", "The letter that arrived today is important.",
      "The cat whose tail is fluffy sleeps.", "The watch which I found is gold.", "The pilot who flew the plane is brave.",
      "The school where I learn is nearby.", "The game that we played was long.", "The answer which he gave was wrong.",
      "The nurse who helped us was kind.", "The library where we read is silent.", "The dress that she bought is red.",
      "The man whose dog ran away is sad.", "The map which shows the way is torn.", "The driver who drove the bus was fast.",
      "The river that flows here is deep.", "The job which I want is hard."
    ]
  ),
  
  createLevel(16, "Comparisons", 
    {
      rule: "Comparatives compare two things (-er). Superlatives compare three or more (-est).",
      example: "She is taller.",
      tip: "Use 'More' or 'Most' for longer words like 'beautiful'.",
      visualType: 'comparison',
      steps: [
        { label: 'Comparative (-er)', icon: '⚖️', color: 'border-amber-400' },
        { label: 'Superlative (-est)', icon: '🏆', color: 'border-yellow-400' }
      ]
    }, 
    [
      "He is taller than his brother.", "She is the fastest runner in the team.", "This book is more interesting than that one.", 
      "Mount Everest is the highest mountain in the world.", "Today is hotter than yesterday.", "Gold is more expensive than silver.", 
      "This is the best day of my life.", "She is the most intelligent person I know.", "The blue car is faster than the red one.", 
      "He is the tallest in his class.", "This task is easier than the last one.", "My bag is heavier than yours.",
      "She is older than me.", "This is the worst movie ever.", "Summer is warmer than winter.",
      "He is the strongest man alive.", "The cheetah is the fastest animal.", "My house is bigger than his.",
      "This flower is the most beautiful.", "Water is healthier than soda.", "The sun is brighter than the moon.",
      "He is more famous than her.", "This puzzle is the hardest.", "A plane is faster than a train.",
      "She is happier now.", "That was the funniest joke.", "Your room is cleaner than mine.",
      "This road is longer.", "He is the kindest boy.", "This box is smaller.",
      "The ocean is deeper than the sea.", "She is more careful than him.", "This is the most dangerous path.",
      "My dog is smarter than yours.", "He is the bravest soldier.", "Iron is harder than wood.",
      "This soup is tastier.", "She is the youngest in the family.", "Today is the coldest day.",
      "A lion is more powerful than a wolf.", "This chair is more comfortable.", "He ran slower than me.",
      "This tree is the oldest.", "Her hair is longer than mine.", "This game is more exciting.",
      "He is the richest man in town.", "A feather is lighter than a rock.", "This street is wider.",
      "She is the busiest person here.", "That star is the furthest away."
    ]
  ),
  
  createLevel(17, "Gerunds and Infinitives", 
    {
      rule: "Verbs can act as nouns with -ing (Gerund) or with 'To' (Infinitive).",
      example: "Swimming is fun.",
      tip: "Some verbs are always followed by 'To', others by '-ing'.",
      visualType: 'formula',
      steps: [
        { label: 'Main Verb', icon: '⚡', color: 'border-emerald-400' },
        { label: 'Gerund/Infinitive', icon: '📝', color: 'border-pink-400' }
      ]
    }, 
    [
      "He enjoys swimming.", "She wants to become a doctor.", "I love reading books.", 
      "They decided to go home.", "He keeps playing cricket.", "Smoking is bad for health.", 
      "I decided to stay at home.", "She finished writing the report.", "He offered to help us.", 
      "I enjoy listening to music.", "To travel is to live.", "Avoid making mistakes.",
      "He stopped working late.", "They hope to visit us.", "I hate waiting in line.",
      "She likes dancing.", "He forgot to call me.", "I promise to come.",
      "Walking is good exercise.", "He started to run.", "She suggests eating here.",
      "I need to sleep.", "He prefers walking to driving.", "They agreed to meet.",
      "I miss seeing my friends.", "He refused to speak.", "She began singing.",
      "Do you mind opening the window?", "I learned to swim.", "He practices playing guitar.",
      "She imagines flying.", "We plan to travel.", "He denied stealing the money.",
      "I chose to leave.", "She admitted lying.", "He seems to be tired.",
      "I enjoy cooking.", "She wants to learn French.", "He quit smoking.",
      "I tried to lift it.", "She dislikes waiting.", "He managed to escape.",
      "I recommend reading this.", "She hopes to win.", "He considers moving.",
      "To err is human.", "I failed to understand.", "She finished eating.",
      "He likes to paint.", "I remember seeing him."
    ]
  ),
  
  createLevel(18, "Reported Speech", 
    {
      rule: "Use reported speech to tell someone what another person said.",
      example: "She said she was happy.",
      tip: "We often change the tense to the past when reporting.",
      visualType: 'flow',
      steps: [
        { label: 'Reporting', icon: '🗣️', color: 'border-sky-400' },
        { label: 'Statement', icon: '🗨️', color: 'border-amber-400' }
      ]
    }, 
    [
      "She said that she was happy.", "He told me that he would come tomorrow.", "They said that they were playing football.", 
      "She told him that she loved music.", "He said that he had finished his work.", "He said that he was busy.", 
      "She told me that she had lost her way.", "They asked if I was coming.", "He said he would call me later.", 
      "She promised that she would be on time.", "He explained that he didn't know the answer.",
      "She said it was raining.", "He told us to wait here.", "They said they were hungry.",
      "She asked where I lived.", "He said he could swim.", "She told me she was tired.",
      "He said he had bought a car.", "They said they would help.", "She asked if I was ready.",
      "He told the truth.", "She said she liked the movie.", "He mentioned that he was leaving.",
      "They reported that the road was closed.", "She said she wanted water.", "He told me not to worry.",
      "She said she had seen him.", "He asked what time it was.", "They said they were lost.",
      "She told him to go away.", "He said he felt sick.", "She exclaimed that it was beautiful.",
      "He admitted that he was wrong.", "They said the game was over.", "She said she would try.",
      "He asked if I knew her.", "She told me to sit down.", "He said he was a doctor.",
      "They said they had eaten.", "She replied that she was fine.", "He said he lived in London.",
      "She asked why I was late.", "He told us to be quiet.", "They said it was easy.",
      "She said she forgot her keys.", "He said he needed money.", "She told me the store was open.",
      "He said he would fix it.", "They said they were friends."
    ]
  ),
  
  createLevel(19, "Complex Sentences", 
    {
      rule: "Combine ideas using words like 'Because', 'Although', or 'Since'.",
      example: "Since it rained, we...",
      tip: "Dependent ideas start with a conjunction and cannot stand alone.",
      visualType: 'formula',
      steps: [
        { label: 'Dependent', icon: '🔗', color: 'border-purple-400' },
        { label: 'Main Idea', icon: '🎯', color: 'border-emerald-400' }
      ]
    }, 
    [
      "Although he was tired, he continued working.", "She will pass if she studies hard.", "Please lock the door before you leave.", 
      "We stayed home because it rained.", "She played after she finished her homework.", "Since I was late, I missed the train.", 
      "Even though it was raining, he went for a run.", "Unless you hurry, we will be late.", "While I was cooking, the phone rang.", 
      "As soon as she arrived, the meeting started.", "He arrived while we were eating.", "I will wait until you come back.",
      "Because he was sick, he went to the doctor.", "Whenever I see him, he smiles.", "Although it is expensive, I will buy it.",
      "Since you are here, please help me.", "Unless it snows, we will go.", "While she slept, I read a book.",
      "After he left, I cleaned the room.", "Before you speak, think carefully.", "Because it was hot, we swam.",
      "Although she is young, she is wise.", "Once you finish, you can leave.", "If you are ready, let's go.",
      "Since he apologized, I forgave him.", "While the sun shines, make hay.", "Unless you try, you won't know.",
      "As I walked, I saw a dog.", "Because she ran fast, she won.", "Although he is rich, he is sad.",
      "Where there is smoke, there is fire.", "Before the sun sets, return home.", "Since we are friends, I will trust you.",
      "While he drove, he listened to music.", "As long as you try, it is okay.", "Even if I fail, I will learn.",
      "Because the car broke, we walked.", "Although I was hungry, I did not eat.", "When the bell rings, class ends.",
      "Until the rain stops, we wait.", "Since it is dark, turn on the light.", "While they played, I worked.",
      "Unless you pay, you cannot enter.", "Because I trust you, I will stay.", "Although it is far, we will walk.",
      "As soon as he saw me, he waved.", "After the movie ended, we left.", "Before I sleep, I pray.",
      "Since you asked, I will answer.", "Whenever it rains, I feel happy."
    ]
  ),
  
  createLevel(20, "Participial Phrases", 
    {
      rule: "Use '-ing' or '-ed' phrases to describe the subject of a sentence.",
      example: "Running fast, he...",
      tip: "The phrase describes the word that follows the comma.",
      visualType: 'flow',
      steps: [
        { label: 'Phrase', icon: '🎬', color: 'border-pink-400' },
        { label: 'Subject', icon: '👤', color: 'border-emerald-400' }
      ]
    }, 
    [
      "Running fast, he caught the bus.", "My brother, a doctor, lives in Delhi.", "Excited by the news, she jumped.", 
      "Never have I seen such beauty.", "Exhausted from work, he slept immediately.", "Looking out the window, I saw a bird.", 
      "Surprised by the noise, he woke up.", "Known for his kindness, he is well-loved.", "Built many years ago, the bridge is still strong.", 
      "Feeling tired, she decided to take a nap.", "Walking down the street, I met a friend.", "Scared by the dog, the cat ran.",
      "Smiling brightly, she greeted us.", "Confused by the map, he stopped.", "Eating quickly, he choked.",
      "Driven by ambition, he worked hard.", "Hearing the bell, the students left.", "Shocked by the price, I left the shop.",
      "Thinking deeply, he solved the puzzle.", "Written in ink, the letter was permanent.", "Playing in the rain, the kids got wet.",
      "Injured in the crash, he went to hospital.", "Singing loudly, she walked home.", "Lost in the city, we asked for help.",
      "Bored by the movie, he fell asleep.", "Covered in snow, the car looked white.", "Hoping for the best, we waited.",
      "Disappointed by the loss, they cried.", "Laughing at the joke, he fell off the chair.", "Seen from above, the city looked small.",
      "Driving fast, he arrived early.", "Broken by the fall, the vase lay there.", "Feeling hungry, I made a sandwich.",
      "Inspired by the book, she wrote a story.", "Waiting for the bus, I read.", "Hidden by the trees, the house was quiet.",
      "Knowing the answer, she raised her hand.", "Protected by the wall, the garden bloomed.", "Holding the baby, she smiled.",
      "Frightened by the storm, they hid.", "Wearing a red hat, he stood out.", "Painted recently, the room smelled fresh.",
      "Believing in himself, he succeeded.", "Baked perfectly, the bread was soft.", "Watching the stars, we felt small.",
      "Annoyed by the noise, he shouted.", "Carrying a heavy bag, she walked slowly.", "Amazed by the view, we stopped.",
      "Feeling sick, he went home.", "Finished with work, she relaxed."
    ]
  )
];