const GetId = () => {
  const getDate = new Date();
  const getMilliseconds = Date.parse(getDate).toString();
  const randomNumber = Math.round(Math.random() * 100).toString();

  const alphabet = 'abcdfghjkmnpqrstvwxyz';
  let getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

  let getId = getMilliseconds + randomNumber + getRandomLetter;

  return getId;
}

export default GetId;
