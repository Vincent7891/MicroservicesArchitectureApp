# Microservices Application Monorepo

This repository contains a collection of (simple) microservices deployed using Kubernetes. Each service is containerised with Docker, and Kubernetes is used for orchestrating and managing the containers. This project includes a Go, express and flask service with an API gateway. The frontend uses react and tailwind CSS and was setup using vite. 

## Prerequisites
Before getting started, please ensure you have the following installed:

Kubernetes: To manage and orchestrate the microservices.
Docker: For containerising each service.
Minikube: For local Kubernetes deployment.

I have pushed the docker images to docker hub publically for all services.

## Getting Started

### 1. clone the repository 
```
git clone https://github.com/Vincent7891/Learning-Microservices.git
cd Learning-Microservices
```
### 2. Deploy Microservices
```
kubectl apply -f go-service/k8s/
kubectl apply -f node-service/k8s/
kubectl apply -f python-service/k8s/
kubectl apply -f api-gateway/k8s/
```
### 3. Monitor Deployments
```
kubectl get deployments
kubectl get pods
kubectl get services
```
### 4. Expose API Gateway for Local Access
```
minikube service api-gateway
```

### 5. Configure Environment Variables in frontend
```
API_GATEWAY_URL=http://<MINIKUBE_SERVICE_URL>
```
### 6. Run the frontend !
```
cd frontend
npm install
npm run dev
```









