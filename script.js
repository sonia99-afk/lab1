const textInput = document.getElementById('textInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const clearBtn = document.getElementById('clearBtn');

const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');
const sentenceCount = document.getElementById('sentenceCount');
const longestWord = document.getElementById('longestWord');
const timeResult = document.getElementById('timeResult');


function analyzeText() {

  // начало измерения времени
  const start = performance.now();

  const text = textInput.value.trim();

  
  charCount.textContent = text.length;

  
  const words = text.match(/[A-Za-zА-Яа-яЁё0-9]+/g) || [];
  wordCount.textContent = words.length;

  
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  sentenceCount.textContent = text.length === 0 ? 0 : sentences.length || 1;

  
  const longest = words.reduce(
    (max, word) => word.length > max.length ? word : max,
    ''
  );

  longestWord.textContent = longest || '-';

  // конец измерения времени
  const end = performance.now();

  // вычисление времени обработки
  const processingTime = end - start;

  // вывод времени на страницу
  timeResult.textContent = processingTime.toFixed(3);
}


function clearText() {
  textInput.value = '';

  charCount.textContent = '0';
  wordCount.textContent = '0';
  sentenceCount.textContent = '0';
  longestWord.textContent = '-';
  timeResult.textContent = '0';
}


analyzeBtn.addEventListener('click', analyzeText);
clearBtn.addEventListener('click', clearText);
