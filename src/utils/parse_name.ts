const prepositions = ['E', 'DO', 'DOS', 'DA', 'DAS', 'DE'];

export const firsLetterUpperRestLower = (textToConvert: string) => {
  let text = '';
  text += textToConvert.charAt(0).toUpperCase();
  text += textToConvert.substring(1).toLowerCase();
  return text;
};

export const parseName = (name: string) => {
  let fullname = '';
  let nameToSplit = name;

  const splitedName: string[] = nameToSplit.trim().split(' ');
  splitedName.forEach((user: string, index: number) => {
    const userUpper = user.toUpperCase();
    if (index <= 0) {
      fullname += firsLetterUpperRestLower(userUpper);
    } else if (
      prepositions.find((preposition) => preposition === userUpper) !==
      undefined
    ) {
      fullname += ` ${userUpper.toLowerCase()}`;
    } else if (index === splitedName.length - 1) {
      fullname += ` ${firsLetterUpperRestLower(userUpper)}`;
    } else if (userUpper.length >= 4 || userUpper.length <= 2)
      fullname += ` ${userUpper.charAt(0).toUpperCase()}.`;
    else fullname += ` ${firsLetterUpperRestLower(userUpper)}`;
  });
  return fullname;
};