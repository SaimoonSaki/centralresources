# 🤖 GOAT Publications — AI Feed Agent Setup Guide
> Step by step. Zero experience needed. Takes about 20 minutes.

---

## What this does when it's running

```
Every 6 hours, automatically:
  → Pulls latest articles from 6 ChE + BD news sources
  → Sends each article to Gemini AI for summarizing & categorizing
  → Builds a clean feed.json file
  → Pushes it to your GitHub repo
  → Netlify deploys your site with fresh news in 30 seconds
  → Visitors see updated news without you doing anything
```

---

## PART 1 — Install n8n on your computer

n8n is the automation tool. You run it locally (free forever) or use their cloud (free trial).

### Option A — Run locally (recommended, free forever)

You need Node.js installed first:
1. Go to **https://nodejs.org** → download the LTS version → install it
2. Open your terminal (Windows: search "cmd" or "PowerShell", Mac: search "Terminal")
3. Run this command:

```bash
npm install -g n8n
```

4. Then start n8n:

```bash
n8n start
```

5. Open your browser → go to **http://localhost:5678**
6. Create a free account when it asks (just for local login, no credit card)

> ⚠️ n8n must be running on your computer for the workflow to execute.
> You can leave it running in the background. If you restart your computer,
> just run `n8n start` again in your terminal.

### Option B — n8n Cloud (easier, free 14-day trial)

1. Go to **https://app.n8n.cloud**
2. Sign up free → 14-day trial, no card needed
3. After trial: $20/month OR switch to self-hosted (Option A)

---

## PART 2 — Get your Gemini API key (free)

Gemini is the AI that summarizes and categorizes the news. Free tier is generous enough.

1. Go to **https://aistudio.google.com**
2. Sign in with your Google account
3. Click **"Get API key"** → **"Create API key"**
4. Copy the key — looks like: `AIzaSyABC123...`
5. Save it somewhere safe (a notes app is fine)

**Free limits:**
- 1,500 requests/day
- 1,000,000 tokens/day
- 15 requests/minute

Your workflow uses ~50-200 requests per day. You're well within limits.

---

## PART 3 — Get your GitHub token

This lets n8n push the feed.json to your GitHub repo automatically.

1. Go to **https://github.com** → log in
2. Click your profile photo (top right) → **Settings**
3. Scroll all the way down → click **"Developer settings"**
4. Click **"Personal access tokens"** → **"Tokens (classic)"**
5. Click **"Generate new token"** → **"Generate new token (classic)"**
6. Give it a name: `goat-publications-feed`
7. Set expiration: **No expiration** (or 1 year)
8. Under "Select scopes" → tick **"repo"** (just the repo checkbox)
9. Click **"Generate token"**
10. **Copy the token immediately** — GitHub only shows it once
    Looks like: `ghp_ABC123...`

---

## PART 4 — Set up n8n variables

Variables store your secrets safely (never hardcoded in the workflow).

1. In n8n → click the **Settings** icon (bottom left) → **Variables**
2. Click **"Add variable"** and add these three:

| Variable Name | Value |
|---|---|
| `GEMINI_API_KEY` | Your Gemini key from Part 2 |
| `GITHUB_TOKEN` | Your GitHub token from Part 3 |
| `GITHUB_USERNAME` | Your GitHub username (e.g. `yourname`) |
| `GITHUB_REPO` | Your repo name (e.g. `goat-publications`) |

---

## PART 5 — Import the workflow

1. In n8n → click **"Workflows"** in the sidebar
2. Click **"Add workflow"** → **"Import from file"**
3. Select the file: **`n8n-workflow.json`** (in your goat project folder)
4. The workflow loads with all nodes pre-connected ✅
5. Click **"Save"** (top right)

---

## PART 6 — Test it manually first

Before turning on the schedule, run it once manually to make sure everything works.

1. In n8n → open your workflow
2. Click **"Test workflow"** (top right)
3. Watch the nodes light up green one by one
4. If everything goes green → ✅ success
5. Check your GitHub repo → you should see `feed.json` updated
6. Check your live site → feed page should show fresh articles

**If something goes red:**

| Error | Fix |
|---|---|
| RSS node fails | That feed URL might be temporarily down. Try again. |
| Gemini node fails | Check your API key is correct in Variables |
| GitHub node fails | Check your token and repo name in Variables |
| "sha" error on GitHub push | Normal on first run — run it again, it will work |

---

## PART 7 — Activate the schedule

Once the test run works:

1. In n8n → top right toggle → switch from **Inactive** to **Active**
2. Done. It will now run automatically every 6 hours.

```
You never need to touch it again.
News flows automatically.
Site updates automatically.
You focus on uploading books.
```

---

## PART 8 — Keep n8n running (important)

n8n needs to be running for the schedule to work.

**On your PC/laptop:**
- Leave the terminal window open with n8n running
- If you restart your PC, open terminal → run `n8n start` again
- Or set it up to run on startup (Google "run n8n on startup Windows/Mac")

**Better option — run n8n on a free server:**
- **Render.com** — free tier, deploy n8n 24/7, no PC needed
- **Railway.app** — similar, easy to set up
- Both have guides: search "deploy n8n on Render free"

This means the agent runs even when your laptop is off.

---

## How to add more news sources

In n8n → open the workflow → the RSS nodes each have a URL. You can:

1. Add new RSS Feed nodes for any site that has RSS
2. Connect them to the "Merge All Feeds" node
3. Save → done

**Finding RSS feeds for any site:**
- Most news sites have a `/feed` or `/rss.xml` or `/rss` URL
- Try: `sitename.com/rss.xml`
- Or Google: `"site:yoursite.com" RSS feed`

**More BD sources to add:**
```
Prothom Alo (English):  https://en.prothomalo.com/feed
Daily Star:             https://www.thedailystar.net/rss.xml
Financial Express BD:   https://thefinancialexpress.com.bd/rss.xml
BDjobs news:            https://news.bdjobs.com/rss/
```

---

## How to change how often it runs

1. In n8n → click the **"Every 6 Hours"** node
2. Change the interval to whatever you want
3. Every 3 hours, every 12 hours, once a day — your call

---

## Cost summary

| Thing | Cost |
|---|---|
| n8n (self-hosted) | **Free forever** |
| Gemini API | **Free** (1500 req/day) |
| GitHub | **Free** |
| Netlify | **Free** |
| **Total** | **£0** |

---

## Troubleshooting

**Feed page shows "Feed not connected yet"**
→ feed.json hasn't been pushed to GitHub yet. Run the n8n workflow manually once.

**Old articles keep appearing**
→ The dedup code removes duplicates by URL. If articles reappear, their URLs changed. Normal.

**Gemini stopped working**
→ Check your API key at aistudio.google.com. Regenerate if needed. Update in n8n Variables.

**GitHub push failing with 409 error**
→ Run the workflow again. First run sometimes has a SHA mismatch. Second run always works.

**n8n shows "Workflow was not activated"**
→ Toggle the workflow to Active in n8n. Check terminal — make sure n8n is still running.

---

*The feed updates itself. You just watch the news roll in. 🐐*
