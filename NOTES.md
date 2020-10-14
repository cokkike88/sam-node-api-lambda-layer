# Init project
sam init
- To Use the template -> select the option 2 and enter


# Build
- To build all funcitons run the next command
sam build -t <template>

- To build a function
sam build -t <template> <functionName>

# Build specific function
sam build <FUNCTION-DEFINED-YMAL>


# Validate template [yml|yaml]
sam validate
sam validate -t <path [yml|yaml]>

# Invoke local function
sam local invoke <function name in yml file>
sam local invoke -n env.json -e events/event-get-all-items.json getAllItemsFunction

# Invoke local api
- Up api in debug mode
sam local start-api -p 3008 -d 5858
-p port to up the api in docker
-d port to debug the api this port has to be the same that the .vscode/launch.json file

# Test
- Run in cosole
npx jest
- Run single test
npx jest  get-all-items.test.ts

# Debbug mode console
sam local invoke --debug-port 5858 <function name in yml file>

# Deploy 
sam deploy -g


https://cicd.serverlessworkshops.io/javascript.html

https://ecsworkshop.com/introduction/

# ========= DOCUMENTATION ============

# lambda function definition
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-functionname

# deploy a lambda function aws sam
https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-lambda-sam.html

# sam build documentation
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-build.html

# sam local invoke documentation
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-invoke.html

# sam deploy documentation
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html
https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-lambda-sam-deploy.html

# sam template global configuration (for all lambda functions)
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy-globals.html

# layer version to shared libraries or runtime code by a lambda function
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-layerversion.html


