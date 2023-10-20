# OSIWorkShop2023

__Note__ The instructions have been customized for this Workshop. 

### Clone the Repo

```
git clone https://github.com/sangramrath/OSIWorkShop2023.git
```

### Run Squidex locally using Containers

1. Navigate to the backend folder

```
cd OSIWorkShop2023/backend
```
2. Review the docker-compose-noproxy.yml and .env files. (For this workshop no changes are required)
```
docker-compose -f docker-compose-noproxy.yml up -d
```
3. Launch a browser and access Squidex at [http://localhost:5000](http://localhost:5000). 

Login using the credentials in the _.env_ file.

### Create the HOTELS sample app

1. Click the **Starter Sample Hotels** tile.
2. Provide a name for the app, for this workshop use the name **`osi-event-hotels`**.
3. Click **Create**.

Follow the instructor for a walkaround of the Squidex Headless CMS

### Retrieve Squidex app details for the frontend

Navigate to **[APP] > Settings > Clients** to make a note of the following:
1. Client Id
2. Client Secret

### Run the code through containers

1. Navigate to the frontend code folder at `OSIWorkShop2023\frontend`
2. Edit the __src/service/index.js__ file to update the _url, appName, clientId and clientSecret_ values with actual values from the Squidex App. (For this workshop only the client secret needs to be updated)
```
export const CONFIG = !DEV ? {
    url: 'http://localhost:5000',
    appName: 'osi-event-hotels',
    clientId: 'osi-event-hotels:default',
    clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
} : {
    url:  'http://localhost:5000',
    appName: 'osi-event-hotels',
    clientId: 'osi-event-hotels:default',
    clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};
```
2. Start the container using the following command
```
docker-compose -f docker-compose.yml up -d
```
3. Launch a browser and access the frontend at [http://localhost:3000](http://localhost:3000). 
