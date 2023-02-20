## Habit tracker

This is a visualisation app to track daily habits.

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Technologies used

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)(Pending)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [visx](https://airbnb.io/visx/)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) 

## Tips to get up and running

- Clone the repo
- Run `npm install`
- Create a local postgres database and remember its name
- Create a .env file at root and copy over the sample environment variables from .env.example. 
- Replace <your-local-database-name> with database name in DATABASE_URL in .env
- Sync your database (creates tables based on prisma schame) - `npx prisma db push`
- Seed your database with sample data - `npx prisma db seed`
- Fire it up - `npm run dev`
