docker stop service-apps 
docker rm service-apps   
docker rmi service-server 
docker build -t service-server . -f service/Dockerfile
docker create -it --name service-apps -p 3200:3200 service-server 
docker start service-apps 
