const complimentary = ["Look at you, you are enchantic", "You are the most beeautiful creature of the world", "I love you my friend", "I wish you are my girlfriend, because you are wonderful"];
const astrology = ["Are you Aries?", "Are you Taurus?", "Are you Gemini?", "Are you Cancer?", "Are you Leo?", "Are you Virgo?", "Are you Libra?", "Are you Scorpio?", "Are you Sagittarius?", "Are you Capricorn?", "Are you Aquarius?", "Are you Pisces?"];
const pet = ["Is your pet dog?", "Is your pet a cat?", "Is your pet a fish?", "Is your pet a python?"];

const randomMessage = arr => {
    const message = arr[Math.floor(Math.random() * randomMessage.length)];
    return message;
}

const randomTopic = (arr1, arr2, arr3) => {
    const topics = [arr1, arr2, arr3];
    const topic = topics[Math.floor(Math.random() * topics.length)];
    return randomMessage(topic);
}

console.log(randomTopic(complimentary, astrology, pet));