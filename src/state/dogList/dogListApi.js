import {getAllBreedsAsync, getRandomImageByBreedAsync} from '../../utils/api';

// export const dogListApi = () => getAllBreedsAsync();

export const dogListApi = async () => {
  let breedNames = [];

  let data = [];

  await getAllBreedsAsync()
    .then(response => {
      breedNames = Object.keys(response.message);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(async () => {
      for (let index = 0; index < breedNames?.length; index++) {
        const breed = breedNames[index];

        const getData = await getRandomImageByBreedAsync(breed);

        data = [...data, {breed: breed, subBreeds: [], image: getData.message}];
      }
    });

  return data;
};
