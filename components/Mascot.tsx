import React, { useState, useEffect, useRef } from 'react';
import { MascotState } from '../types';

interface MascotProps {
  state: MascotState;
  isFlipping?: boolean;
}

const COMMENTS = {
  [MascotState.IDLE]: [
    "Ooh ooh! What's next on the map?",
    "I'm hungry for some new sentences!",
    "Can you find the subject of this one?",
    "Looking great, lead explorer!",
    "The jungle is full of wonderful words!",
    "Which leaf should we pick first?",
    "I love a well-built sentence, don't you?",
    "Kojo is ready to swing into action!",
    "Need a quick banana break?",
    "Check out those colorful leaves! 🍃",
    "Syntax is the hidden treasure of the jungle!",
    "Did you know monkeys are grammar experts?",
    "Ready for the next big challenge?",
    "I bet you can solve this one in record time!",
    "Your brain is bigger than a giant coconut!",
    "Patience is the key to the canopy!",
    "One word at a time, ooh ooh!",
    "Is that an adjective hiding over there?",
    "Keep swinging through the levels, you're fast!",
    "I'm feeling banana-tastic today!",
    "The canopy is quiet... let's make some grammar noise!",
    "Word by word, our safari grows!",
    "You're becoming a real sentence pro!",
    "I smell a correct answer coming soon!",
    "Grammar is like a map for your mind!",
    "Have you seen my friend the parrot?",
    "The vines are strong today, just like your logic!",
    "Is that a conjunction or just a funny branch?",
    "I wonder what we'll discover in the next biome!",
    "Every sentence is a new path to explore!"
  ],
  [MascotState.SUCCESS]: [
    "Tasty! Great job on that one!",
    "A bunch of bananas for you!",
    "Perfect sentence structure!",
    "Ooh ooh ah ah! That's correct!",
    "You're a natural explorer!",
    "Syntax-tastic performance!",
    "That was leaf-perfect construction!",
    "Golden structure! Well done!",
    "You nailed that grammar rule!",
    "Smart as a silverback leader!",
    "A banana for your brilliance! 🍌",
    "Absolute genius at work!",
    "The whole jungle cheers for you!",
    "Smooth sailing through the vines!",
    "That's how we do it in the safari!",
    "Top-tier grammar work, explorer!",
    "You've got the rhythm of the roots!",
    "Incredible! Let's see the next one!",
    "Magnificent construction!",
    "You're swinging through these rules!",
    "Crystal clear logic!",
    "You have a sharp eye for syntax!",
    "Top of the tree performance!",
    "A gold star for your grammar skills!"
  ],
  [MascotState.ERROR]: [
    "Oops! Not quite the right path.",
    "Careful! Those vines got a bit tangled.",
    "Let's try a different word order.",
    "Try re-shuffling the leaves.",
    "Syntax error! Let's try again.",
    "Don't give up, explorer!",
    "Even monkeys fall from trees sometimes!",
    "Shake it off and swing back in!",
    "A little tangle in the sentence vines!",
    "Check the verb placement again!",
    "Is the subject in the right spot?",
    "Don't let the leopards of doubt get you down!",
    "Mistakes are just stepping stones to success!",
    "Try a different sequence this time.",
    "Almost had it! Keep swinging!",
    "That was a tricky one, ooh ooh!",
    "Re-read the guide, it's very helpful!",
    "Let's untie this sentence knot together!",
    "Vines get tangled sometimes, no worries!",
    "The path is a bit muddy here, try again!",
    "Just a minor detour on our map!",
    "Every mistake makes you a better explorer!"
  ],
  [MascotState.TICKLE]: [
    "Hee-hee! That's funny!",
    "Ooh-ooh-ah-ah! Stop that!",
    "Banana-induced laughter!",
    "Hehe! You found my funny bone!",
    "Wiggles and giggles in the jungle!",
    "You're quite the jokester, explorer!",
    "I'm laughing my tail off!",
    "Giggle overload in the canopy!",
    "Wowie! I'm jumping for joy!",
    "Giggles in the garden!",
    "Stop it, you're making my tail wag!",
    "Monkey business is the best business!"
  ],
  [MascotState.WIN]: [
    "KING OF THE CANOPY!",
    "Sentence Master of the Safari!",
    "Unstoppable grammar energy!",
    "The jungle crown belongs to you!",
    "What an incredible safari journey!",
    "Grammar Legend of the Green!",
    "You've conquered the high canopy!",
    "Absolute Legend of the Leaves!",
    "Safari completed with ultimate style!",
    "The vines bow to your brilliance!",
    "Ooh ooh ah ah! YOU DID IT!",
    "Master of the Jungle Maps!",
    "The ultimate explorer has arrived!",
    "No sentence can stop you now!",
    "Victory dance time! 💃",
    "Pure jungle magic in your mind!",
    "You've reached the highest summit!",
    "The jungle crown looks good on you!",
    "You've mapped the entire canopy!",
    "Supreme Safari Scholar!",
    "A legend of the leaves forever!"
  ],
  [MascotState.EATING]: [
    "Mmm... tastes like grammar!",
    "Nom nom nom! Delicious!",
    "Sweet victory snacks!",
    "Deliciously correct!",
    "Tastes like pure knowledge!",
    "Best banana in the forest!",
    "Gulp! That's better!",
    "Fuel for our next big level!",
    "Nothing beats a fresh snack!",
    "Crunchy and perfectly correct!",
    "Slurp! Ooh ooh so tasty!",
    "I could eat these all day long!",
    "Energy boost for more sentences! ⚡",
    "Crunching on clauses!",
    "Mmm, nutritious nouns!",
    "Knowledge is the sweetest fruit!"
  ]
};

