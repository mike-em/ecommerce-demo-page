const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/wpVmzC2/woman-1149911-1920.jpg',
      id: '1',
      linkUrl: 'hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/PhsdTFy/blue-2564660-1920.jpg',
      id: '2',
      linkUrl: 'jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/PYT0hZv/skateboards-1150036-1920.jpg',
      id: '3',
      linkUrl: 'sneakers',
    },
    {
      title: 'women',
      imageUrl: 'https://i.ibb.co/5khGBs9/two-women-1246024-1920.jpg',
      size: 1,
      id: '4',
      linkUrl: 'women',
    },
    {
      title: 'men',
      imageUrl: 'https://i.ibb.co/Hgrb92k/people-4086437-1920.jpg',
      size: 1,
      id: '5',
      linkUrl: 'men',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
