FROM rust:1.48
USER root
WORKDIR /app
COPY ./app .
RUN cargo install wasm-pack
RUN cargo install cargo-generate
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g
ENV USER="root"
