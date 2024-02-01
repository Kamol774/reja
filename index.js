// NodeJS orqali kompyuterimizni(yadrlarni) to'liq qo'lga olamiz. 

const cluster = require("cluster")
const instanceCPUs = require("os").cpus();

console.log(instanceCPUs.length);
if(cluster.isMaster) {
  console.log(`Master thread via process id => ${process.pid}`);

  instanceCPUs.map((ele) => {
    cluster.fork();
  })
} else {
  console.log(`Worker thread via process id => ${process.pid}`);
}