test:
	git push origin release/v$v
release:
	git commit -m ":memo: v$v changelog"
	git checkout main
	git merge --no-ff release/v$v -m ":bookmark: v$v"
	git tag -a v$v -m "Release v$v"
	git checkout develop
	git merge --no-ff release/v$v -m ":bookmark: v$v"
	git push origin develop
	git push origin main
	git push origin v$v
	git branch -d release/v$v