
# PriorityMail AI

PriorityMail is a sophisticated web application designed to enhance your Gmail experience by intelligently prioritizing and categorizing your emails. Powered by the advanced capabilities of Gemini AI, PriorityMail offers a seamless solution for managing your inbox.


## Features

- **Secure Authentication**: Utilizes NextAuth to securely authenticate users through their Google accounts.
- **Email Prioritization**: Fetches emails from Gmail API and employs Gemini AI to intelligently prioritize them based on relevance and importance.
- **Efficient Tagging**: Tags emails with relevant labels to aid in quick identification and organization.
- **API Key Management**: Allows users to securely store their API keys in local storage for easy access and management.


## Tech Stack

**Client:** Next.js, ShadCN UI components, TailwindCSS, TypeScript

**Authentication:** NextAuth(V5)

**APIs/AI:** Gmail API, Gemini AI

## Demo
![Product Demo](https://github.com/Avinash-Tallapaneni/PriorityMail_AI/blob/main/assets/demo.gif)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Avinash-Tallapaneni/PriorityMail_AI.git
```

Go to the project directory

```bash
  cd PriorityMail_AI
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`AUTH_SECRET=**************************`

`AUTH_GOOGLE_ID**************************apps.googleusercontent.com`
`AUTH_GOOGLE_SECRET**************************`  
`NEXTAUTH_URL="http://localhost:3000"`



## Author

My name is Avinash Tallapaneni, and I am a front-end web developer. I am passionate about coding and building applications that make a difference in people's lives.

- Website - [Preview site on vercel](https://prioritymail.vercel.app/)
- Twitter - [@TallapaneniAvi](https://www.twitter.com/TallapaneniAvi)

## Got feedback?

i love receiving feedback! So if you have anything you'd like to mention, please email avinashtallapaneni[at]gmail[dot]com or message me on socials
