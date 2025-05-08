

const posts = [
    {
        
      id: 1,
      username: "merouane",
      avatar: "https://th.bing.com/th/id/OIP.QexcnKLol8SaCraOMz2o6AHaFo?rs=1&pid=ImgDetMain",
      image: "https://th.bing.com/th/id/OIP.SDXLquzF63L9dUSy94XkCwHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      caption: "new member in the family 🐱",
      likes: 12,
      bio: "meowwww",
      comments: ["So cute!", "What good kitty!"],
      createdAt: new Date(Date.now() - 5 * 60 * 1000),
      style: {
        border: "2px solid pink",
        backgroundColor: "#fff0f5",
      } as React.CSSProperties,
    },
    {
      id: 2,
      username: "meowan",
      avatar: "https://th.bing.com/th/id/OIP.3k09XytJ-fOyq5WJhNm3DgHaJz?w=650&h=861&rs=1&pid=ImgDetMain",
      image: "https://univers-du-chat.com/wp-content/uploads/2021/12/cat-2120915_1280.jpg",
      caption: "my kitten 🐾",
      likes: 120,
      bio: "sleepy cat",
      comments: [ { text: "So cute!", createdAt: new Date(Date.now() - 2 * 60 * 1000) }, // 2 minutes ago
        { text: "What a floof!", createdAt: new Date(Date.now() - 5 * 60 * 1000) },],
      createdAt: new Date(Date.now() - 5 * 60 * 1000),
    },

    {
        id: 3,
        username: "lara",
        avatar: "https://th.bing.com/th/id/OIP.TzP2op3lkhlTh6oOHamacAHaHa?rs=1&pid=ImgDetMain",
        image: "https://a-z-animals.com/media/2021/12/orange-kitten.jpg",
        caption: "looking for a new home 🏡",
        likes: 67,
        bio: "cat lover",
        comments: [ { text: "location?", createdAt: new Date(Date.now() - 2 * 60 * 1000) }, // 2 minutes ago
          { text: "would love to adopt her!", createdAt: new Date(Date.now() - 5 * 60 * 1000) },],
        createdAt: new Date(Date.now() - 5 * 60 * 1000),
      },

      {
        id: 4,
        username: "meowan",
        avatar: "https://th.bing.com/th/id/OIP.3k09XytJ-fOyq5WJhNm3DgHaJz?w=650&h=861&rs=1&pid=ImgDetMain",
        image: "https://i.pinimg.com/originals/4c/5f/bf/4c5fbf489c214d836d84e6470879fefb.jpg",
        caption: "hi there!",
        likes: 16,
        bio: "sleepy cat",
        comments: [ { text: "adorable", createdAt: new Date(Date.now() - 2 * 60 * 1000) }, // 2 minutes ago
          { text: "hey!", createdAt: new Date(Date.now() - 5 * 60 * 1000) },
          { text: "who is this cutie", createdAt: new Date(Date.now() - 5 * 60 * 1000) }],
        createdAt: new Date(Date.now() - 5 * 60 * 1000),
      },
      {
        id: 5,
        username: "catlover123",
        avatar: "https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_1280.jpg",
        image: "https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_1280.jpg",
        caption: "First day at the park 🐱🌳",
        likes: 50,
        bio: "Meow is life",
        comments: [
          { text: "how did it get there", createdAt: new Date(Date.now() - 10 * 60 * 1000) },
          { text: "lol", createdAt: new Date(Date.now() - 15 * 60 * 1000) },
        ],
        createdAt: new Date(Date.now() - 15 * 60 * 1000),
      },
      {
        id: 6,
        username: "meowan",
        avatar: "https://th.bing.com/th/id/OIP.3k09XytJ-fOyq5WJhNm3DgHaJz?w=650&h=861&rs=1&pid=ImgDetMain",
        image: "https://cdn.pixabay.com/photo/2018/01/28/12/37/cat-3113513_1280.jpg",
        caption: "another pic",
        likes: 7,
        bio: "sleepy cat",
        comments: [
        
        ],
        createdAt: new Date(Date.now() - 1 * 60 * 1000),
      },
      {
        id: 7,
        username: "moonpaws",
        avatar: "https://th.bing.com/th/id/OIP.UJZN0t3ggoJHqvJvaX-TqgHaHZ?rs=1&pid=ImgDetMain",
        image: "https://th.bing.com/th/id/R.56cd0f8ca0e248929766aa2aefe02006?rik=8UIxdBv1rvMzjQ&pid=ImgRaw&r=0",
        caption: "Midday naps hit different 💤",
        likes: 150,
        bio: "I rule this house.",
        comments: [
          { text: "Mood.", createdAt: new Date(Date.now() - 60 * 60 * 1000) },
        ],
        createdAt: new Date(Date.now() - 60 * 60 * 1000),
      },
      {
        id: 8,
        username: "kittykomedy",
        avatar: "https://th.bing.com/th/id/OIP.bVnAo4gSEt0dwjMUr7N2wAHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
        image: "https://th.bing.com/th/id/OIP.bodJ6e40lvH-UlG6Yy6tzQHaHa?rs=1&pid=ImgDetMain",
        caption: "Caught stealing snacks 😂",
        likes: 201,
        bio: "comedy cat content",
        comments: [
          { text: "Relatable 😂", createdAt: new Date(Date.now() - 30 * 60 * 1000) },
        ],
        createdAt: new Date(Date.now() - 30 * 60 * 1000),
      },
      {
        id: 9,
        username: "noodlethecat",
        avatar: "https://th.bing.com/th/id/OIP.R1GF6aIz1dkCuyFFLmbWIQHaHL?w=500&h=485&rs=1&pid=ImgDetMain",
        image: "https://th.bing.com/th/id/R.b13d0ccef3d71c7444abbd2d668c1f89?rik=oUuCW3RJrPOEMw&riu=http%3a%2f%2fjustsomething.co%2fwp-content%2fuploads%2f2019%2f01%2fmeet-smoothie-the-most-photogenic-cat-in-the-world-who-took-the-internet-by-storm-44.jpg&ehk=SbP7wpaStGSTzwD5baROKhUvP1OAFNbeKnr7SvXXlkc%3d&risl=&pid=ImgRaw&r=0",
        caption: "Me being photogenic 📸",
        likes: 98,
        bio: "Noodle: 10/10 lap warmer",
        comments: [
          { text: "Iconic 😻", createdAt: new Date(Date.now() - 45 * 60 * 1000) },
        ],
        createdAt: new Date(Date.now() - 45 * 60 * 1000),
      },
      {
        id: 10,
        username: "moonpaws",
        avatar: "https://th.bing.com/th/id/OIP.UJZN0t3ggoJHqvJvaX-TqgHaHZ?rs=1&pid=ImgDetMain",
        image: "https://i.ytimg.com/vi/vr2G4AL-e7c/maxresdefault.jpg",
        caption: "Night walk 🌙🐾",
        likes: 67,
        bio: "Midnight zoomies specialist",
        comments: [],
        createdAt: new Date(Date.now() - 70 * 60 * 1000),
      },

      {
        id: 11,
        username: "moonpaws",
        avatar: "https://th.bing.com/th/id/OIP.UJZN0t3ggoJHqvJvaX-TqgHaHZ?rs=1&pid=ImgDetMain",
        image: "https://th.bing.com/th/id/OIP.U49pqDFnNDPw7xg5gRjYKwHaFl?w=1200&h=906&rs=1&pid=ImgDetMain",
        caption: "Sunbeam hunter ☀️🐈",
        likes: 143,
        bio: "",
        comments: [
          { text: "So majestic!", createdAt: new Date(Date.now() - 8 * 60 * 1000) },
          { text: "Living the life 😌", createdAt: new Date(Date.now() - 12 * 60 * 1000) },
        ],
        createdAt: new Date(Date.now() - 10 * 60 * 1000),
      }
  
    ];

  function timeSince(date: Date): string {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
    const intervals = [
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];
  
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }
  
    return "Just now";
  }
  
  
  export default posts;
  export { timeSince };
  