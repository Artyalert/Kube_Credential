# Kube Credential - Full Project Scaffold

This repository contains a ready-to-run scaffold for the **Kube Credential** assignment.
It includes:
- Two backend microservices (Issuance & Verification) in Node.js + TypeScript
- React + TypeScript frontend (Vite)
- Dockerfiles for all services
- Kubernetes manifests (deployments, services, ingress)
- Unit tests (Jest + Supertest for backends)

## Quick local dev (recommended)
Prereqs: Node 18+, npm, Docker (optional for container runs)

### Run Issuance service (dev)
```
cd backend/issuance
npm install
npm run dev
# service runs on http://localhost:3001
```

### Run Verification service (dev)
```
cd backend/verification
npm install
npm run dev
# service runs on http://localhost:3002
```

### Run Frontend (dev)
```
cd frontend/web
npm install
npm run dev
# Vite dev server on http://localhost:5173
# Vite proxy in vite.config.ts expects API at http://localhost:3000 (you can run a proxy or adjust paths)
```

### Useful curl examples
Issue:
```
curl -X POST http://localhost:3001/issue -H "Content-Type: application/json" -d '{"id":"cred-1","name":"Alice"}'
```
Verify:
```
curl -X POST http://localhost:3002/verify -H "Content-Type: application/json" -d '{"id":"cred-1"}'
```

## Kubernetes
Replace `yourdockerhub/...` image placeholders in `k8s/` with your image names. Then:
```
kubectl apply -f k8s/
```

Pod-level worker id is injected via the Downward API into the env `WORKER_ID`.

## Tests
Backends use Jest + Supertest. From each backend folder:
```
npm install
npm test
```


# My Details 
Name : Aryan Tyagi
E-mail : aryanty842@gmail.com
Phone : +91(9058451223)
