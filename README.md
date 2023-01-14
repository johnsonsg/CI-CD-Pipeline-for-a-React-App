# CI-CD-Pipeline-for-a-React-App
Build a CI/CD Pipeline for a React App | AWS CodePipeline Full Tutorial

* Testing commit to github.
* We will

## Steps and commands
* If you cloned this repo, please remember to install node_modeles: yarn install

## AWS Management Console
* Search: codepipeline
* Click on Create Pipeline
* Pipeline Settings:
  ** Set Pipeline Name to your choosing
  ** Service Role: New Service Role
  ** Role Name is automatically populated from Name
  ** Make sure that Type your service role name is 'checked'
  ** Click Next
* Source Provider: I am using GitHub
* Add Build Stage:
  **Build Provider - (optional): I am using AWS CodeBuild
  ** Create Project
  ** Environment: Manage Image
  ** Operating System: I'm using 'Unbuntu'
  ** Runtime(s): Standard
  ** Image: aws/codebuild/standard:4.0
  ** Then go to bottom and click on Continue to CodePipeline
* Add Deploy Stage
  **