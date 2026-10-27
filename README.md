# Quick Hammer

Prime Bid is a web application for running online auctions. Auctioneers can list items and manage auction activity, bidders can place bids, and a super administrator can review commission payment proofs and view platform summaries.

The repository contains a React frontend and a separate Express/MongoDB backend. The frontend currently sends API requests to the deployed service at `https://quickhammer.onrender.com`; it does not automatically use a backend started on your computer.

## Features

- Account registration and login for bidders and auctioneers
- Auction listing, scheduling, browsing, and detail views
- Bid placement and auction leaderboards
- Auctioneer dashboards and auction management
- Commission payment-proof submission and super-admin review
- Cloudinary uploads for profile, auction, and payment-proof images
- Scheduled backend jobs for ended auctions and commission settlement

Super-admin tools are included in the backend API and frontend dashboard. Access is role-protected by the API.

## Technology stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, Vite 6, React Router, Redux Toolkit, Axios |
| UI and charts | Tailwind CSS 4, Radix UI, Lucide React, Chart.js, Recharts |
| Backend | Node.js, Express 4, Mongoose 8 |
| Data and authentication | MongoDB, bcrypt, JSON Web Tokens, cookie-parser |
| Integrations | Cloudinary, Nodemailer |
| Scheduled tasks | node-cron |

Dependency versions are declared in `frontend/package.json` and `backend/package.json`; the corresponding `package-lock.json` files should be kept in Git.

## Architecture

```text
Browser
  └── React/Vite frontend (frontend/)
        ├── Pages and reusable UI
        ├── Redux Toolkit store and async API actions (frontend/store/)
        └── Axios requests to the Quick Hammer API

Express API (backend/)
  ├── Routers → controllers → Mongoose models
  ├── MongoDB database (database name: quickhammer)
  ├── Cloudinary image storage
  ├── SMTP email notifications
  └── Cron jobs for auctions and commission settlement
```

The backend mounts its API groups under `/api/v1`. Authentication uses an HTTP-only `token` cookie, and the frontend sends credentialed requests.

## Project structure

```text
Prime Bid/
├── README.md
├── .gitignore
├── backend/
│   ├── automation/          # Scheduled auction and commission tasks
│   ├── config/              # Local backend configuration (not for Git)
│   ├── controllers/         # Request handling and application operations
│   ├── databse/             # MongoDB connection (directory name as in source)
│   ├── middlewares/          # Authentication, authorization, error handling
│   ├── models/              # Mongoose schemas
│   ├── router/              # Express route definitions
│   ├── utils/               # JWT and email helpers
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
└── frontend/
    ├── public/              # Static assets
    ├── src/
    │   ├── components/      # Reusable UI components
    │   ├── custom-components/
    │   ├── layout/
    │   ├── pages/           # Application screens
    │   ├── lib/
    │   ├── App.jsx
    │   └── main.jsx
    ├── store/               # Redux store and feature slices
    ├── my-vue-app/          # Separate, nested Vite starter scaffold
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── package-lock.json
```

`frontend/my-vue-app/` is a nested starter scaffold, separate from the main app in `frontend/src/`. The commands below run the main frontend.

## Prerequisites

- Node.js 20 LTS or later and npm
- MongoDB, either a local instance or a hosted connection string
- A Cloudinary account for image uploads
- SMTP credentials for email notifications

The frontend and backend have independent npm projects and dependencies; install them separately.

## Local setup

### 1. Install frontend dependencies

```bash
cd frontend
npm ci
```

`npm ci` installs the exact dependency versions recorded in the frontend lockfile.

### 2. Install backend dependencies

In another terminal, from the project root:

```bash
cd backend
npm ci
```

### 3. Configure the backend

The backend loads `backend/config/config.env` directly. Create that file and populate it with your own local or provider-issued values:

```dotenv
PORT=5000
FRONTEND_URL=http://localhost:5173
MONGO_URI=mongodb://127.0.0.1:27017/quickhammer

JWT_SECRET_KEY=replace-with-a-long-random-secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=7

CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_SERVICE=your-smtp-service
SMTP_MAIL=your-sender-address
SMTP_PASSWORD=your-smtp-password
```

These are variable names read by the backend. Keep actual credentials out of source control. `MONGO_URI` can point to a local MongoDB or a hosted cluster; the backend selects the `quickhammer` database. `FRONTEND_URL` must match the browser origin for credentialed CORS requests.

### 4. Start the backend

From `backend/`:

```bash
npm start
```

This runs `node server.js` and listens on the configured `PORT`. The package also defines `npm run dev`, but it invokes `nodemon`, which is not declared in the backend package dependencies; a clean `npm ci` therefore does not guarantee that this development script is available.

### 5. Start the main frontend

From `frontend/`:

```bash
npm run dev
```

Vite prints the local development URL (normally `http://localhost:5173`) in the terminal.

> **API configuration note:** The frontend Redux slices currently hard-code `https://quickhammer.onrender.com/api/v1`. Starting the local backend does not redirect those requests to `localhost`. To test the frontend against your local API, update those API URLs in `frontend/store/slices/` to use your local backend URL (for example `http://localhost:5000/api/v1`) and ensure `FRONTEND_URL` matches the Vite origin. Centralizing this URL in environment-based frontend configuration would avoid editing multiple files.

## Available commands

### Frontend (`frontend/`)

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production bundle in `frontend/dist/` |
| `npm run preview` | Preview the production bundle locally |
| `npm run lint` | Run ESLint against the frontend project |

