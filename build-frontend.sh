docker stop frontend-apps 
docker rm frontend-apps   
docker rmi frontend-server 
docker build -t frontend-server . -f frontend/Dockerfile
docker create -it --name frontend-apps -p 3100:3100 frontend-server 
docker start frontend-apps 
