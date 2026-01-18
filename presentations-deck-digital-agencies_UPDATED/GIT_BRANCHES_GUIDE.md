# 🌿 מדריך לעבור בין ענפים ב-Git

## פקודות בסיסיות:

### לעבור לענף מסוים:
```bash
git checkout deck/digital-agencies
```

### לראות באיזה ענף את עכשיו:
```bash
git branch --show-current
```

### לראות את כל הענפים:
```bash
git branch -a
```

---

## 📋 רשימת הענפים במצגות:

### 1. ענף משרדי פרסום דיגיטל:
```bash
git checkout deck/digital-agencies
```
**קובץ:** `decks/digital-agencies.html` (9 שקפים)

### 2. ענף מוקדי מכירה:
```bash
git checkout deck/sales-centers
```
**קובץ:** `decks/sales-centers.html` (6 שקפים)

### 3. ענף אירועים וובינרים:
```bash
git checkout deck/events-webinars
```
**קובץ:** `decks/events-webinars.html` (7 שקפים)

### 4. ענף ראשי (main):
```bash
git checkout main
```

---

## 💡 טיפים:

### לחזור לענף הקודם:
```bash
git checkout -
```

### ליצור ענף חדש ולעבור אליו:
```bash
git checkout -b deck/new-deck-name
```

### לראות מה שונה בין הענפים:
```bash
git diff main..deck/digital-agencies
```

---

## ⚠️ חשוב:

- לפני שתעברי לענף אחר, ודאי שאין שינויים לא שמורים
- אם יש שינויים, שמרי אותם עם `git add` ו-`git commit`
- או שמרי אותם עם `git stash` ואז `git stash pop` אחר כך
