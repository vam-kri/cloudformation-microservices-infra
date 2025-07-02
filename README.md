# CloudFormation Microservices Infra with ECS and CodePipeline

This repo contains CloudFormation templates and microservice apps to deploy:
- Multiple microservices to ECS
- Using CodePipeline + CodeBuild
- With shared ECR in a different AWS account

## Structure

- `cloudformation/`: All required templates
- `microservices/`: App code and buildspecs
- `pipeline-config/`: Per-service pipeline config files

## Deployment Flow

1. Deploy shared ECR in Main Account (cross-account access)
2. Deploy VPC + ECS Cluster in ECS Account
3. Build and Push Docker images using CodeBuild
4. CI/CD with CodePipeline to ECS

