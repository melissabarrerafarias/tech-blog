function formatDate(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
    ).getFullYear()}`;
}; 

function pluralValidation(word, amount) {
    if (amount !== 1) {
        return `${word}s`;
    }

    return word;
}; 

module.exports = { formatDate, pluralValidation }; 