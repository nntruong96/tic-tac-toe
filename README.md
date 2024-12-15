# **Tic-Tac-Toe Game**

## **Technologies**

- **Next.js**: React framework for building web applications with server-side rendering and static site generation.
- **TypeScript**: Static typing for JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Jest & Testing Library**: Unit and integration testing framework.
- **React Context**: For managing global state.

---

## **Requirements**

- **Node.js** >= 18
- npm or yarn

---

## **Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/https://github.com/nntruong96/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## **Development Commands**

- **Start development server**:

  ```bash
  npm run dev
  ```

  Starts the local development server. Visit `http://localhost:3000` to view the app.

- **Build for production**:

  ```bash
  npm run build
  ```

  Compiles the app for production.

- **Start production server**:

  ```bash
  npm run start
  ```

  Runs the app in production mode after building.

- **Linting**:

  ```bash
  npm run lint
  ```

  Runs ESLint to find and fix issues in the codebase.

- **Run unit tests**:
  ```bash
  npm test
  ```
  Executes all Jest unit tests.

---

## **Folder Structure**

The project uses a structured layout for maintainability and scalability:

```
src/
├── app/
│   ├── game/             # Game page implementation
│   │   ├── page.tsx      # Game page
│   ├── layout.tsx        # Global app layout
│   ├── page.tsx          # Default root page
├── components/           # Reusable UI components
├── lib/                  # Utility libraries and helper functions
│   ├── utils.ts          # Helper utilities
│   ├── utils.test.ts     # Unit tests for utilities
├── providers/            # Context and providers
│   ├── GameProvider.tsx  # React Context for game state
├── types/                # Type definitions
│   ├── enum.ts           # Enums
│   ├── interface.ts      # Interfaces
│   ├── type.ts           # Type aliases
```

---

### **Detailed Explanation**

- **`app/`**:
  - Contains Next.js **pages** and global layout.
  - Includes individual pages such as `/game` and the default root page.
- **`components/`**:
  - Houses reusable UI components, such as buttons or game boards.
- **`lib/`**:
  - Includes helper functions and libraries (e.g., utility functions like data formatting or logic helpers).
- **`providers/`**:
  - Contains React Context or provider components to manage global states, such as `GameProvider` for game logic.
- **`types/`**:
  - Stores all TypeScript types, interfaces, and enums used throughout the app.

---

## **Time estimated**

**Total:**: 8,2h

- Setup project, install pkg: 0.2 h
- Implement common component Icons, Button, Modal: 1h
- Implement The 1st Flow(Game Provider, Game board, Game control): 2h
- Implement The 3rd Flow(Determine winner, Modal show 3 prompts): 1.5h
- Implement The 2nd Flow(Modal confirm reset game, handle logic reset button): 0.5h
- Implement The 4th Flow(Game Statistics, logic get,set data to locally): 0.7h
- Test and fix bug, refactor: 0.8h
- Implement unit test for all components: 1.5h

## **Future Enhancements**

1.  Improving UX:
    • When a winner has already been determined, clicking “reset” should not require confirmation.
    • Use memo for the Cell component to prevent it from re-rendering when its props have not changed.
2.  Adding Animations:
    • Add animations when a user clicks on a cell.
    • Add animations for rendering the board.
    • When a user hovers over a cell, display a placeholder icon showing the potential move.
    • Add animations to the button: include click animations and improve box shadows for different sizes.
3.  Design Inconsistency:
    • In step 3, “O” is Player 1 and “X” is Player 2.
    • However, in step 4, “O” is Player 2 and “X” is Player 1.
    This inconsistency needs to be resolved.
4.  Game Statistics:
    • Assign a unique ID to each game when it starts, and save game statistics by ID.
    Example: Start a game -> id:a1 -> a1: { x: 10, ties: 2, o: 5 }.
5.  Home Page Improvements:
    • Add a “Continue” button on the home page to resume the current ongoing game.
