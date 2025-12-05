# GitHub Pages Deployment Instructions

## Step 1: Create GitHub Repository
1. Go to https://github.com and sign in
2. Click "+" → "New repository"
3. Name: `variable-courses` (or your preferred name)
4. Set to **Public** (required for free GitHub Pages)
5. **Don't** initialize with README
6. Click "Create repository"

## Step 2: Connect and Push Code

After creating the repository, run these commands (replace YOUR_USERNAME with your GitHub username):

```bash
cd "C:\Users\vaish\New folder\variablecourses"
git remote add origin https://github.com/YOUR_USERNAME/variable-courses.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Select **/ (root)** folder
6. Click **Save**

## Step 4: Access Your Site

Your site will be live at:
`https://YOUR_USERNAME.github.io/variable-courses/`

(It may take 1-2 minutes to deploy)

## Updating Your Site

To update your site after making changes:

```bash
cd "C:\Users\vaish\New folder\variablecourses"
git add .
git commit -m "Your update message"
git push
```

Changes will be live in 1-2 minutes after pushing.



