import { createLevel } from './curriculum_helper';

export const BIOME1_LEVELS = [
  createLevel(1, "Subjects and Verbs", 
    {
      rule: "Every sentence needs a Subject (who or what) and a Verb (the action).",
      example: "Birds sing.",
      tip: "The Subject usually comes before the Verb.",
      visualType: 'formula',
      steps: [
        { label: 'Subject', icon: '👤', color: 'border-emerald-400' },
        { label: 'Verb', icon: '⚡', color: 'border-amber-400' }
      ]
    }, 
    [
      "The dog runs.", "The boy plays.", "The cat sleeps.", "The frog jumps.", 
      "The bird flies.", "A lion roars.", "The wind blows.", "Fish swim.",
      "The sun shines.", "It rains.", "People walk.", "She sings.", 
      "He dreams.", "Babies cry.", "Leaves fall.", "Time flies.", 
      "Fire burns.", "Water flows.", "The moon glows.", "Stars twinkle.", 
      "The teacher speaks.", "Students listen.", "The clock ticks.",
      "Birds chirp.", "Dogs bark.", "Cats meow.", "Rain falls.",
      "Ice melts.", "Seeds grow.", "Planes land.", "The car starts.",
      "The train stops.", "The phone rings.", "Computers crash.", "The door opens.",
      "My heart beats.", "The fire crackles.", "Soldiers march.", "Dancers spin.",
      "The water boils.", "Snow falls.", "The grass grows.", "The light fades.",
      "Eagles soar.", "Tigers hunt.", "Bells ring.", "The candle flickers.",
      "Thunder rumbles.", "The snake hisses.", "The ship sails."
    ]
  ),
  
  createLevel(2, "Direct Objects", 
    {
      rule: "The Direct Object is the thing that receives the action of the verb.",
      example: "The boy kicks the ball.",
      tip: "Order: Who does it → What they do → What receives it.",
      visualType: 'formula',
      steps: [
        { label: 'Subject', icon: '👤', color: 'border-emerald-400' },
        { label: 'Verb', icon: '⚡', color: 'border-amber-400' },
        { label: 'Object', icon: '📦', color: 'border-sky-400' }
      ]
    }, 
    [
      "The boy kicks the ball.", "The girl reads a book.", "He drinks water.", 
      "She writes a letter.", "The child eats the cake.", "Mom cooks dinner.", 
      "Dad washes the car.", "The cat chases the mouse.", "They play the game.", 
      "We watch the movie.", "The chef prepares the food.", "The artist paints a picture.", 
      "I lost my keys.", "She found her bag.", "He opened the door.", 
      "The gardener waters the plants.", "Farmers grow corn.", "The pilot flies the plane.",
      "The mechanic fixes the car.", "The baker makes bread.", "The writer writes a story.",
      "I bought a shirt.", "He threw the stone.", "She loves pizza.",
      "We heard a noise.", "The dog chewed the bone.", "He broke the window.",
      "She wears a hat.", "I forgot my password.", "They built a house.",
      "He plays the guitar.", "She sang a song.", "I drew a map.",
      "The monkey eats a banana.", "He drives a bus.", "She planted a tree.",
      "I need a pen.", "He wants a cookie.", "We cleaned the room.",
      "She brushed her hair.", "He tied his shoes.", "They crossed the river.",
      "I read the news.", "She sent an email.", "He caught the ball.",
      "We climbed the mountain.", "The cow eats grass.", "I visited the museum.",
      "She solved the puzzle.", "He drank the juice."
    ]
  ),
  
  createLevel(3, "Using Adjectives", 
    {
      rule: "Adjectives describe nouns (people, places, or things).",
      example: "The small boy runs.",
      tip: "Put the adjective immediately before the noun.",
      visualType: 'formula',
      steps: [
        { label: 'Adjective', icon: '🎨', color: 'border-pink-400' },
        { label: 'Noun', icon: '🏷️', color: 'border-emerald-400' }
      ]
    }, 
    [
      "The black dog barks.", "The girl reads an interesting book.", "The beautiful bird sings.", 
      "The tall boy plays basketball.", "He drives a fast red car.", "A tiny ant crawls.",
      "The hungry lion roars.", "Cold water feels good.", "Bright stars shine tonight.", 
      "A heavy box fell.", "The young girl laughed.", "Smart students study hard.", 
      "Sweet apples taste great.", "The expensive watch broke.", "Brave soldiers fight.", 
      "A friendly neighbor helped.", "Quiet music played.", "The deep ocean hides secrets.",
      "The hot sun burns.", "A white cloud floats.", "The angry man shouted.",
      "A soft pillow helps.", "The green grass grows.", "A sharp knife cuts.",
      "The old car died.", "Fresh bread smells good.", "A dark cave scares me.",
      "The busy street is loud.", "A cute puppy jumped.", "The long road winds.",
      "Sour lemons taste bad.", "The wet dog shook.", "A round ball rolls.",
      "The purple flower bloomed.", "A rich king lived.", "The poor beggar asked.",
      "Dry sand blows.", "The empty cup fell.", "A broken chair sat there.",
      "The clean room sparkled.", "Dirty clothes piled up.", "A wild tiger attacked.",
      "The calm lake reflects.", "Strong wind blew.", "A happy child played.",
      "The sad movie ended.", "Fat cats sleep.", "Thin paper tears.",
      "The new phone rang.", "An ancient castle stood."
    ]
  ),
  
  createLevel(4, "Using Adverbs", 
    {
      rule: "Adverbs describe how an action is performed. Many end in -ly.",
      example: "She speaks softly.",
      tip: "Most adverbs go after the verb they describe.",
      visualType: 'formula',
      steps: [
        { label: 'Verb', icon: '⚡', color: 'border-amber-400' },
        { label: 'Adverb', icon: '💨', color: 'border-purple-400' }
      ]
    }, 
    [
      "The boy runs quickly.", "He came yesterday.", "She sings beautifully.", 
      "He lives here.", "The old man walks slowly.", "The sun shines brightly.",
      "The rain fell heavily.", "She answered correctly.", "They arrived early.", 
      "He spoke loudly.", "The bird sang cheerfully.", "I waited patiently.", 
      "The wind blew strongly.", "She danced gracefully.", "He worked diligently.", 
      "They left quietly.", "I checked carefully.", "The car stopped suddenly.",
      "He ate greedily.", "She whispered softly.", "They fought bravely.",
      "I slept soundly.", "He laughed happily.", "She cried bitterly.",
      "The team played badly.", "He drove recklessly.", "She looked everywhere.",
      "We sat comfortably.", "He smiled warmy.", "They agreed completely.",
      "It snowed continuously.", "She writes neatly.", "He behaved rudely.",
      "The dog barked fiercely.", "I understand clearly.", "She replied instantly.",
      "He acted wisely.", "They shouted angrily.", "We walked briskly.",
      "He travels frequently.", "She cooks skillfully.", "The baby slept peacefully.",
      "I searched thoroughly.", "He jumped high.", "She studies hard.",
      "They talked excitedly.", "He breathed deeply.", "She greeted us politely.",
      "The river flowed smoothly.", "I promised faithfully."
    ]
  ),
  
  createLevel(5, "Prepositions of Place", 
    {
      rule: "Prepositions tell you where something is located.",
      example: "The cat sits on the mat.",
      tip: "Prepositions usually come before the noun that is the location.",
      visualType: 'flow',
      steps: [
        { label: 'Subject', icon: '👤', color: 'border-emerald-400' },
        { label: 'Preposition', icon: '📍', color: 'border-amber-400' },
        { label: 'Location', icon: '🏠', color: 'border-sky-400' }
      ]
    }, 
    [
      "The book is on the table.", "The cat sleeps in the box.", "The boy sits under the tree.", 
      "He studies at school.", "The dog hides behind the wall.", "The birds fly above the trees.", 
      "A bridge goes over the river.", "The keys are inside the drawer.", "The car is in front of the house.", 
      "The library is near the park.", "The clouds are in the sky.", "A picture hangs on the wall.", 
      "Stand next to the window.", "The pen fell between the chairs.", "The ball rolled under the car.",
      "The flowers grow around the house.", "Walk through the gate.", "Look towards the mountains.",
      "The apples are in the basket.", "A rug lies on the floor.", "The car is inside the garage.",
      "He hid below the deck.", "The plane flew above the clouds.", "She stood beside her friend.",
      "The coin is beneath the sofa.", "A fence runs around the yard.", "The shop is across the street.",
      "Put the milk in the fridge.", "The sign hangs over the door.", "We walked along the beach.",
      "The cat jumped onto the bed.", "He fell into the water.", "The mouse ran behind the cupboard.",
      "My house is by the lake.", "The stars are in space.", "He leaned against the wall.",
      "The letter is under the mat.", "Sit among your friends.", "The train went through the tunnel.",
      "The bird sat upon the branch.", "He is at the cinema.", "She works at the hospital.",
      "The fish swim in the bowl.", "The roof is over our heads.", "A tree grows near the river.",
      "The path goes through the forest.", "The gift is inside the box.", "He parked outside the gate.",
      "The light is above the mirror.", "The shoes are under the rack."
    ]
  ),
  
  createLevel(6, "Articles: A, An, The", 
    {
      rule: "Use 'A' or 'An' for any one item. Use 'The' for a specific item.",
      example: "I see an elephant.",
      tip: "Use 'An' if the next word starts with a vowel sound (a, e, i, o, u).",
      visualType: 'comparison',
      steps: [
        { label: 'A/An (Any)', icon: '❓', color: 'border-emerald-400' },
        { label: 'The (Specific)', icon: '🎯', color: 'border-amber-400' }
      ]
    }, 
    [
      "The boy eats an apple.", "She reads an interesting book.", "The sky is blue.", 
      "A dog barks loudly.", "I waited for an hour.", "An orange is on the plate.", 
      "A unique bird flew by.", "The moon is bright.", "Give me an honest answer.", 
      "The earth is round.", "An umbrella is useful.", "A horse runs fast.", 
      "The sun rises daily.", "An ant is small.", "I saw an elephant.",
      "A cat sat on the fence.", "The doctor arrived late.", "He is an engineer.",
      "She wants a new car.", "The flowers are blooming.", "I found an old coin.",
      "A teacher helps students.", "The principal spoke today.", "It was an accident.",
      "A river flows nearby.", "The ocean is deep.", "He ate a pear.",
      "She has a good idea.", "The internet is fast.", "A computer is helpful.",
      "The movie was long.", "I need a stamp.", "He wears a uniform.",
      "An apple a day is good.", "The stars are far away.", "A friend called me.",
      "She is an artist.", "The wind is cold.", "I saw a ghost.",
      "An owl hooted.", "The door is locked.", "He bought a pen.",
      "An eagle flew high.", "The bus is late.", "I want an ice cream.",
      "A tiger is dangerous.", "The key is missing.", "She spotted an insect.",
      "A balloon floated up.", "The answer is correct."
    ]
  ),
  
  createLevel(7, "Conjunctions", 
    {
      rule: "Conjunctions (And, But, Or, So) connect words or parts of a sentence.",
      example: "She is smart and kind.",
      tip: "Use 'And' to add, 'But' for contrast, and 'So' for results.",
      visualType: 'formula',
      steps: [
        { label: 'Idea 1', icon: '💡', color: 'border-emerald-400' },
        { label: 'Connector', icon: '🔗', color: 'border-pink-400' },
        { label: 'Idea 2', icon: '💡', color: 'border-emerald-400' }
      ]
    }, 
    [
      "I like tea and coffee.", "He was tired so he slept.", "She ran fast but lost.", 
      "Do you like apples or oranges?", "She studied hard because exams were coming.",
      "It was cold but sunny.", "She sang and danced.", "He left because he was late.", 
      "Eat your food or it gets cold.", "It rained so we stayed.", "I called him but he did not answer.", 
      "The cake was small but delicious.", "The rain stopped and the sun came out.",
      "I fell down but I did not cry.", "He is rich yet humble.", "Will you go or stay?",
      "The car is old but reliable.", "I am hungry so I will eat.", "He worked hard and succeeded.",
      "She was sick so she stayed home.", "I like blue and green.", "He is tall and strong.",
      "Is it black or white?", "He tried but failed.", "The room was dark so I lit a candle.",
      "I wanted to go but I was busy.", "Fish swim and birds fly.", "Listen to me or leave.",
      "She cooked and he cleaned.", "It was expensive but worth it.", "I screamed because I was scared.",
      "He smiled and waved.", "Run fast or you will be late.", "The dog barked but did not bite.",
      "I was thirsty so I drank water.", "He is smart but lazy.", "We waited and waited.",
      "Do you want tea or coffee?", "It is late so I must go.", "She fell and hurt her knee.",
      "The food was hot and spicy.", "He is poor but happy.", "I looked but found nothing.",
      "Study now or regret later.", "The wind blew and the leaves fell.", "She is young but wise.",
      "I bought milk and bread.", "He was angry so he shouted.", "The door was locked so I knocked.",
      "I like him because he is funny."
    ]
  ),
  
  createLevel(8, "Time Expressions", 
    {
      rule: "Time expressions tell us when an action happens.",
      example: "Yesterday we visited.",
      tip: "Time words can go at the beginning or the end of a sentence.",
      visualType: 'flow',
      steps: [
        { label: 'Time Word', icon: '📅', color: 'border-amber-400' },
        { label: 'Sentence', icon: '📝', color: 'border-emerald-400' }
      ]
    }, 
    [
      "We visited the museum yesterday.", "I will go to London tomorrow.", "He always plays football.", 
      "She finished her homework today.", "Next week we will have a party.", "Today is Monday.", 
      "He never eats candy.", "Sometimes it snows here.", "We meet every week.", 
      "I saw him recently.", "She will arrive soon.", "He wakes up early.", 
      "They stayed for two hours.", "We finished our project last night.", "Yesterday, it rained.",
      "I brush my teeth daily.", "We often watch movies.", "She rarely complains.",
      "He is coming now.", "They will leave later.", "Last year we went to Paris.",
      "In the morning I run.", "At night I read.", "She called me five minutes ago.",
      "I will see you shortly.", "We usually eat at six.", "The bus arrives hourly.",
      "Summer is coming soon.", "It rained all day.", "He was late again.",
      "Before lunch we played.", "After dinner we slept.", "He works on Sundays.",
      "I clean my room weekly.", "They visit annually.", "Wait for a moment.",
      "The show starts tonight.", "Yesterday was fun.", "Tomorrow is a holiday.",
      "He exercises every morning.", "She left an hour ago.", "We are busy right now.",
      "Sometimes I feel sad.", "He seldom speaks.", "I will pay you next month.",
      "The shop opens at nine.", "We lived there for years.", "She instantly agreed.",
      "Eventually he arrived.", "The bell rings at noon."
    ]
  ),
  
  createLevel(9, "Simple Questions", 
    {
      rule: "To ask a question, start with a helping verb (Is, Do, Are, Can).",
      example: "Is she eating?",
      tip: "Order: Helper → Subject → Action.",
      visualType: 'formula',
      steps: [
        { label: 'Helper', icon: '❓', color: 'border-sky-400' },
        { label: 'Subject', icon: '👤', color: 'border-emerald-400' },
        { label: 'Verb', icon: '⚡', color: 'border-amber-400' }
      ]
    }, 
    [
      "Where do you live?", "Is she reading a book?", "What did you eat?", 
      "Where are they going?", "Does he like coffee?", "Why are you crying?", 
      "Can you help me?", "Who is that man?", "When is the party?", 
      "How do you feel?", "Are you coming home?", "What time is it?", 
      "Did you see the news?", "Where are my keys?", "Is the water cold?",
      "Do you have a pen?", "Can we go now?", "Why is the sky blue?",
      "Who ate the cake?", "When does the train leave?", "How old are you?",
      "Are they your friends?", "Did he call you?", "What is your name?",
      "Where is the bathroom?", "Is this your bag?", "Do birds fly?",
      "Can I sit here?", "Why are you late?", "Who won the game?",
      "When will it rain?", "How much does it cost?", "Are you hungry?",
      "Did she finish the work?", "What happened here?", "Where did he go?",
      "Is it sunny outside?", "Do you speak English?", "Can she swim?",
      "Why did you run?", "Who wrote this letter?", "When is your birthday?",
      "How did you do that?", "Are we there yet?", "Did the dog bark?",
      "What color is it?", "Where can I park?", "Is he sleeping?",
      "Do you believe me?", "Can you drive a car?"
    ]
  ),
  
  createLevel(10, "Possessives", 
    {
      rule: "Possessive words (My, His, Her, Their) show who owns something.",
      example: "This is her cat.",
      tip: "Place the possessive word before the thing being owned.",
      visualType: 'formula',
      steps: [
        { label: 'Owner', icon: '👤', color: 'border-amber-400' },
        { label: 'Item', icon: '📦', color: 'border-emerald-400' }
      ]
    }, 
    [
      "This is my book.", "That bag is hers.", "His car is new.", 
      "These books are ours.", "The big house is theirs.", "Is this your pen?", 
      "Our team won the match.", "Her eyes are blue.", "Their garden is beautiful.", 
      "My mother is kind.", "His father works hard.", "The cat licked its paws.", 
      "Whose phone is ringing?", "This is your last chance.", "My head hurts.",
      "Your shoes are dirty.", "His dog is friendly.", "Her dress is red.",
      "Our school is famous.", "Their car broke down.", "My keys are lost.",
      "Your answer is correct.", "His hair is short.", "Her voice is sweet.",
      "Its tail is long.", "Our plan worked.", "Their children are noisy.",
      "My phone is dead.", "Your turn is next.", "His wallet is empty.",
      "Her smile is lovely.", "Our house is small.", "Their trip was fun.",
      "My bag is heavy.", "Your idea is great.", "His brother is tall.",
      "Her sister is smart.", "The dog ate its food.", "Our country is large.",
      "Their flight was delayed.", "My name is John.", "Your hands are cold.",
      "His room is messy.", "Her handwriting is neat.", "Our teacher is strict.",
      "Their dog ran away.", "My watch stopped.", "Your bike is cool.",
      "His joke was funny.", "Her dream came true."
    ]
  )
];