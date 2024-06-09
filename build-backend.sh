docker stop backend-apps 
docker rm backend-apps   
docker rmi backend-server 
docker build -t backend-server . -f backend/Dockerfile
docker create -it --name backend-apps -p 3300:3300 backend-server 
docker start backend-apps 
