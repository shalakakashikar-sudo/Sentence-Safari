import { createLevel } from './curriculum_helper';

export const BIOME3_LEVELS = [
  createLevel(21, "Phrasal Verbs", 
    {
      rule: "A phrasal verb is a verb combined with a preposition (like 'up' or 'off') to make a new meaning.",
      example: "He gave up smoking.",
      tip: "The verb and preposition act as a single unit.",
      visualType: 'formula',
      steps: [
        { label: 'Verb', icon: '🏃', color: 'border-emerald-400' },
        { label: 'Preposition', icon: '➕', color: 'border-sky-400' },
        { label: 'New Meaning', icon: '✨', color: 'border-amber-400' }
      ]
    }, 
    [
      "He gave up smoking.", "Please turn off the light.", "She looks after her younger brother.", 
      "Put on your coat.", "I woke up early today.", "Please look up the word in the dictionary.", 
      "We ran out of milk.", "He took off his shoes.", "She got along well with her neighbors.", 
      "Don't bring up that subject again.", "The plane took off on time.", "He broke down in tears.",
      "She will find out the truth.", "I will call you back.", "They checked in at the hotel.",
      "Please fill out this form.", "He gets up at six.", "She grew up in Paris.",
      "Hang on a minute.", "I look forward to meeting you.", "He passed away last night.",
      "She picked up the phone.", "We set off early.", "He showed up late.",
      "Sit down, please.", "Stand up straight.", "Take out the trash.",
      "He threw away the old papers.", "Try on this shirt.", "Turn down the volume.",
      "Turn up the music.", "Watch out for the car.", "He worked out at the gym.",
      "Write down your name.", "He backed up the car.", "She blew up the balloon.",
      "The meeting ended last week.", "Calm down and breathe.", "Check out this book.",
      "Clean up your room.", "Come in and sit.", "Count on me.",
      "He dropped off the package.", "We ended up at the park.", "Figure out the answer.",
      "Get in the car.", "Get out of here.", "Go on with your story.",
      "He held onto the railing.", "Keep up the good work."
    ]
  ),
  
  createLevel(22, "Noun Clauses", 
    {
      rule: "A noun clause is a whole group of words that acts like a single noun.",
      example: "What he said is true.",
      tip: "These clauses often start with 'That', 'What', or 'Where'.",
      visualType: 'formula',
      steps: [
        { label: 'Connector', icon: '🔗', color: 'border-sky-400' },
        { label: 'Subject', icon: '👤', color: 'border-emerald-400' },
        { label: 'Verb', icon: '⚡', color: 'border-amber-400' }
      ]
    }, 
    [
      "What he said is true.", "I know that she is honest.", "I wonder where he lives.", 
      "The question is what we should do.", "I believe that he will win.", "I don't know why she left.", 
      "What you need is a long holiday.", "I hope that you are well.", "How he did it is a mystery.", 
      "The truth is that I am tired.", "Whether he comes or not doesn't matter.",
      "I asked if she was okay.", "Do you know who he is?", "I forgot where I put my keys.",
      "He told me that he was busy.", "What I want is peace.", "She explained how it works.",
      "I doubt whether it is true.", "Whoever did this is in trouble.", "That he failed is surprising.",
      "I fear that we are lost.", "Do you understand what I mean?", "He admitted that he was wrong.",
      "It is clear that he is lying.", "Why he did it is unknown.", "I heard that you are leaving.",
      "She asked when the train arrives.", "I can't remember who called.", "Whatever you say is fine.",
      "I realized that I was late.", "He announced that he was quitting.", "It depends on what you want.",
      "I wonder if it will rain.", "She showed me where to go.", "I assume that you are ready.",
      "My belief is that kindness wins.", "I noticed that she was crying.", "He proved that he was innocent.",
      "She denied that she took it.", "I suggest that we wait.", "It is important that you listen.",
      "Who will win is uncertain.", "I agree that we need help.", "He promised that he would return.",
      "I saw that the door was open.", "She said that she was happy.", "I wonder who sent this.",
      "How it happened is a secret.", "What we saw was amazing.", "I know why he is angry."
    ]
  ),
  
  createLevel(23, "Quantifiers", 
    {
      rule: "Quantifiers show the amount or quantity of something.",
      example: "I have many books.",
      tip: "Use 'Many' for countable items and 'Much' for uncountable items like water.",
      visualType: 'comparison',
      steps: [
        { label: 'Countable', icon: '🔢', color: 'border-emerald-400' },
        { label: 'Uncountable', icon: '🌊', color: 'border-sky-400' }
      ]
    }, 
    [
      "I have many books.", "There is little water in the bottle.", "She has few friends.", 
      "Do you have any questions?", "Both students passed the exam.", "I have a lot of work today.", 
      "Most people like chocolate.", "Few people attended the meeting.", "There is some sugar in the jar.", 
      "Every child deserves a good education.", "Neither of the two options is good.",
      "I have enough money.", "There are several cars outside.", "All students must study.",
      "None of the answers are correct.", "She has plenty of time.", "He ate the whole pie.",
      "There is no milk left.", "Each person gets a gift.", "A few birds flew by.",
      "A little help goes a long way.", "Too much salt is bad.", "Too many people are here.",
      "We have sufficient food.", "Half of the class is absent.", "She has more patience than me.",
      "He has less money now.", "I saw a couple of movies.", "A great deal of effort is needed.",
      "Loads of people came.", "I don't have much time.", "Are there any apples?",
      "Some people are kind.", "Every day is a gift.", "All the water spilled.",
      "Most of the day was fun.", "Neither answer is right.", "Both cars are new.",
      "Several days passed.", "Few know the truth.", "Little is known about him.",
      "Any color will do.", "No one was home.", "Much of the city was destroyed.",
      "Many hands make light work.", "She ate a bit of cake.", "He has no idea.",
      "All of us are tired.", "Some of the food is cold.", "Plenty of water is here."
    ]
  ),
  
  createLevel(24, "Correlative Conjunctions", 
    {
      rule: "These pairs of words (Both/And, Either/Or) work together to connect ideas.",
      example: "Neither he nor she...",
      tip: "The elements being joined must be grammatically equal.",
      visualType: 'formula',
      steps: [
        { label: 'Word Pair 1', icon: '👫', color: 'border-pink-400' },
        { label: 'Word Pair 2', icon: '👫', color: 'border-pink-400' }
      ]
    }, 
    [
      "I like both tea and coffee.", "You can either come or stay.", "Neither he nor she was present.", 
      "She is not only intelligent but also kind.", "Both the students and the teacher are happy.", 
      "Not only is he smart, but he is also hardworking.", "Both the manager and the staff were happy.", 
      "Either stay here or go home.", "Whether you win or lose, be a good sport.", "Neither my father nor my mother is at home.",
      "I will either walk or take a bus.", "Neither the dog nor the cat is hungry.", "Not only did he win, but he also broke a record.",
      "Both my brother and sister are tall.", "Whether it rains or shines, we go.", "Either pay now or pay later.",
      "Neither the blue one nor the red one fits.", "She can both sing and dance.", "Not only is it cheap, but it is also good.",
      "Both the car and the bike are broken.", "Either apologize or leave.", "Whether you like it or not, it is true.",
      "Neither the keys nor the wallet was found.", "He is not only rich but also generous.", "Both the sun and the moon are visible.",
      "Either you help or you don't.", "Whether to go or stay is the question.", "Neither John nor Mary knew.",
      "Not only was it cold, but it was also windy.", "Both English and French are spoken here.", "Either call him or text him.",
      "Whether he comes or goes, I don't care.", "Neither the food nor the drink was good.", "She is a runner, a swimmer, and a biker.",
      "Not only did she cry, but she also screamed.", "Both the pen and the paper are here.", "Either finish it or forget it.",
      "Whether inside or outside, it is hot.", "Neither today nor tomorrow works.", "He is not only a writer but also a poet.",
      "Both apples and oranges are fruits.", "Either answer is correct.", "Whether big or small, I want it.",
      "Neither the bus nor the train arrived.", "Not only did he fall, but he also broke his arm.", "Both reading and writing are skills.",
      "Either stand up or sit down.", "Whether fast or slow, just finish.", "Neither rain nor snow stops us.",
      "Not only do I like it, but I love it."
    ]
  ),
  
  createLevel(25, "Emphatic Structures", 
    {
      rule: "Use 'Do' or 'It is...' to give extra importance to a part of the sentence.",
      example: "I do understand.",
      tip: "Using 'Do' before a verb adds strong emphasis.",
      visualType: 'formula',
      steps: [
        { label: 'Subject', icon: '👤', color: 'border-emerald-400' },
        { label: 'Emphasis', icon: '🔦', color: 'border-yellow-400' },
        { label: 'Verb', icon: '⚡', color: 'border-amber-400' }
      ]
    }, 
    [
      "I do understand your problem.", "It was John who broke the window.", "She does work hard.", 
      "It is tomorrow that we leave.", "He did finish the task.", "It is the lack of money that is the problem.", 
      "What I want is a glass of water.", "I did tell you to be careful.", "It was only yesterday that I saw him.", 
      "Rarely have I heard such a beautiful song.", "I do believe in ghosts.", "It is here that we met.",
      "She did call you.", "What I need is sleep.", "It was the wind that opened the door.",
      "I do hope you are well.", "It is hope that matters.", "He does look tired.",
      "What she said was true.", "It was Mary who helped me.", "I do like your dress.",
      "It is now or never.", "She did try her best.", "What we need is time.",
      "It was in London that he was born.", "I do want to go.", "It is the truth that hurts.",
      "He does seem happy.", "What happened was an accident.", "It was a mistake that cost us dearly.",
      "I do apologize.", "It is you who I trust.", "She did receive the letter.",
      "What helps is practice.", "It was late when he arrived.", "I do appreciate your help.",
      "It is kindness that saves us.", "He does know the answer.", "What matters is honesty.",
      "It was his idea.", "I do remember that day.", "It is silence that speaks.",
      "She does sing well.", "What costs money is quality.", "It was the rain that stopped us.",
      "I do miss him.", "It is fast cars that he likes.", "He did finish the race.",
      "What worries me is the time.", "It was lucky that we found it."
    ]
  ),
  
  createLevel(26, "Parallel Structure", 
    {
      rule: "Use the same grammatical form for items in a list to show equal importance.",
      example: "Kind, patient, and helpful.",
      tip: "If the first word is a gerund (-ing), the others should be too.",
      visualType: 'flow',
      steps: [
        { label: 'Form 1', icon: '✔️', color: 'border-sky-400' },
        { label: 'Form 2', icon: '✔️', color: 'border-sky-400' },
        { label: 'Form 3', icon: '✔️', color: 'border-sky-400' }
      ]
    }, 
    [
      "The teacher is kind, patient, and helpful.", "He enjoys swimming, reading, and playing cricket.", 
      "She likes to dance, to sing, and to paint.", "He runs, jumps, and swims daily.", 
      "She is intelligent, hardworking, and honest.", "I like hiking, biking, and swimming.", 
      "He is known for his honesty and for his integrity.", "To think is to exist.", 
      "The movie was long, boring, and depressing.", "She wants to travel, to learn, and to grow.",
      "He loves to swim, to hike, and to run.", "The room was clean, bright, and airy.",
      "He spoke clearly, loudly, and confidently.", "I need paper, pens, and ink.",
      "She is smart, funny, and beautiful.", "We went to the park, to the zoo, and to the museum.",
      "He likes cooking, eating, and sleeping.", "The car is fast, red, and expensive.",
      "To see is to believe.", "He walked slowly, carefully, and quietly.",
      "She bought apples, oranges, and bananas.", "The job is hard, tiring, and low-paid.",
      "I want to read, to learn, and to grow.", "He is rich, famous, and unhappy.",
      "We need to plan, to prepare, and to perform.", "She writes poems, stories, and songs.",
      "The dog is big, black, and scary.", "He stood up, turned around, and left.",
      "I like tea, coffee, and juice.", "She sings well, dances beautifully, and acts naturally.",
      "The test was long, hard, and tiring.", "He promised to come, to help, and to stay.",
      "I enjoy running, jumping, and playing.", "The sun is hot, bright, and yellow.",
      "She is a doctor, a writer, and a teacher.", "We need faith, hope, and charity.",
      "He drove fast, recklessly, and dangerously.", "I saw a bird, a cat, and a dog.",
      "To give is better than to receive.", "She looked left, right, and left again.",
      "The food was hot, spicy, and delicious.", "He is strong, brave, and true.",
      "We want peace, hope, and happiness.", "She woke up, got dressed, and went out.",
      "I read books, magazines, and newspapers.", "The water is cold, deep, and clear.",
      "He plays soccer, basketball, and tennis.", "To try is to succeed.",
      "She is calm, cool, and collected.", "We laughed, cried, and hugged."
    ]
  ),
  
  createLevel(27, "Ellipsis", 
    {
      rule: "Ellipsis is leaving out words that are already understood.",
      example: "Mary likes tea...",
      tip: "Omitted words must be clear from context.",
      visualType: 'formula',
      steps: [
        { label: 'Full Idea', icon: '📖', color: 'border-emerald-400' },
        { label: 'Omitted Part', icon: '✂️', color: 'border-pink-400' }
      ]
    }, 
    [
      "I can swim but my brother can't.", "She is taller than I am.", "Is she coming? Yes, she is.", 
      "Will you help? Yes, I will.", "John likes coffee and Mary tea.", "He went to the store and I to the bank.", 
      "I can go if you want.", "Is it raining? I think so.", "Do you want some tea? No thank you.", 
      "Some like it hot, some cold.", "I have a car, but he doesn't.", "She can sing, and he can too.",
      "I will if you will.", "He is happy, and so am I.", "I didn't see it, but she did.",
      "Who broke it? I did.", "Are you tired? Yes, very.", "He works hard, she harder.",
      "I ordered pizza, he pasta.", "She went north, we south.", "Some stayed, others left.",
      "I like red, you blue.", "He is 10, she 12.", "You are early, I late.",
      "I spoke to him, she to her.", "One was big, the other small.", "I drive a Ford, he a Toyota.",
      "She loves to read, I to write.", "He can run fast, I faster.", "I saw a bird, she a squirrel.",
      "Did he call? I suppose so.", "Is it true? I hope not.", "Who is there? Me.",
      "Want some? Yes please.", "Ready? Not yet.", "Why me? Why not?",
      "He is rich, but not happy.", "I wash dishes, he dries.", "She plays piano, he guitar.",
      "I looked up, he down.", "Some ran, some walked.", "I ate an apple, she a pear.",
      "He won gold, she silver.", "I stayed home, they went out.", "Is it yours? Yes.",
      "Can you drive? No, I can't.", "I have money, do you?", "He is strong, I weak.",
      "She bought a dress, I a shirt.", "I am ready, are you?"
    ]
  ),
  
  createLevel(28, "Subjunctive Mood", 
    {
      rule: "Use the subjunctive to express wishes, doubts, or imaginary situations.",
      example: "If I were rich.",
      tip: "In hypothetical cases, use 'Were' instead of 'Was' for all subjects.",
      visualType: 'formula',
      steps: [
        { label: 'If Clause', icon: '💭', color: 'border-sky-400' },
        { label: 'Subjunctive', icon: '✨', color: 'border-amber-400' }
      ]
    }, 
    [
      "If I were you, I would apologize.", "I suggest that he study harder.", "I wish I had more time.", 
      "She insisted that he be present.", "If she were here, she would help.", "It is essential that he be told the truth.", 
      "I suggest that she take a break.", "Long live the king!", "God bless you.", 
      "If only I were taller.", "He acted as if he were the boss.", "I wish it were sunny.",
      "It is important that she be on time.", "I propose that we wait.", "If I were a bird, I would fly.",
      "He talks as if he knew everything.", "I request that he leave now.", "If he were honest, he would say it.",
      "It is necessary that you be there.", "I wish I were home.", "Suppose he were to refuse.",
      "I demanded that he pay me.", "May peace be with you.", "If only it were true.",
      "I advise that she see a doctor.", "If I were king, I would change laws.", "He wishes he were younger.",
      "It is vital that he understand.", "I prefer that she stay.", "Would that it were so simple.",
      "If practice makes perfect, keep trying.", "I insist that the room be clean.", "He recommends that we go.",
      "If she were rich, she would buy it.", "I wish I were finished.", "It is crucial that safety be first.",
      "He ordered that the gate be locked.", "If I were in your shoes, I would go.", "I wish I were sleeping.",
      "It is better that he know.", "Let it be.", "He behaves as if he were tired.",
      "I suggest that the meeting be postponed.", "If today were Saturday, I would sleep.", "I wish she were my friend.",
      "It is urgent that help be sent.", "He asked that we be quiet.", "If I were invisible, I would spy.",
      "I wish it were over.", "May you be happy."
    ]
  ),
  
  createLevel(29, "Reduced Clauses", 
    {
      rule: "Shorten sentences by removing the subject and 'Be' verb from certain clauses.",
      example: "While walking, she...",
      tip: "The subject of both parts of the sentence must be the same.",
      visualType: 'flow',
      steps: [
        { label: 'Short Clause', icon: '📉', color: 'border-amber-400' },
        { label: 'Main Sentence', icon: '📝', color: 'border-emerald-400' }
      ]
    }, 
    [
      "While walking, she saw a bird.", "The man standing there is my father.", "Being tired, he went to bed early.", 
      "The book written by him is famous.", "While driving carefully, he saw an accident.", "Tired from the journey, he fell asleep.", 
      "The house built on the hill is mine.", "If possible, please let me know.", "Though small, the apartment is comfortable.", 
      "Once finished, please return the book.", "Looking up, I saw a star.", "When in Rome, do as Romans do.",
      "Seen from afar, it looks small.", "Before leaving, lock the door.", "After eating, we walked.",
      "Shocked by the news, she cried.", "While sleeping, he dreamt.", "Taken daily, the pill helps.",
      "Though rich, he is humble.", "If asked, tell the truth.", "Unless told otherwise, stay here.",
      "Being late, I ran.", "Known to all, he is famous.", "While reading, I fell asleep.",
      "Located in the center, the shop is busy.", "Though tired, he kept going.", "Before cooking, wash your hands.",
      "Once started, it cannot stop.", "Walking home, I met John.", "Surrounded by enemies, he fought.",
      "When ready, call me.", "Being a doctor, he helped.", "Used correctly, it works well.",
      "While waiting, I read.", "Though cold, it was sunny.", "If true, this is bad.",
      "Feeling sick, he went home.", "Lost in thought, he sat still.", "Running fast, he fell.",
      "Painted blue, the house stood out.", "Before speaking, think.", "After arriving, we ate.",
      "Though old, it works.", "Given the chance, I would go.", "While working, don't talk.",
      "Born in 1990, he is young.", "If necessary, call for help.", "Being honest, he confessed.",
      "Once done, relax.", "Left alone, he cried."
    ]
  ),
  
  createLevel(30, "Absolute Phrases", 
    {
      rule: "An absolute phrase modifies a whole sentence, often consisting of a noun and a participle.",
      example: "Her work done, she...",
      tip: "These phrases are separated from the main sentence by a comma.",
      visualType: 'formula',
      steps: [
        { label: 'Noun', icon: '🏷️', color: 'border-amber-400' },
        { label: 'Participle', icon: '✅', color: 'border-emerald-400' },
        { label: 'Action', icon: '🧘', color: 'border-sky-400' }
      ]
    }, 
    [
      "The test being over, the students left.", "His homework finished, he went to play.", "The weather being nice, we decided to picnic.", 
      "Her eyes closed, she meditated.", "The sun having set, it grew cold.", "The day being warm, we went to the beach.", 
      "The work completed, we went home.", "Our tasks done, we were free.", "The rain having stopped, we went out.", 
      "His eyes fixed on the target, he fired.", "Victory achieved, the crowd cheered.", "The fire extinguished, the forest was safe.",
      "The movie finished, they left the theater.", "Time permitting, we will visit.", "The car broken, we walked.",
      "The bus late, we took a taxi.", "Her heart pounding, she opened the door.", "The game won, they celebrated.",
      "His money gone, he was poor.", "The door locked, we could not enter.", "The storm passing, the sky cleared.",
      "Dinner cooked, she set the table.", "The engine starting, the plane moved.", "Hands shaking, he held the paper.",
      "The problem solved, we relaxed.", "The crowd cheering, he waved.", "Night falling, we lit a fire.",
      "The decision made, they left.", "Tears falling, she said goodbye.", "The lights dimming, the show began.",
      "Her voice trembling, she spoke.", "The bridge crossing, we saw the view.", "The letter written, he posted it.",
      "The key found, we opened the box.", "His leg broken, he could not run.", "The sun rising, the birds sang.",
      "The coffee brewing, the room smelled good.", "The music playing, they danced.", "Her bag packed, she was ready.",
      "The winter coming, birds flew south.", "The meeting ended, everyone left.", "The river flooding, people fled.",
      "His hands tied, he could do nothing.", "The truth revealed, he was shocked.", "The cake eaten, we cleaned up.",
      "The phone ringing, she answered.", "The war over, peace returned.", "The clock ticking, time passed.",
      "Her smile fading, she looked sad.", "The goal reached, we rested."
    ]
  )
];