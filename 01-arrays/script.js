const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"];

// NON MODIFICARE QUESTA VARIABILE
console.table(teachers);

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
fiveTeacher = "Patrick";
teachers[4] = fiveTeacher;
console.log(teachers[4]);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

const lastTeacher = teachers.pop();
console.table(lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.table(firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.table(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.table(teachers);
// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

const lewisIndex = teachers.indexOf("Lewis");
console.table(lewisIndex);

// 8. Verifica se l'array teachers è vuoto
// e Salva il risultato nella variabile isTeachersEmpty

const isTeachersEmpty = teachers.length === 0;
console.log(isTeachersEmpty);
