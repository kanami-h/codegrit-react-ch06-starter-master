import imageOne from './images/image-one.jpg';
import imageTwo from './images/image-two.jpg';
import avatarOne from './images/avatar-one.png';
import avatarTwo from './images/avatar-two.png';
import moment from 'moment';

const firstDate = moment('23/12/2019 09:15:00', "DD MM YYYY hh:mm:ss").format('X');
const secondDate = moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss").format('X');

// function sample(引数){
//   return 戻り値;
//   console.log()
// }

// sample(2);

const cardDataOne = {
  id: 1,
  poster: "posteruser1",
  posterAvatar: avatarOne,
  imageUrl: imageOne,
  comments: [
    {
      postedAt: firstDate, //投稿時間
      poster: "",
      body: ""
    },
  ]
}

const cardDataTwo = {
  id: 2,
  poster: "posteruser2",
  posterAvatar: avatarTwo,
  imageUrl: imageTwo,
  comments: [
    {
      postedAt: secondDate, //投稿時間
      poster: "",
      body: ""
    },
  ]
}

export const fetchData = (id = 1) => {
  return new Promise(function (resolve) {
    const data = id === 1 ? cardDataOne : cardDataTwo;
    setTimeout(() => {
      resolve(data);
    }, 1000)
  })
}