const Mascot: React.FC<MascotProps> = ({ state: externalState, isFlipping }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentComment, setCurrentComment] = useState("");
  const [internalState, setInternalState] = useState<MascotState | null>(null);
  const hasIntroduced = useRef(false);
  const commentTimeoutRef = useRef<number | null>(null);

  const state = internalState || externalState;

  useEffect(() => {
    if (!hasIntroduced.current && state === MascotState.IDLE) {
      setCurrentComment("Hi! I'm Kojo, your safari guide!");
      hasIntroduced.current = true;
      return;
    }

    if (commentTimeoutRef.current) {
      window.clearInterval(commentTimeoutRef.current);
    }

    const choices = COMMENTS[state] || COMMENTS[MascotState.IDLE];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setCurrentComment(randomChoice);

    if (state === MascotState.IDLE) {
      commentTimeoutRef.current = window.setInterval(() => {
        const nextChoice = choices[Math.floor(Math.random() * choices.length)];
        setCurrentComment(nextChoice);
      }, 15000); 
    }

    return () => {
      if (commentTimeoutRef.current) window.clearInterval(commentTimeoutRef.current);
    };
  }, [state]);

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      // Calculate normalized position relative to screen center
      // Range: -16 to 16 for a dynamic "look at" effect
      const x = (clientX / window.innerWidth - 0.5) * 16;
      const y = (clientY / window.innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  const handleTickle = () => {
    setInternalState(MascotState.TICKLE);
    setTimeout(() => setInternalState(null), 3000);
  };

  const getEyeContent = () => {
    switch (state) {
      case MascotState.SUCCESS:
      case MascotState.WIN:
      case MascotState.EATING:
        return '🍌';
      case MascotState.ERROR:
        return '🍋';
      case MascotState.TICKLE:
        return '😆';
      default:
        return null;
    }
  };

  const eyeContent = getEyeContent();
  const rotation = mousePos.x * 0.4 + (state === MascotState.TICKLE ? Math.sin(Date.now() / 50) * 5 : 0);

  const getMouthPath = () => {
    if (state === MascotState.EATING || state === MascotState.TICKLE) {
      return "M 70 145 Q 100 205 130 145 Z";
    }
    if (state === MascotState.ERROR) {
      return "M 80 155 Q 100 140 120 155";
    }
    if (state === MascotState.SUCCESS || state === MascotState.WIN) {
      return "M 65 140 Q 100 190 135 140";
    }
    return "M 85 150 Q 100 168 115 150";
  };

  return (
    <div className="relative group/mascot select-none">
      <div 
        key={currentComment}
        className="absolute top-[105%] left-1/2 -translate-x-1/2 w-[min(90vw,16rem)] glass border-amber-400/30 rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-5 text-center animate-in zoom-in slide-in-from-top-2 duration-500 z-40 pointer-events-none shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
      >
        <p className="text-white font-black text-[13px] md:text-[15px] leading-tight drop-shadow-sm tracking-tight">
          {currentComment}
        </p>
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-[#064e3b] border-l border-t border-emerald-400/30 rotate-45" />
      </div>

      <div 
        id="mascot-container" 
        onClick={handleTickle}
        className={`relative w-40 h-40 md:w-56 md:h-56 cursor-pointer transition-all duration-500 ${isFlipping ? 'backflip' : 'animate-bounce'}`} 
        style={{ 
          animationDuration: isFlipping ? '0.8s' : (state === MascotState.TICKLE ? '0.2s' : '5s'),
          transform: `rotate(${rotation}deg)`
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>
            {`
              @keyframes eye-blink {
                0%, 85%, 89%, 93%, 100% { transform: scaleY(1); }
                87%, 91% { transform: scaleY(0); }
              }
              .eye-group {
                animation: eye-blink 5s infinite;
                transform-origin: center 92px;
              }
              .hair-tuft {
                animation: sway 2.5s ease-in-out infinite alternate;
                transform-origin: 100px 30px;
              }
              @keyframes sway {
                from { transform: rotate(-10deg); }
                to { transform: rotate(10deg); }
              }
              .cheeks-pulse {
                animation: glow 1.5s ease-in-out infinite alternate;
              }
              @keyframes glow {
                from { opacity: 0.15; transform: scale(0.9); }
                to { opacity: 0.45; transform: scale(1.1); }
              }
            `}
          </style>
          <defs>
            <radialGradient id="furGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>
            <radialGradient id="faceColor">
              <stop offset="0%" stopColor="#fff7ed" />
              <stop offset="100%" stopColor="#f59e0b" />
            </radialGradient>
            <filter id="cheekBlur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
          </defs>
          <g>
            <circle cx="30" cy="95" r="34" fill="#451a03" />
            <circle cx="170" cy="95" r="34" fill="#451a03" />
            <circle cx="30" cy="95" r="22" fill="#92400e" opacity="0.3" />
            <circle cx="170" cy="95" r="22" fill="#92400e" opacity="0.3" />
          </g>
          <path d="M 80 30 Q 100 -10 120 30" fill="#451a03" className="hair-tuft" />
          <path d="M 90 30 Q 100 0 110 30" fill="#451a03" className="hair-tuft" style={{ animationDelay: '0.4s' }} />
          <circle cx="100" cy="105" r="88" fill="url(#furGradient)" />
          <path d="M 42 100 C 42 55 75 50 100 50 C 125 50 158 55 158 100 C 158 160 130 170 100 170 C 70 170 42 160 42 100" fill="url(#faceColor)" opacity="0.98" />
          <g className="cheeks-pulse" style={{ transformOrigin: 'center' }}>
            <circle cx="65" cy="135" r="16" fill="#f87171" filter="url(#cheekBlur)" />
            <circle cx="135" cy="135" r="16" fill="#f87171" filter="url(#cheekBlur)" />
          </g>
          {/* Eye group with parallax look-at effect */}
          <g transform={`translate(${mousePos.x * 0.4}, ${mousePos.y * 0.4})`} className={!eyeContent ? "eye-group" : ""}>
            <circle cx="75" cy="92" r="22" fill="white" />
            <circle cx="125" cy="92" r="22" fill="white" />
            {!eyeContent ? (
              <>
                <circle cx={75 + mousePos.x * 0.3} cy={92 + mousePos.y * 0.3} r="14" fill="#171717" />
                <circle cx={125 + mousePos.x * 0.3} cy={92 + mousePos.y * 0.3} r="14" fill="#171717" />
                <circle cx={70 + mousePos.x * 0.3} cy={86 + mousePos.y * 0.3} r="6" fill="white" />
                <circle cx={120 + mousePos.x * 0.3} cy={86 + mousePos.y * 0.3} r="6" fill="white" />
              </>
            ) : (
              <>
                <text x={75} y={102} fontSize="32" textAnchor="middle">{eyeContent}</text>
                <text x={125} y={102} fontSize="32" textAnchor="middle">{eyeContent}</text>
              </>
            )}
          </g>
          <path d="M 94 122 C 94 118 106 118 106 122 C 106 130 100 135 100 135 C 100 135 94 130 94 122" fill="#451a03" />
          <path d={getMouthPath()} stroke="#451a03" strokeWidth="6" fill={state === MascotState.EATING || state === MascotState.TICKLE ? "#451a03" : "none"} strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default Mascot;
