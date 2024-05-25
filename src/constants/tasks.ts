export const TASKS_ITEMS = [
  {
    imageUrl: require('../assets/tasks/textSummary.png'),
    name: 'Text Summary',
    desc: 'Summarize any text and create a numbered list of its key points',
    firstMessage: 'Type the text you want summarized',
    isPopular: true,
    category: 'Education',
    query: 'Summarize the following text: {text}',
  },
  {
    imageUrl: require('../assets/tasks/writing.png'),
    name: 'Writing',
    desc: 'Fight writer’s block and finish your text',
    firstMessage: 'Type your unfinished text',
    isPopular: true,
    category: 'Education',
    query: 'Finish the following text: {text}',
  },
  {
    imageUrl: require('../assets/tasks/rewriting.png'),
    name: 'Rewriting',
    desc: 'Create unique rewrites with high text authenticity',
    firstMessage: 'Type your text',
    isPopular: true,
    category: 'Education',
    query: 'Rewrite the following text: {text}',
  },
  {
    imageUrl: require('../assets/tasks/textCheck.png'),
    name: 'Text Check',
    desc: 'Check any text for spelling and grammatical mistakes',
    firstMessage: 'Type your text',
    isPopular: true,
    category: 'Education',
    query:
      'Check the following text for spelling and grammatical mistakes: {text}',
  },
  {
    imageUrl: require('../assets/tasks/insta.png'),
    name: 'Content',
    desc: 'Create Instagram posts on any topic',
    firstMessage: 'What do you want the post to be about?',
    isPopular: true,
    category: 'Social Media',
    query: 'Create an Instagram post about: {text}',
  },
  {
    imageUrl: require('../assets/tasks/insta.png'),
    name: 'Captions',
    desc: 'Come up with engaging captions for your Instagram posts',
    firstMessage:
      'Describe the photo in your post in as much detail as possible',
    isPopular: true,
    category: 'Social Media',
    query: 'Create an engaging caption for a photo described as: {text}',
  },
  {
    imageUrl: require('../assets/tasks/facebook.png'),
    name: 'Facebook',
    desc: 'Stand out on Facebook with unique posts',
    firstMessage: 'What do you want the post to be about?',
    isPopular: true,
    category: 'Social Media',
    query: 'Create a Facebook post about: {text}',
  },
  {
    imageUrl: require('../assets/tasks/essay.png'),
    name: 'Essay',
    desc: 'Have a well-structured essay written especially for you',
    firstMessage: 'What’s the topic of your essay?',
    isPopular: true,
    category: 'Education',
    query: 'Write an essay on the following topic: {text}',
  },
  {
    imageUrl: require('../assets/tasks/insta.png'),
    name: 'Reels',
    desc: 'Get creative descriptions for your Instagram Reels',
    firstMessage: 'What is your reel about?',
    isPopular: true,
    category: 'Social Media',
    query: 'Create a description for an Instagram Reel about: {text}',
  },
  {
    imageUrl: require('../assets/tasks/tiktok.png'),
    name: 'TikTok',
    desc: 'Boost your TikTok views with appealing captions',
    firstMessage: 'What is your video about?',
    isPopular: true,
    category: 'Social Media',
    query: 'Create an appealing TikTok caption for a video about: {text}',
  },
  {
    imageUrl: require('../assets/tasks/aiArt.png'),
    name: 'AI Art',
    desc: 'Create detailed prompts you can use in AI image generators',
    firstMessage: 'Describe the image you want to generate',
    isPopular: true,
    category: 'Fun',
    query:
      'Create a detailed AI image prompt for the following description: {text}',
  },
  {
    imageUrl: require('../assets/tasks/reply.png'),
    name: 'Reply Ideas',
    desc: 'Explore possible replies to your partner’s messages',
    firstMessage: 'What did your partner say?',
    isPopular: true,
    category: 'Communication',
    query: 'Create a reply to the following message: {text}',
  },
  {
    imageUrl: require('../assets/tasks/textStyle.png'),
    name: 'Text Style',
    desc: 'See your text rewritten in another style',
    firstMessage: 'What is the preferred style for the rewritten text?',
    isPopular: true,
    category: 'Education',
    query: 'Rewrite the following text in the style of {text}',
  },
  {
    imageUrl: require('../assets/tasks/tiktok.png'),
    name: 'TikTok',
    desc: 'Craft TikTok posts on any topic',
    firstMessage: 'What do you want the post to be about?',
    category: 'Social Media',
    query: 'Create a TikTok post about: {text}',
  },
  {
    imageUrl: require('../assets/tasks/linkedn.png'),
    name: 'LinkedIn Profile',
    desc: 'Create memorable posts on LinkedIn',
    firstMessage: 'What do you want the post to be about?',
    category: 'Social Media',
    query: 'Create a LinkedIn post about: {text}',
  },
  {
    imageText: '🔖',
    name: 'Chatting',
    desc: 'Get help, creative ideas, and smart advice from our AI assistant.',
    firstMessage: 'What is on your mind?',
    category: 'Social Media',
    query: 'Help with the following query: {text}',
  },
  {
    imageUrl: require('../assets/tasks/x.png'),
    name: 'X Profile',
    desc: 'Craft compelling X posts.',
    firstMessage: 'What is the topic of your post?',
    category: 'Social Media',
    query: 'Create a compelling X post about: {text}',
  },
  {
    imageUrl: require('../assets/tasks/x.png'),
    name: 'X Posts',
    desc: 'Summarize your text into a short post.',
    firstMessage: 'Type the text you want to summarize.',
    category: 'Social Media',
    query: 'Summarize the following text into a short X post: {text}',
  },
  {
    imageText: '🦹‍♀️',
    name: 'Roleplay',
    desc: 'Talk to AI as if it is someone else',
    firstMessage:
      'What role do you want me to play: your friend, boyfriend, girlfriend, etc.',
    category: 'Social Media',
    query: 'Roleplay as {role} and respond to the following: {text}',
  },
  {
    imageText: '😔',
    name: 'Therapist',
    desc: 'Get anything off your chest and have a heart-to-heart with AI',
    firstMessage: 'Type whatever feels right',
    category: 'Communication',
    query: 'Provide therapeutic support for the following: {text}',
  },
  {
    imageText: '💘',
    name: 'Flirting',
    desc: 'Ask engaging questions on your first date',
    firstMessage: "What is your partner's sex?",
    category: 'Communication',
    query:
      'Suggest engaging questions for a first date with a partner gender: {text}',
  },
  {
    imageText: '💘',
    name: 'Romance',
    desc: 'Receive romantic date ideas.',
    firstMessage: 'What city are you planning your date in?',
    category: 'Communication',
    query: 'Suggest romantic date ideas in {text}',
  },
  {
    imageText: '🤖',
    name: 'Undetectable AI',
    desc: 'Bypass AI content detectors and make your text plagiarism-free.',
    firstMessage: 'Type your text',
    category: 'Education',
    query:
      'Make the following text undetectable by AI content detectors: {text}',
  },
  {
    imageText: '📏',
    name: 'Math',
    desc: 'Have any equation solved in a flash',
    firstMessage: 'Type in your equation',
    category: 'Education',
    query: 'Solve the following equation: {text}',
  },
  {
    name: 'Coding Interview Questions',
    imageText: '💻',
    desc: 'Create well-written interview questions.',
    firstMessage: 'Which coding language you want?',
    category: 'Education',
    query:
      'Create a list of 8 questions for my {text} interview. Do not write explanations in replies.',
  },
  {
    name: 'Physic Questions',
    imageText: '👩‍🔬',
    desc: 'Create well-written physic questions or problems.',
    firstMessage: 'Topic about ....?',
    category: 'Education',
    query:
      'Create a list of 5 questions or problems about physic class. Topic is {text}. Do not write explanations in replies.',
  },
  {
    name: 'Lyrics',
    imageText: '🎵',
    desc: 'Create the lyrics of a song for any genre of music.',
    firstMessage: 'What is this song about?',
    category: 'Fun',
    query:
      'Create the lyrics of a song about {text}. Do not write explanations in replies.',
  },
  {
    name: 'Poem',
    imageText: '📜',
    desc: 'Create poems in different styles.',
    firstMessage: 'What is this poem about?',
    category: 'Fun',
    query:
      'Create the poem about {text}. Do not write explanations in replies.',
  },
  {
    name: 'Story',
    imageText: '📖',
    desc: 'Create a story from a specific topic.',
    firstMessage: 'What is this story about?',
    category: 'Fun',
    query:
      'Create the story about {text}. Do not write explanations in replies.',
  },
  {
    name: 'Short Film',
    imageText: '🎬',
    desc: 'Create a script for a movie.',
    firstMessage: 'What is this short film about?',
    category: 'Fun',
    query:
      'Create the short film scenario about {text}. Do not write explanations in replies.',
  },
  {
    name: 'Company Biography',
    imageText: '📋',
    desc: 'Briefly tell the story of your company.',
    firstMessage: 'Company Name and Company aim?',
    category: 'Business',
    query:
      'Create a company biography. Company name and aim is "{text}". Do not write explanations in replies.',
  },
  {
    name: 'Name Generator',
    imageText: '🔖',
    desc: 'Find a great name for your brand or product.',
    category: 'Business',
    query:
      'Create an efficient company name. Company aim is {text}. Do not write explanations in replies.',
    firstMessage: 'What does your brand/product do?',
  },
  {
    name: 'Slogan',
    imageText: '📢',
    desc: 'Create a catchy slogan for your business.',
    firstMessage: 'What is your business doing?',
    category: 'Business',
    query:
      'Create a catchy slogan for a business with this emotion {emotion}. Company aim is {text}. Do not write explanations in replies.',
  },
  {
    name: 'Ads',
    imageText: '💫',
    desc: 'Promote a product, service, brand or event.',
    firstMessage: 'About what?',
    category: 'Business',
    query:
      'Create an impressive advertisement text about "{text}". Do not write explanations in replies.',
  },
  {
    name: 'Job Advertisement',
    imageText: '📰',
    desc: 'Write a job description that attracts ideal candidates.',
    firstMessage: 'What position are you hiring for?',
    category: 'Business',
    query:
      'Create a job advertisement. The position is "{text}". Do not write explanations in replies.',
  },
];
