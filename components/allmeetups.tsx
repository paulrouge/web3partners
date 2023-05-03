interface Meetup {
    location: string;
    start: string;
    end: string;
    date: string;
    topic: string;
    host: string;
  }

//   Always add new meetups to the top of the array

  export const allmeetups: Meetup[] = [
    // more meetups here...
    {
        location: 'Rotterdam',
        start: '6:30 PM',
        end: '9:00 PM',
        date: 'May 19th',
        topic: 'Web3 x Fashion: How Web3 Tech & Culture Is Transforming Streetwear Brands',
        host: 'Web3 Partners X W3B Lab'
    },
    {
      location: 'The Hague',
      start: '6:00 PM',
      end: '9:00 PM',
      date: 'March 30th',
      topic: 'Collaborating in the Web3 Industry',
      host: 'Web3 Partners'
    },
    {
      location: 'Delft',
      start: '6:00 PM',
      end: '9:00 PM',
      date: 'February 23rd',
      topic: 'How to get involved in Web3',
      host: 'Web3 Partners'
    },
    
  ];
    