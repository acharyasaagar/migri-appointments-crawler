const CronJob = require("cron").CronJob;
require("dotenv");

const crawler = require("./crawler");

const job = new CronJob("*/2 * * * *", crawler);
job.start();
