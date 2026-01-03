
import { Level, LevelGuide, Question } from '../types';

export const shuffle = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/**
 * Generates simple permutations for lists joined by 'and' or 'or' and other patterns.
 */
const generateVariations = (sentence: string): string[] => {
  const variations = [sentence];
  
  // Handle simple "A and B" pattern swapping
  if (sentence.includes(' and ')) {
    const parts = sentence.split(' and ');
    if (parts.length === 2) {
      const p1 = parts[0].trim();
      const p2 = parts[1].replace(/[.,!?;]$/, '').trim();
      const p2Full = parts[1].match(/[.,!?;]$/) ? parts[1].trim() : parts[1].trim() + '.';
      
      const p1Tokens = p1.split(' ');
      const lastWordP1 = p1Tokens.pop();
      const leadP1 = p1Tokens.join(' ');
      
      if (leadP1 && lastWordP1) {
         variations.push(`${leadP1} ${p2} and ${lastWordP1}${p2Full.slice(-1) === '.' ? '.' : ''}`);
      }
    }
  }

  // Handle "either A or B" pattern swapping
  if (sentence.includes('either ') && sentence.includes(' or ')) {
    const match = sentence.match(/either (.*) or (.*)([.,!?;])$/);
    if (match) {
      variations.push(`either ${match[2]} or ${match[1]}${match[3]}`);
    }
  }

  return [...new Set(variations)];
};

export const createLevel = (
  id: number, 
  title: string, 
  guide: LevelGuide, 
  sentences: string[]
): Level => {
  return {
    id,
    title,
    guide,
    questions: sentences.map(s => {
      const tokens = s.match(/\w+|[^\w\s]/g) || [];
      return {
        correctAnswers: generateVariations(s),
        scrambled: shuffle(tokens),
        hint: guide.tip || "Look closely at the word relationships!"
      };
    })
  };
};
