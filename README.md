docker build . -t playlist-maker-front:v1
docker tag playlist-maker-front:v1 gcr.io/portfolio-367220/playlist-maker-front:v1
docker push gcr.io/portfolio-367220/playlist-maker-front:v1