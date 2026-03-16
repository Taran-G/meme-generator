# Photo & Video Searcher

A simple web app that lets users search for photos and videos using an external API. Users can view search results and save their favorite media locally in the browser.

---


---

## 📸 Screenshots
screenshorts can be found in pages folder


---

## 💡 Features

- Search for **photos** from **Pexels** and **Unsplash**  
- Search for **videos** from **Pexels**  
- Display results dynamically with **React components**  
- Save favorite media locally using **localStorage**  
- State management with **Redux Toolkit**  
- Styled with **Tailwind CSS** for a responsive and modern UI  
- Works on desktop and mobile devices  

---

## 🛠 Tech Stack / Tools Used

- **React** – UI framework  
- **Redux Toolkit** – state management  
- **Tailwind CSS** – utility-first styling  
- **JavaScript / JSX** – logic and rendering  
- **Pexels API** – photos and videos  
- **Unsplash API** – photos  
- **localStorage** – store saved media in the user’s browser
- **react-router** --for routing  
---

## ⚙️ How It Works

1. User types a search query in the search bar  
2. react sends a request to the chosen media API using **Fetch API**  
3. API responds with photos/videos matching the query  
4. Results are displayed dynamically on the page  
5. Users can click **Save** to store items locally in their browser using **localStorage**  

> Note: Saved items are **stored on the user's device**, so they won’t sync across different devices or browsers.

---

## 📝 Installation / Running Locally

1. Clone the repository:

```bash
git clone https://github.com/yourusername/photo-video-searcher.git
