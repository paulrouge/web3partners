interface Meetup {
    location: string;
    start: string;
    end: string;
    date: string;
    topic: string;
    host: string;
    eventbrite: string;
  }

//   Always add new meetups to the top of the array

  export const allmeetups: Meetup[] = [
    // more meetups here...
      {
        location: 'Rotterdam',
        start: '6:30 PM',
        end: '9:00 PM',
        date: 'September 22nd',
        topic: 'Unlocking Web3: Empowering Individuals in the New Economic Frontier',
        host: 'Web3 Partners X W3B Lab',
        eventbrite: '/',
    },
    {
        location: 'Rotterdam',
        start: '6:30 PM',
        end: '9:00 PM',
        date: 'May 19th',
        topic: 'Web3 x Fashion: How Web3 Tech & Culture Is Transforming Streetwear Brands',
        host: 'Web3 Partners X W3B Lab',
        eventbrite: 'https://www.eventbrite.com/e/may-meetup-web3-x-fashion-tickets-624851917907',
    },
    {
      location: 'The Hague',
      start: '6:00 PM',
      end: '9:00 PM',
      date: 'March 30th',
      topic: 'Collaborating in the Web3 Industry',
      host: 'Web3 Partners',
      eventbrite: '',
    },
    {
      location: 'Delft',
      start: '6:00 PM',
      end: '9:00 PM',
      date: 'February 23rd',
      topic: 'How to get involved in Web3',
      host: 'Web3 Partners',
      eventbrite: '',
    },
    
  ];
    