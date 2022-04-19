LAMBDA=hello

invokelocalevent:
	serverless invoke local --function $(LAMBDA) --stage dev -p event.json

invokelocal:
	serverless invoke local --function $(LAMBDA)

invoke:
	sls invoke --function $(LAMBDA)

deploy:
	sls deploy function -f $(LAMBDA)

logs:
	sls logs --function $(LAMBDA) --tail -s dev
