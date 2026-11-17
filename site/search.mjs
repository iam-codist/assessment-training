export function normalize(value) {
  return String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

export function searchQuestions(questions, { query = '', category = '', status = '', difficulty = '' } = {}) {
  const phrase = normalize(query);
  const tokens = phrase.split(/\s+/).filter(Boolean);
  return questions.filter(q => (!category || q.category === category) && (!status || q.status === status) && (!difficulty || q.difficulty === difficulty))
    .map((q, order) => {
      const id = normalize(q.id);
      const title = normalize(q.title);
      const topic = normalize(q.topicLabel);
      const text = normalize(`${q.id} ${q.title} ${q.topicLabel} ${q.categoryLabel} ${q.text}`);
      const match = tokens.every(token => text.includes(token));
      let score = 0;
      if (phrase) {
        score += id === phrase ? 1000 : id.startsWith(phrase) ? 100 : 0;
        score += title === phrase ? 300 : title.includes(phrase) ? 80 : 0;
        score += topic.includes(phrase) ? 40 : 0;
        score += tokens.filter(token => title.includes(token)).length * 10;
      }
      return { question: q, match, score, order };
    }).filter(r => r.match).sort((a, b) => b.score - a.score || a.order - b.order).map(r => r.question);
}
