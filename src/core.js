import {wordMatch} from './skills/word-match.js';export {updateProgress,progressSummary} from './skills/progress.js';
export function checkAnswer(lesson,answer){if(!lesson.quiz.choices.includes(answer))throw new Error('Choose an available answer');return wordMatch(answer,lesson.quiz.answer);}
export function lessonDraft(lesson){return `${lesson.title}\n\nPractice words: ${lesson.words.join(', ')}\n\n`+lesson.steps.map((s,i)=>`${i+1}. ${s.label}: ${s.instruction}`).join('\n\n')+'\n\nTeacher-supported example lesson.';}
