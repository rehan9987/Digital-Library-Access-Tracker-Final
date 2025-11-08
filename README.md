# Library Access Tracker - Campus Management System

A modern, responsive web application for managing library books, transactions, and analytics. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 📚 **Books Management**: View and manage library book catalog
- 📖 **Transactions Tracking**: Track book issues, returns, and overdue fines
- 📊 **Analytics Dashboard**: View library statistics and insights
- ➕ **Add Books & Transactions**: Create new books and transactions dynamically
- 📈 **Real-time Updates**: Analytics update automatically when new data is added
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Recharts** - Data visualization
- **React Hook Form** - Form management
- **Zod** - Schema validation

## Local Development

### Prerequisites

- Node.js 20+ (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn

### Setup

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd campus-book-watch-main
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:8080`
   - The app will automatically reload when you make changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Initial Setup

1. **Push your code to GitHub**
   ```sh
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Trigger the deployment**
   - The workflow will automatically run on push to `main` or `master` branch
   - You can also manually trigger it from **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

4. **Access your deployed app**
   - After deployment completes, your app will be available at:
   - `https://<your-username>.github.io/<repository-name>/`

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build the project automatically on every push to `main`/`master`
- Deploy to GitHub Pages
- Handle routing for React Router
- Set the correct base path automatically

### Manual Deployment

If you want to build and deploy manually:

```sh
# Build for production
npm run build

# The dist folder contains the production build
# You can deploy this to any static hosting service
```

## Project Structure

```
campus-book-watch-main/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── 404.html                # GitHub Pages SPA routing support
├── src/
│   ├── assets/                 # CSV data files
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Dashboard.tsx
│   │   ├── BooksTable.tsx
│   │   ├── TransactionsTable.tsx
│   │   └── Analytics.tsx
│   ├── hooks/                  # Custom React hooks
│   │   └── useLibraryData.ts
│   ├── lib/                    # Utility functions
│   │   ├── csvParser.ts
│   │   ├── analytics.ts
│   │   └── excelExport.ts
│   ├── pages/                  # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.ts              # Vite configuration
└── README.md
```

## Features in Detail

### Books Management
- View all books in the library
- Search books by title, author, or genre
- See availability status and stock levels
- Add new books to the catalog

### Transactions
- Track all book issues and returns
- Filter by status (All, Issued, Returned, Overdue)
- View fines and due dates
- Create new transactions

### Analytics
- Dashboard with key metrics
- Genre distribution charts
- Top borrowers list
- Overdue transactions tracking
- Export data to Excel

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please open an issue on GitHub.
