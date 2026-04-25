# Git Cheatsheet

## Start a repo
```bash
git init
```
Create a new git repository in the current folder.

## See what changed
```bash
git status
```
Shows modified/untracked files and what’s staged.

## Stage changes
```bash
git add .
```
Stages all changes in the current folder.

## Commit
```bash
git commit -m "Add day 01 materials"
```
Creates a snapshot with a message.

## View history
```bash
git log --oneline
```
Shows commit history.

## See differences
```bash
git diff
```
Shows unstaged differences.

## Branches
```bash
git branch
git switch -c my-branch
```
List branches / create a new branch.

## Connect to GitHub and push
```bash
git remote add origin <repo-url>
git push -u origin main
```

## Pull latest
```bash
git pull
```

## .gitignore basics
Use `.gitignore` to avoid committing files like:
- `__pycache__/`
- `.venv/`
- `*.db`

