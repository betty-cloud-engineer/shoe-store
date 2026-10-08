# 👟 Containerized Static Shoe Store Website

A modern cloud engineering lab demonstrating end-to-end containerization and automated continuous deployment infrastructure. 

## 🏗️ Architecture & Workflow
This project utilizes a modern DevOps git-flow pipeline to package and deploy static assets automatically:
1. **Local Environment:** Developed using VS Code and tracked locally using Git on a partitioned environment.
2. **Containerization:** Configured a secure `Dockerfile` serving assets via a lightweight Nginx web server, utilizing `.dockerignore` for security compliance.
3. **CI/CD Automation:** Authored a native GitHub Actions pipeline (`deploy.yml`) triggered automatically on pushes to the `main` branch.
4. **Package Registry:** Automated builds compile and securely push Docker image assets directly to the **GitHub Container Registry (GHCR)**.
5. **Cloud Deployment:** Hosted live on **Azure Container Apps** utilizing a serverless Consumption workload profile scaled dynamically to 0 minimum replicas for zero-cost operation.

## 🛠️ Tech Stack & Skills Demonstrated
* **Version Control:** Git, GitHub, Git Flow, Branch Management
* **Containerization:** Docker, Dockerfile, Nginx Web Server Architecture
* **CI/CD Automation:** GitHub Actions, YAML Configuration, Package Management (GHCR)
* **Cloud Infrastructure:** Microsoft Azure, Resource Groups, Azure Container Apps (ACA), Serverless Scale-to-Zero Architecture
