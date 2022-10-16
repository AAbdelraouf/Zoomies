import {getBreeds, getMatchingImageByBreed} from '../../utils/api';

export const dogListApi = async () => {
  let breedNames = [];

  let data = [];

  await getBreeds()
    .then(response => {
      breedNames = Object.keys(response.message);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(async () => {
      for (let index = 0; index < breedNames?.length; index++) {
        const breed = breedNames[index];

        const getData = await getMatchingImageByBreed(breed);

        data = [...data, {breed: breed, subBreeds: [], image: getData.message}];
      }
    });

  return data;
};
