const BASE = 'https://dog.ceo/api';
const ALL_BREEDS = '/breeds/list/all';
const SPECIFIC_BREED = '/breed';
const ALL_IMAGES = '/images';
const RANDOM_IMAGE = '/images/random';

export const getAllBreedsAsync = async () => {
  try {
    const response = await fetch(BASE + ALL_BREEDS, {
      headers: {
        contentType: 'application/json; charset=utf-8',
      },
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getRandomImageByBreedAsync = async breed => {
  try {
    const response = await fetch(
      BASE + SPECIFIC_BREED + '/' + breed + RANDOM_IMAGE,
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

export const getAllImagesByBreedAsync = async breed => {
  try {
    const response = await fetch(
      BASE + SPECIFIC_BREED + '/' + breed + ALL_IMAGES,
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