### Backend (`backend/`)

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Express API with Node.js |
| `npm run dev` | Start with Nodemon if it is available in the environment; it is not declared in this package |

There is no root-level npm script or test script declared in the package manifests.

## API

The API base path is `/api/v1`. For a local backend configured on port `5000`, the full base URL is `http://localhost:5000/api/v1`. Authenticated routes require the token cookie and role indicated below.

| Method | Path | Access | Purpose |
| --- | --- | --- | --- |
| `POST` | `/user/register` | Public | Register a user; multipart form with profile image |
| `POST` | `/user/login` | Public | Sign in |
| `GET` | `/user/me` | Signed-in user | Get current profile |
| `GET` | `/user/logout` | Signed-in user | Clear the login cookie |
| `GET` | `/user/leaderboard` | Public | Get the bidder leaderboard |
| `POST` | `/auctionitem/create` | Auctioneer | Create an auction; multipart form with item image |
| `GET` | `/auctionitem/allitems` | Public | List auction items |
| `GET` | `/auctionitem/auction/:id` | Signed-in user | Get auction details and bidders |
| `GET` | `/auctionitem/myitems` | Auctioneer | List the signed-in auctioneer's items |
| `DELETE` | `/auctionitem/delete/:id` | Auctioneer | Delete an auction item |
| `PUT` | `/auctionitem/item/republish/:id` | Auctioneer | Republish an ended item |
| `POST` | `/bid/place/:id` | Bidder | Place or update a bid |
| `POST` | `/commission/proof` | Auctioneer | Submit commission payment proof (multipart form) |
| `DELETE` | `/superadmin/auctionitem/delete/:id` | Super Admin | Delete an auction item |
| `GET` | `/superadmin/paymentproofs/getall` | Super Admin | List payment proofs |
| `GET` | `/superadmin/paymentproof/:id` | Super Admin | Get payment-proof details |
| `PUT` | `/superadmin/paymentproof/status/update/:id` | Super Admin | Update proof status and amount |
| `DELETE` | `/superadmin/paymentproof/delete/:id` | Super Admin | Delete a payment proof |
| `GET` | `/superadmin/users/getall` | Super Admin | Get monthly bidder and auctioneer counts |
| `GET` | `/superadmin/monthlyincome` | Super Admin | Get monthly commission revenue |

For example, query public auction items from a local API:

```bash
curl http://localhost:5000/api/v1/auctionitem/allitems
```

For a protected endpoint, send the login cookie with the request. The browser frontend uses `withCredentials: true`.

## Database and external services

- MongoDB is accessed through Mongoose. The connection is configured by `MONGO_URI`; the database name is set to `quickhammer` in the connection code.
- Cloudinary stores user profile images, auction images, and commission payment-proof images.
- Nodemailer sends notifications using the configured SMTP service.
- Two `node-cron` jobs run in the backend for ended auctions and commission proof settlement.

## Screenshots

Screenshots are not currently included. Capture and add them when available.

| Screen | Screenshot |
| --- | --- |
| Home page | _Screenshot pending_ |
| Auction listing | _Screenshot pending_ |
| Auction detail | _Screenshot pending_ |

## Deployment

No deployment manifest or infrastructure configuration is present in the repository. A typical deployment requires:

1. Build the frontend with `cd frontend && npm ci && npm run build`, then host `frontend/dist/` on a static web host.
2. Deploy the backend as a Node.js service and configure the backend environment variables in the hosting provider's secret manager.
3. Set `FRONTEND_URL` to the deployed frontend origin and configure MongoDB, Cloudinary, and SMTP connectivity.
4. Update the frontend's hard-coded API base URLs to the deployed backend URL before building the frontend.

Do not upload `backend/config/config.env` or embed backend secrets in the frontend build.

## Troubleshooting

- **MongoDB connection fails:** Verify that MongoDB is running or that the hosted URI is correct and permitted by the provider's network rules.
- **Requests fail from the browser:** Check that the backend is running, the frontend API URLs point to the intended backend, and `FRONTEND_URL` matches the page origin exactly.
- **Login cookie is not retained:** Confirm that credentialed requests are enabled and that CORS and cookie settings are appropriate for the origin and deployment protocol.
- **Image uploads fail:** Check Cloudinary credentials and submit a supported PNG, JPEG, or WebP image.
- **Email notifications fail:** Verify the SMTP host, port, service, sender address, and password with the email provider.
- **`npm run dev` fails in `backend/`:** The backend script requires Nodemon, which is not declared as a dependency. Use `npm start` or add Nodemon as a backend development dependency if you maintain the package manifest.

## Future improvements

- Replace the frontend's repeated hard-coded API host with a configurable base URL.
- Add automated backend and frontend tests and a root-level workflow for running them.
- Capture and document screenshots for the primary user flows.
- Declare Nodemon as a backend development dependency if the `dev` script is intended for regular use.

## Contributing

1. Create a branch for your change.
2. Keep frontend and backend changes within their respective projects, and avoid committing environment files, dependencies, or generated output.
3. Run `npm run lint` and `npm run build` from `frontend/` for frontend changes. Exercise relevant backend routes manually; no backend test script is currently defined.
4. Open a pull request describing the change, how it was verified, and any required configuration updates.

No project-level license file was found. The backend package metadata lists ISC, but that alone does not establish a project-wide license.
