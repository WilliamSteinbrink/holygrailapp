const redis = require('redis');
const client = redis.createClient();

// single value write and read
client.set("my_key", "Hello World!");
client.get("my_key", (err, reply) => {
  console.log(reply);
});

// multiple value write and read
client.mset('header', 0,'left', 0,'article', 0,'right', 0,'footer', 0);
client.mget(['header','left','article','right','footer'],
  (err, value) => {
    console.log(value);
  });

  client.quit();