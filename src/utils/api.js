export const getBreeds = async () => {
  try {
    const response = await fetch('https://dog.ceo/api' + '/breeds/list/all', {
      headers: {
        contentType: 'application/json; charset=utf-8',
      },
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getMatchingImageByBreed = async breed => {
  try {
    const response = await fetch(
      'https://dog.ceo/api' + '/breed' + '/' + breed + '/images/random',
      {
        headers: {
          contentType: 'application/json; charset=utf-8',
        },
      },
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};
